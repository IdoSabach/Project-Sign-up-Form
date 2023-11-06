let curser = document.querySelector('.curser')
document.addEventListener('mouseover', function(e){
  let x = e.clientX
  let y = e.clientY

  curser.style.left = x + 'px'
  curser.style.top = y + 'px'
})