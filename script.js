const numbers = document.querySelector('.numbers')

const number = document.querySelectorAll('.number')

const tel = document.querySelector('.tel')

const numbersWidth = numbers.offsetWidth
const numbersHeight = numbers.offsetHeight

let phones = document.querySelectorAll('input[type="tel"]') // Находим все поля, в которые вводятся номера телефонов

tel.addEventListener('keypress', function (e) {
  e.preventDefault()
})

number.forEach(item => {
  let rand1 = Math.floor(Math.random() * (numbersWidth - item.offsetWidth - 4))
  let rand2 = Math.floor(Math.random() * (numbersWidth - item.offsetHeight - 4))
  item.style.left = rand1 + 'px'
  item.style.top = rand2 + 'px'

  setInterval(function () {
    item.classList.add('anim')
    let rand1 = Math.floor(
      Math.random() * (numbersWidth - item.offsetWidth - 4)
    )
    let rand2 = Math.floor(
      Math.random() * (numbersWidth - item.offsetHeight - 4)
    )
    item.style.left = rand1 + 'px'
    item.style.top = rand2 + 'px'
  }, 2000)
})

numbers.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('number')) {
    console.log(e.target.dataset.number)
    tel.value += e.target.dataset.number

    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = tel.value.replace(/\D/g, '')

    if (def.length >= val.length) val = def

    tel.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a
    })
  }
})
