const burger = document.querySelector('.menu-burger')
burger.addEventListener('click', e => {
  document.body.classList.toggle('menu-burger-open')
})
const allstars = document.querySelectorAll('.titles-mark-rating-item')
  allstars.forEach(item => {
    item.addEventListener('click', e => {
      if (Array.from(allstars).every(i => i.src ='./images/unactive-star.svg')) {
        item.src = './images/active-star.svg'
        while (item.previousElementSibling != null) {
          item = item.previousElementSibling
          item.src = './images/active-star.svg'
        }
      } else {
        item.src = './images/active-star.svg'
        let olditem = item
        while (item.nextElementSibling != null) {
          item = item.nextElementSibling
          item.src = './images/unactive-star.svg'
        }
        while (olditem.previousElementSibling != null) {
          olditem = olditem.previousElementSibling
          olditem.src = './images/active-star.svg'
        }
      }
    })
  })
const form = document.querySelector('.commodity-description-form-form')
const submitButton = document.querySelector('.description-form-form-submit btn')
const inputName = document.querySelector('.description-form-form-input')
const textareaComment = document.querySelector('.description-form-form-textarea')
form.addEventListener('submit',e => {
  if (inputName.value == '' || textareaComment.value == '' || Array.from(allstars).every(i => i.src == './images/unactive-star.svg')) {
    e.preventDefault()
  }
  else {
    const date = new Date()
    let layoutPartDay = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
    let layoutPartMonth = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth + 1
    let layout = `<div class="commodity-description-review">
              <div class="commodity-description-review-title"></div>
              <div class="commodity-description-review-who">
                <div class="description-review-who-avatar"><img src="./images/avatar.svg" alt=""></div>
                <div class="description-review-who-introdution">
                  <div class="review-who-introdution-title">${inputName.value}</div>
                  <div class="review-who-introdution-date">${layoutPartDay}.${layoutPartMonth}.${String(date.getFullYear()).substring(2,4)}</div>
                </div>
              </div>
              <div class="commodity-description-review-rating">
                <div class="description-rating-review-items">
                  ${document.querySelector('.form-titles-mark-rating').innerHTML}
                </div>
              </div>
              <div class="description-rating-review-description">${textareaComment.value}</div>
            </div>`
    document.querySelector('.commodity-description-reviews').insertAdjacentHTML('afterbegin',layout)
  }
})
const btnBuy = document.querySelector('.commodity-description-actions-btn')
const btnLike = document.querySelector('.commodity-description-actions-like')
const svg = document.querySelector('.commodity-description-actions-like svg')
const countBtnBuy = document.querySelector('.count-shopping-cart')
const countBtnLike = document.querySelector('.count-header-favorites')
function click(e) {
  btnBuy.textContent = 'В корзине'
  countBtnBuy.style.opacity = '1'
  let countBtnBuyTextContent = countBtnBuy.textContent
  let countBtnBuyTextContentNum = Number(countBtnBuyTextContent)
  countBtnBuyTextContent = ++countBtnBuyTextContentNum
  countBtnBuy.textContent = countBtnBuyTextContent
  btnBuy.removeEventListener('click', click)
}
btnBuy.addEventListener('click',click)
btnLike.addEventListener('click',e => {
  if(!svg.classList.contains('active')) {
    svg.classList.add('active')
    countBtnLike.style.opacity = '1'
    let countBtnLikeTextContent = countBtnLike.textContent
    let countBtnLikeTextContentNum = Number(countBtnLikeTextContent)
    countBtnLikeTextContent = ++countBtnLikeTextContentNum
    countBtnLike.textContent = countBtnLikeTextContent
  } else {
    if(countBtnLike.textContent = '1') {
      svg.classList.remove('active')
      countBtnLike.style.opacity = '0'
      let countBtnLikeTextContent = countBtnLike.textContent
      let countBtnLikeTextContentNum = Number(countBtnLikeTextContent)
      countBtnLikeTextContent = --countBtnLikeTextContentNum
      countBtnLike.textContent = countBtnLikeTextContent
    } else {
      let countBtnLikeTextContent = countBtnLike.textContent
      let countBtnLikeTextContentNum = Number(countBtnLikeTextContent)
      countBtnLikeTextContent = ++countBtnLikeTextContentNum
      countBtnLike.textContent = countBtnLikeTextContent
    }
  }
})