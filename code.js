const mainBro = document.querySelector('.main')
const templateBro = document.querySelector('#templater')
const resultButton = document.querySelector('.start_button')

const inputWeight = document.querySelector('.input_weight')
const inputHeight = document.querySelector('.input_height')
const inputAge = document.querySelector('.input_age')

console.log(mainBro.innerHTML)

resultButton.addEventListener('click', calcResult)
inputAge.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      calcResult();
  }
});

function calcResult() {


  if (
    inputWeight.value !== '' && inputHeight.value !== '' && inputAge.value !== '' && mainBro.innerHTML === ''
  ) {
  const contentTemplate = templateBro.content.cloneNode(true)

  const imtResult = contentTemplate.querySelector('.imt_result')
  const idealWeight = contentTemplate.querySelector('.ideal_weight')
  const deltaWeight = contentTemplate.querySelector('.delta_weight')
  const idealCcal = contentTemplate.querySelector('.ideal_ccal')
  const resultSport = contentTemplate.querySelector('.result_sport')
  const resultDays = contentTemplate.querySelector('.result_days')


  imtResult.textContent = Math.round(inputWeight.value / ((inputHeight.value / 100) ** 2))
  idealWeight.textContent = ((inputHeight.value - 110) * 1.15).toFixed(1)
  deltaWeight.textContent = (inputWeight.value - idealWeight.textContent).toFixed(1)
  idealCcal.textContent = (10 * inputWeight.value + 6.25 * inputHeight.value - 5 * inputAge.value - 161) * 1.2
  resultSport.textContent = (500 / (0.035 * inputWeight.value + (1/(inputHeight.value/100)) * 0.029 * inputWeight.value)).toFixed(0)
  resultDays.textContent = ((7700 * deltaWeight.textContent) / 500).toFixed(0)

 

  mainBro.append(contentTemplate)
  } else {
    alert('укажите корректные данные')
  }

  inputWeight.value = ''
  inputHeight.value = ''
  inputAge.value = ''
}





