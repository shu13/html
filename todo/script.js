
function Todo (text){
  this.text = text,
  this.completed = false
  this.removed = false;
}

function TodoList(){
  this.todos = []
}

var submit = document.getElementById("todo-submit");
var text = document.getElementById("todo-text");
var todo_div = document.getElementById("todos");
var clear = document.getElementById("clear");
var clear_completed = document.getElementById("clear-struck");


submit.addEventListener("click",function(){
  var todo = new Todo(text.value);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "addTask.php?q="+text.value,false);
  xmlhttp.send();
  text.value = "";
  load_todos();
});

function load_todos(){
  todo_div.innerHTML = "";
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                todo_div.insertAdjacentHTML("beforeend",this.responseText);
            }
        };
        xmlhttp.open("GET", "fetchAll.php", false);
        xmlhttp.send();
        listen_to_children();
}

function listen_to_children(){
  var children = todo_div.children;
  for (child of children){
    (function(){
      var kept_child = child;
      kept_child.addEventListener("click", function(){
        if(kept_child.style.textDecoration=="line-through"){
          kept_child.style.textDecoration="";
        }else{
          kept_child.style.textDecoration = "line-through";
        }
        updateDb(kept_child);
      });
    }());
  }
}

function updateDb(child){
  var dataSet = {
  task:child.innerHTML,
  completed:0
}
if(child.style.textDecoration=="line-through"){
  dataSet.completed = 1;
}

$.ajax({
    data: dataSet,
    url: 'updateTasks.php',
    method: 'POST', // or GET
    success: function(msg) {
    }
});
}

clear_completed.addEventListener("click",function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "clearCompleted.php", false);
  xmlhttp.send();
  load_todos();
})


clear.addEventListener("click",function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "clearAll.php", false);
  xmlhttp.send();
  load_todos();
})

text.addEventListener("keyup",function(event){
  if(event.keyCode===13){
    submit.click();
  }
})

load_todos();


