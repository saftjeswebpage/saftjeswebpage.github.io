const header = document.getElementById('header');
const backgroundHeader = document.getElementById('backgroundHeader');
const home = document.getElementById('home');
const photos = document.getElementById('photos');
const poems = document.getElementById('poems');
const film = document.getElementById('film');
const profile = document.getElementById('profile');
const line = document.getElementById('line');
const about = document.getElementById('about');
const cross = document.getElementById('cross');
const click = document.getElementById('click');

function clickHeader() {
	header.style.width = '110%';
	header.style.height = '50%';
	profile.style.marginTop = '5%';
	line.style.marginTop = '7.5%';
	about.style.marginTop = '6%';
	cross.style.marginTop = '-0.2%';

};
function stopClickHeader() {
	header.style.width = '4.5%';
	header.style.height = '6.6%';
	profile.style.marginTop = '-50%';
	line.style.marginTop = '-10%';
	about.style.marginTop = '-10%';
	cross.style.marginTop = '-5%';
};

click.addEventListener('click', clickHeader);
cross.addEventListener('click', stopClickHeader);



