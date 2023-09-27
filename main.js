/*
  window.scoolY : 브라우저 스크롤시 스크롤되는 거리값(동적)
  DOM.offset().top : 전체페이지에 특정 DOM의 세로 위치값(정적)
*/
const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h1_2 = secs[1].querySelector('h1');
const baseline = 300;
//baseline은 박스의 모션 시작기점을 기존 박스 영역에서 300만큼위로올림
window.addEventListener('scroll', () => {
	const scroll = window.scrollY;

	//박스에 실적용되는 스크롤 수치값을 반대로 300만큼 더해줘야됨

	h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${1 + scroll / 400})`;
	h1.style.opacity = 1 - scroll / 400;

	let scroll_2 = 0;
	//스크롤 거리값이 2번째 섹션영역에 들어가면 scroll적용되는 값을 담고
	//반대로 2번째 섹션영역을 벗어나면 scroll_2의 값을 0으로 초기화
	scroll >= secs[1].offsetTop - baseline
		? (scroll_2 = scroll - secs[1].offsetTop + baseline)
		: (scroll_2 = 0);
	h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${
		1 + scroll_2 / 400
	})`;
	h1_2.style.opacity = 1 - scroll_2 / 400;
});
