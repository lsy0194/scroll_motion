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
	const scroll_2 = scroll - secs[1].offsetTop + baseline;
	const initScroll = 0;
	h1.style.transform = `translateX(${scroll}px) rotate(${scroll}deg) scale(${1 + scroll / 400})`;
	h1.style.opacity = 1 - scroll / 400;

	if (scroll >= secs[1].offsetTop - baseline) {
		h1_2.style.transform = `translateX(${scroll_2}px) rotate(${scroll_2}deg) scale(${
			1 + scroll_2 / 400
		})`;
		h1_2.style.opacity = 1 - scroll_2 / 400;
	} else {
		//원래위치로 스크롤시 조금씩 오차범위가 발생하기 떄문에 원래 값으로 강제 보정처리
		h1_2.style.transform = `translateX(${initScroll}px) rotate(${initScroll}deg) scale(${
			1 + initScroll / 400
		})`;
		h1_2.style.opacity = 1 - initScroll / 400;
	}
});
