
export function ScrollTextNodeToTop(): void {
    const yPos = document.getElementById("scrollMarker")!.getBoundingClientRect().top;
    const yPosOffset = yPos + window.scrollY - 95;
    setTimeout(() => {
        window.scroll({left: 0, top: yPosOffset, behavior: "smooth"});
    }, 325)
}