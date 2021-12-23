const colors = ['black', 'yellow', 'blue', 'red', 'green', 'orange', 'gold', 'brown',
				'lightblue', 'darkred', 'gray', 'purple', 'navy', 'coral', 'violet'];
const btn = document.getElementById('btn');
const txt = document.querySelector('.span_text');
const h3_txt = document.querySelector('.h3_text');

btn.addEventListener('click', function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	txt.textContent = colors[randomNumber];
	txt.style.color = colors[randomNumber];
	btn.style.color = colors[randomNumber];
	h3_txt.style.color = colors[randomNumber];
	document.body.style.transition = '1s';
	txt.style.transition = '1s';
	btn.style.transition = '1s';
	h3_txt.style.transition = '1s';
})

function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
}