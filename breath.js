var button = document.getElementById("button");
var body = document.body;
var start_time = 0;
var end_time = 0;
var select = document.getElementById("select");
select.value = 4;
var goal_breaths = select.value;
var t = document.createElement("h3");
var span = document.createElement("span");
var active = false;

select.addEventListener("change", function(){
  goal_breaths = select.value;
})

button.addEventListener("mousedown",function(){
  active = true;
  start_time = Date.now();
  span.innerHTML = "Hold the button down until " + goal_breaths + " breaths is reached.";
  t.appendChild(span);
  document.body.appendChild(t);
})

body.addEventListener("mouseup", function(){
  if (active){
    end_time = Date.now();
  }
  active = false;
  var duration = end_time - start_time;
  var e = document.getElementById("btext");
  duration /=1000;
  var breaths = 60/duration * goal_breaths;
  breaths = breaths.toFixed(2);
  span.innerHTML = "The respiration rate is " + breaths + " breaths per minute."
})

button.addEventListener("touchstart",function(){
  start_time = Date.now();
  span.innerHTML = "Hold the button down until " + goal_breaths + " breaths is reached.";
  t.appendChild(span);
  document.body.appendChild(t);
})

body.addEventListener("touchend", function(){
  end_time = Date.now();
  var duration = end_time - start_time;
  var e = document.getElementById("btext");
  duration /=1000;
  var breaths = 60/duration * goal_breaths;
  breaths = breaths.toFixed(2);
  span.innerHTML = "The respiration rate is " + breaths + " breaths per minute."
})



