function insertNumber(num) {
  let existingNumbers = $("#result").val();
  $("#result").val(existingNumbers + num);
}

// clear result function
function clearResult() {
  $("#result").val("");
}

// calculate function
function calculate() {
   let result = eval($("#result").val());
   $("#result").val(result);
}