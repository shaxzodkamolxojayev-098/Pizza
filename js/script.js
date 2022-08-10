// let Body = document.querySelector('body');
let elForm = document.querySelector('.form');
let elSelect = document.querySelector('.select-1');
let elselected = document.querySelector('.selected');

elSelect.addEventListener('click', function(evt){
  evt.preventDefault();
// console.log('ok');
  if (elSelect.value == 'yupqa') {
    elselected.textContent = 'yupqa';
  } else if (elSelect.value == 'orta') {
    elselected.textContent = 'orta';
  } else if (elSelect.value == 'qalin') {
    elselected.textContent = 'qalin';
  }
})


// breadSize

let elInput1 = document.querySelector('.input-radio-1');
let elInput2 = document.querySelector('.input-radio-2');
let elInput3 = document.querySelector('.input-radio-3');
let elSelectedSize = document.querySelector('.selected-size');

elInput1.addEventListener('click', function(evt){
  evt.preventDefault();

  if (elInput1.checked == true) {
    elSelectedSize.textContent = '25 cm';
  }
})

elInput2.addEventListener('click', function(evt){
  evt.preventDefault();

  if (elInput2.checked == true) {
    elSelectedSize.textContent = '30 cm';
  }
})

elInput3.addEventListener('click', function(evt){
  evt.preventDefault();

  if (elInput3.checked == true) {
    elSelectedSize.textContent = '35 cm';
  }
})
