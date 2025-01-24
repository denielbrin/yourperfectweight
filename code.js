const mainBro = document.querySelector('.main')
const templateBro = document.querySelector('#templater')
const resultButton = document.querySelector('.start_button')

const inputWeight = document.querySelector('.input_weight')
const inputHeight = document.querySelector('.input_height')
const inputAge = document.querySelector('.input_age')

console.log(mainBro.innerHTML)

resultButton.addEventListener('click', calcResult)

function calcResult() {


  if (
    inputWeight.value !== '' && inputHeight.value !== '' && inputAge.value !== '' && mainBro.innerHTML === ''
  ) {
  const contentTemplate = templateBro.content.cloneNode(true)

  const imtResult = contentTemplate.querySelector('.imt_result')
  const idealWeight = contentTemplate.querySelector('.ideal_weight')
  const deltaWeight = contentTemplate.querySelector('.delta_weight')

  imtResult.textContent = Math.round(inputWeight.value / ((inputHeight.value / 100) ** 2))
  idealWeight.textContent = ((inputHeight.value - 110) * 1.15).toFixed(1)
  deltaWeight.textContent = (inputWeight.value - idealWeight.textContent).toFixed(1)

 

  mainBro.append(contentTemplate)
  } else {
    alert('укажите корректные данные')
  }

  inputWeight.value = ''
  inputHeight.value = ''
  inputAge.value = ''
}


