console.log('script loaded')

// // 4 ways to query:
// // document.getElementById(id)
// //document.querySelector(css_selector)
// // document.querySelectorAll('.square')


var squares = document.querySelectorAll('.square')

for (var i=0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    console.log(e)
    e.target.classList.toggle('big')
})
}

//document.addEventListener('mousemove', function (e) {
  //squares[0].textContent = e.offsetx
  //squares[0].textContent = e.offsety
  //})
