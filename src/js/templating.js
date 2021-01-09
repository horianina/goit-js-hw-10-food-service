import itemsTemplate from '../templates/gallery-items.hbs'
import dishes from '../menu.json'

console.log(dishes)
console.log(itemsTemplate)
const markup = itemsTemplate(dishes)
console.log(markup)
const galleryRef = document.querySelector('.js-menu')
galleryRef.insertAdjacentHTML('beforeend', markup)