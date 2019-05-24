var dataSet = {
  name:"john",
  birthday:"10/11/1945"
}

$.ajax({
    data: dataSet,
    url: 'postTest.php',
    method: 'POST', // or GET
    success: function(msg) {
        alert(msg);
    }
});
