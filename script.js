const card = document.querySelectorAll('.card')
const buttonAdd = document.querySelectorAll('.button-add')
const cart = document.querySelector('.cart')
const pickedTag = document.querySelectorAll('.picked-tag')
const cardDesc = document.querySelectorAll('.card-desc')
const divPickedTag = document.querySelectorAll('.div-picked-tag')
const plusButton = document.querySelectorAll('.plus-button')
const minusButton = document.querySelectorAll('.minus-button')

card.forEach((card, index) => {
	let addedCount = {[index]: 0}
	plusButton[index].addEventListener('click', () => {
		addedCount[index]++
		pickedTag[index].textContent = addedCount[index]
	})
	minusButton[index].addEventListener('click', () => {
		addedCount[index]--
		pickedTag[index].textContent = addedCount[index]
	})
	buttonAdd[index].addEventListener('click', () => {
		addToCart(card, index, addedCount)
	})
})

function addToCart(card, index, addedCount) {
	addedCount[index]++
	buttonAdd[index].style.display = 'none'
	divPickedTag[index].style.display = 'block'
	pickedTag[index].textContent = addedCount[index]
	const cartItem = document.createElement('div')
	cartItem.classList.add('cart-item')
	cartItem.innerHTML = cardDesc[index].textContent
	cart.appendChild(cartItem)

	const deleteButton = document.createElement('button')
	deleteButton.classList.add('delete-button')
	deleteButton.innerHTML = "X"
	deleteButton.addEventListener('click', () => {
		addedCount[index]--
		pickedTag[index].textContent = addedCount[index]
		cartItem.remove()
	})
	cartItem.appendChild(deleteButton)
}