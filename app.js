const fass = document.querySelectorAll('.fas');
/*
fass.forEach(fas => {
  fas.addEventListener('click', (e) => {
    const article = e.currentTarget.parentElement.parentElement;
    article.classList.toggle('show')
    fas.classList.toggle('rotate')
  })
})
*/

fass.forEach(fas => {
  fas.addEventListener('click', (e) => {
    const article = e.currentTarget.parentElement.parentElement;
    article.classList.toggle('show');
    fas.classList.toggle('rotate');
  })
})