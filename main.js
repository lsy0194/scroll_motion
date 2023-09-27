/*
  window.scoolY : 브라우저 스크롤시 스크롤되는 거리값(동적)
  DOM.offset().top : 전체페이지에 특정 DOM의 세로 위치값(정적)
*/
const secs = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const pos3 = secs[2].offsetTop;
	console.log('scroll ', scroll);
	console.log('pos3 ', pos3);
});
