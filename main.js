const box = document.querySelector('article');

box.addEventListener('click', () => {
	new Anime(
		box, //선택자
		{ left: 300, backgroundColor: '#ff69b4' },
		{
			duration: 1000,
			easeType: 'linear',
			callback: () => {
				new Anime(box, { top: 300, backgroundColor: '#000000' });
			},
		}
	);
});
