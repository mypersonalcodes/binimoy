
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

function calculate() {
  const rate =  0.0125;
  amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}

amountEl_one.addEventListener('input', calculate);

