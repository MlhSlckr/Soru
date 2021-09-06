const fars = document.querySelectorAll('.far');
const texts = document.querySelectorAll('.article-text')
const article = document.querySelectorAll('.article');

fars.forEach(far => {
  far.addEventListener('click', (e) => {
    const article = e.currentTarget.parentElement.parentElement
    article.classList.toggle('show')
  })
})