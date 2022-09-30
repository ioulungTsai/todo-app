const input = document.querySelector('[data-todo="new"]')
const list = document.querySelector("[data-todo='list']")

console.log(list)

input.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && e.target.value.length) {
    const li = document.createElement('li')
    li.textContent = e.target.value.trim()
    list.appendChild(li)
    input.value = ''
  }
})