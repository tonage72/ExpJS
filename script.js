const card = document.querySelectorAll('.card')
const buttonAdd = document.querySelectorAll('.button-add')
const cart = document.querySelector('.cart')
const pickedTag = document.querySelectorAll('.picked-tag')
const cardDesc = document.querySelectorAll('.card-desc')

card.forEach((card, index) => {
	let addedCount = {[index]: 0}
	buttonAdd[index].addEventListener('click', () => {
		addToCart(card, index, addedCount)
	})
})

function addToCart(card, index, addedCount) {
	addedCount[index]++
	console.log(addedCount)
	const cartItem = document.createElement('div')
	pickedTag[index].style.backgroundColor = 'orange'
	cartItem.classList.add('cart-item')
	cartItem.innerHTML = cardDesc[index].textContent
	cart.appendChild(cartItem)

	const deleteButton = document.createElement('button')
	deleteButton.classList.add('delete-button')
	deleteButton.innerHTML = "X"
	deleteButton.addEventListener('click', () => {
		cartItem.remove()
	})
	cartItem.appendChild(deleteButton)
}