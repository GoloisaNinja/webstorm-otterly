export default function TypeWriter(str: string, el: Element): void {
	let textPosition: number = 0;
	let speed = 125;
	function typeEffect(): void {
		el.innerHTML = str.substring(0, textPosition);
		if (textPosition !== str.length + 1) {
			textPosition++;
			setTimeout(() => {
				typeEffect();
			}, speed);
		}
	}
	typeEffect();
}
