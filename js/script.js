var tempInput = document.getElementById('tempInput');
var radioF = document.getElementById('radioF');
var radioC = document.getElementById('radioC');
var submit = document.getElementById('submit');
var clear = document.getElementById('clear');
var printNum = document.getElementById('printNum');
var tempForm = document.forms['tempForm'];
var tempForm;
var units;
radioF.setAttribute('checked', '');

//Grab a form
// tempForm = document.forms['tempForm'];
 //tempInput = document.forms['tempForm'].elements['tempinput'].value;
// units = document.forms['tempForm'].elements['units'].value;

var tempConvert = function() {
  var regEx = /^\d+$/g;
  var tempNum = tempInput.value;
  if (tempNum.match(regEx)) {
    if (radioF.checked === true) {
      var newTemp = (tempNum - 32) * (5 / 9);
      printNum.textContent = newTemp;
    } else {
      var newTemp = tempNum * (9 / 5) + 32;
      printNum.textContent = newTemp;
    }
  } else {
    alert('must use numbers only');
  }
};

var clearFx = function() {
  tempInput.value = '';
  printNum.textContent = '';
};

submit.addEventListener('click', tempConvert);
clear.addEventListener('click', clearFx);
