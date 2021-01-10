const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const wh = document.getElementById('wh');
const te = document.getElementById('te');

let realData = '';
let text = '';
let url = 'https://rakesh-yadav1999.github.io/quotes/';

const tweetQ = () => {
	window.open(`https://twitter.com/intent/tweet?text=${text}`);
};

const whatQ = () => {
	window.open(`https://wa.me/?text=${text}`);
};

const teQ = () => {
	window.open(`https://t.me/share/url?url=${url}&text=${text}`);
};

const getNewQuotes = () => {
	let rnum = Math.floor(Math.random() * 1000);
	quote.innerText = `${realData[rnum].text}`;
	text = `${realData[rnum].text}`;
	realData[rnum].author == null
		? (author.innerText = '- Unknown')
		: (author.innerText = `- ${realData[rnum].author}`);
};

const getQuotes = async () => {
	try {
		let data = await fetch('https://type.fit/api/quotes');
		realData = await data.json();
		getNewQuotes();
	} catch (error) {}
};

getQuotes();

newQ.addEventListener('click', getNewQuotes);
tweet.addEventListener('click', tweetQ);
wh.addEventListener('click', whatQ);
te.addEventListener('click', teQ);
