const input = document.querySelector('input')
const p = document.querySelector('p')

const total = localStorage.getItem('total')
input.value = total
p.innerText = `ganho total: ${Number(total) + 100 - Number(total) * 0.2}`


function totalMudou() {
  const value = Number(input.value)
  localStorage.setItem('total', value)
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`
}

input.addEventListener('keyup', totalMudou)
