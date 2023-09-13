var Answer;
var test = "Light";
var errMessage;
function clearAll(){
  document.getElementById("input").innerHTML = 0;
  console.log();
}

function specify(number){
  console.log("Inside specify() \n"+ errMessage);
  if(document.getElementById("input").innerHTML == Answer && number != " % " && number != " + " && number != " - " && number != " / " && number != " × " || document.getElementById("input").innerHTML == errMessage) {
    document.getElementById("input").innerHTML = number;
  }
  else if(document.getElementById("input").innerHTML == "0"){
  statement = parseFloat(document.getElementById("input").innerHTML + number);
  document.getElementById("input").innerHTML = statement;
  }
  else{
    statement = document.getElementById("input").innerHTML + number;
    document.getElementById("input").innerHTML = statement;
    console.log(statement);
    if (number = " % "){ 
      statement = statement.replace(" % ","/100*");
    }
    if (number = " × "){ 
      statement = statement.replace(" × ","*");
    }
  }
}
function evaluateComputerizedStatement() {

  try {
    Answer = eval(statement);
    document.getElementById("input").innerHTML = Answer;
    console.log(Answer);
  } catch (err) {
    errMessage = String(err); // Assign the error message to errMessage
    document.getElementById("input").innerHTML = errMessage;
  }

  console.log("Inside evaluateComputerizedStatement() \n" + errMessage); // Now you can access errMessage outside the catch block
}


function changeTheme() {
  if (test == "Light") {
  console.log("Dark Theme Activated ⚫");
  test = "Dark";
  console.log(test);
  var container = document.getElementById("container");
  var input = document.getElementById("input");
  var buttonParent = document.getElementById("buttonParent");
  var body = document.getElementById("body");
  container.style.backgroundColor = "#212B41";
  input.style.color = "#0DB387";
  buttonParent.style.backgroundColor = "#2E3951";
  body.style.backgroundColor = "#2E3951";

  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");
  var b4 = document.getElementById("b4");
  var b5 = document.getElementById("b5");
  var b6 = document.getElementById("b6");
  var b7 = document.getElementById("b7");
  var b8 = document.getElementById("b8");
  var b9 = document.getElementById("b9");
  var b10 = document.getElementById("b10");
  var b11 = document.getElementById("b11");
  var b12 = document.getElementById("b12");
  var b13 = document.getElementById("b13");
  var b14 = document.getElementById("b14");
  var b15 = document.getElementById("b15");
  var b16 = document.getElementById("b16");
  var b17 = document.getElementById("b17");
  var zero = document.getElementById("zero");
  var equal = document.getElementById("equal");

  b1.style.backgroundColor = "#212B41";
  b2.style.backgroundColor = "#212B41";
  b3.style.backgroundColor = "#212B41";
  b4.style.backgroundColor = "#212B41";
  b8.style.backgroundColor = "#212B41";
  b12.style.backgroundColor = "#212B41";
  b16.style.backgroundColor = "#212B41";

  b1.style.color = "#18D4A3";
  b2.style.color = "#18D4A3";
  b3.style.color = "#18D4A3";
  b4.style.color = "#18D4A3";
  b8.style.color = "#18D4A3";
  b12.style.color = "#18D4A3";
  b16.style.color = "#18D4A3";

  b5.style.backgroundColor = "#2E3951";
  b6.style.backgroundColor = "#2E3951";
  b7.style.backgroundColor = "#2E3951";
  b9.style.backgroundColor = "#2E3951";
  b10.style.backgroundColor = "#2E3951";
  b11.style.backgroundColor = "#2E3951";
  b13.style.backgroundColor = "#2E3951";
  b14.style.backgroundColor = "#2E3951";
  b15.style.backgroundColor = "#2E3951";
  b17.style.backgroundColor = "#2E3951";
  zero.style.backgroundColor = "#2E3951";

  b5.style.color = "#92A39D";
  b6.style.color = "#92A39D";
  b7.style.color = "#92A39D";
  b9.style.color = "#92A39D";
  b10.style.color = "#92A39D";
  b11.style.color = "#92A39D";
  b13.style.color = "#92A39D";
  b14.style.color = "#92A39D";
  b15.style.color = "#92A39D";
  b17.style.color = "#92A39D";
  zero.style.color = "#92A39D";

  equal.style.color = "#212B41";
} else if (test == "Dark"){
  console.log("Light Theme Activated ⚪");
  test = "Light";
  var container = document.getElementById("container");
  var input = document.getElementById("input");
  var buttonParent = document.getElementById("buttonParent");
  var body = document.getElementById("body");
  container.style.backgroundColor = "#F4FDFB";
  input.style.color = "#373E47";
  buttonParent.style.backgroundColor = "white";
  body.style.backgroundColor = "white";

  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");
  var b4 = document.getElementById("b4");
  var b5 = document.getElementById("b5");
  var b6 = document.getElementById("b6");
  var b7 = document.getElementById("b7");
  var b8 = document.getElementById("b8");
  var b9 = document.getElementById("b9");
  var b10 = document.getElementById("b10");
  var b11 = document.getElementById("b11");
  var b12 = document.getElementById("b12");
  var b13 = document.getElementById("b13");
  var b14 = document.getElementById("b14");
  var b15 = document.getElementById("b15");
  var b16 = document.getElementById("b16");
  var b17 = document.getElementById("b17");
  var zero = document.getElementById("zero");
  var equal = document.getElementById("equal");

  b1.style.backgroundColor = "#F4FDFB";
  b2.style.backgroundColor = "#F4FDFB";
  b3.style.backgroundColor = "#F4FDFB";
  b4.style.backgroundColor = "#F4FDFB";
  b8.style.backgroundColor = "#F4FDFB";
  b12.style.backgroundColor = "#F4FDFB";
  b16.style.backgroundColor = "#F4FDFB";

  b1.style.color = "#373E47";
  b2.style.color = "#373E47";
  b3.style.color = "#373E47";
  b4.style.color = "#373E47";
  b8.style.color = "#373E47";
  b12.style.color = "#373E47";
  b16.style.color = "#373E47";

  b5.style.backgroundColor = "#F4FDFB";
  b6.style.backgroundColor = "#F4FDFB";
  b7.style.backgroundColor = "#F4FDFB";
  b9.style.backgroundColor = "#F4FDFB";
  b10.style.backgroundColor = "#F4FDFB";
  b11.style.backgroundColor = "#F4FDFB";
  b13.style.backgroundColor = "#F4FDFB";
  b14.style.backgroundColor = "#F4FDFB";
  b15.style.backgroundColor = "#F4FDFB";
  b17.style.backgroundColor = "#F4FDFB";
  zero.style.backgroundColor = "#F4FDFB";

  b5.style.color = "#373E47";
  b6.style.color = "#373E47";
  b7.style.color = "#373E47";
  b9.style.color = "#373E47";
  b10.style.color = "#373E47";
  b11.style.color = "#373E47";
  b13.style.color = "#373E47";
  b14.style.color = "#373E47";
  b15.style.color = "#373E47";
  b17.style.color = "#373E47";
  zero.style.color = "#373E47";

  equal.style.color = "white";
  }
}
