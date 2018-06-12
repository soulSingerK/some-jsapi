const container = document.querySelector('.container')
let liElement = document.createElement('li')

const mutationObserver = new MutationObserver((mutation) => {
  console.log(mutation)
})

mutationObserver.observe(container, {
  childList: true
})

liElement.innerHTML = '4'
setTimeout(() => {
  container.appendChild(liElement)
}, 1000)

setTimeout(() => {
  changeAText()
}, 2000)

function changeAText() {
  let aElement = document.querySelectorAll('a')[0]
  aElement.innerHTML = `go baidu`
}

