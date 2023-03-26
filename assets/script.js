const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById('#banner');
const arrowleft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('#banner > img');
const bannerText = document.querySelector('#banner > p');

const numberOfSlide = slides.length;
let i = 0;

/* Create bullet (dot) */ 
function showDots() {
	const dots = document.querySelector('.dots');
	for (let j = 0; j < numberOfSlide; j++) {
	const dot = document.createElement('span');
	dot.id='span' + j;
    dot.addEventListener('click', function(event) {
      i = Number(event.target.id.replace('span', ''));
      showSlide();
	});
	dot.classList.add('dot');
	dots.appendChild(dot);
	if (j == 0) { 
		dots.children[j].classList.add('dot_selected');
	}
	}
 }
 showDots();
console.log(showDots);
/* bullet */

 function selected() {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot_selected');
	}
	dot[i].classList.add('dot_selected');
 }
/* Lien des  tagline */
function showSlide() {
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
	selected();
}
showSlide();
/* function to move arrowleft */
arrowleft.addEventListener("click", function () {
	clearTimeout(timeoutId);
	if (i == 0) {
		i = numberOfSlide - 1;
	}
	else {
		i--;
	}showSlide();
	startTimeout();
});
/*  appelation fonction pour faire bouger avec la fleche droite */	
arrowRight.addEventListener("click", function () {
	clearTimeout(timeoutId);
	if (i == numberOfSlide - 1) {
		i = 0;
	} else {
			i++;
	}showSlide();
	startTimeout();
});

let timeoutId;

function startTimeout() {
	timeoutId = setTimeout(function(){
		if (i == numberOfSlide - 1) {
			i = 0;
		} else {
			i++
		}
		showSlide();
		startTimeout();
	}, 5000);
}

startTimeout();