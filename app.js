const range = document.querySelector('.slider__input')
const img = document.querySelector('.slider__image')
const box = document.querySelector('#box')

range.addEventListener("change", _.throttle(changeSize,100))
window.addEventListener('mousemove', _.debounce(onMouseMove, 100));

function changeSize(evt) {
  img.style.width=evt.currentTarget.value*6+'px'
}
function onMouseMove(event) {
  box.style.left=event.clientX-25+'px'
  box.style.top=event.clientY-25+'px'
  console.log(event.clientX)
}