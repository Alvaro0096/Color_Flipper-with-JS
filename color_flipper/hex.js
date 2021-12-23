const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const txt = document.querySelector('.span_text');
const h3_txt = document.querySelector('.h3_text');

btn.addEventListener('click', function() {
	let hexcolor = '#';
	for (let i = 0; i < 6; i++) {
		hexcolor += hex[getRandomNumber()];
	}
	txt.textContent = hexcolor;	
	document.body.style.backgroundColor = hexcolor;
	btn.style.color = hexcolor;
	h3_txt.style.color = hexcolor;
	document.body.style.transition = '1s';
	btn.style.transition = '1s';
	h3_txt.style.transition = '1s';
})

function getRandomNumber(){
	return Math.floor(Math.random() * hex.length);
}