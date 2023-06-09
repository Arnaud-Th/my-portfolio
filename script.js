const arrowTop = document.querySelector(".scrolltop");

const handleScrollPage = (event) => {
    console.log(event)
    const scrollTop = event.target.scrollingElement.scrollTop
    if (scrollTop > 0) {
        arrowTop.classList.add("visible")
    } else {
        arrowTop.classList.remove("visible")
    }
}

const handleScrollTop = () => window.scrollTo({top:0, behavior: "smooth"});

window.addEventListener('scroll', handleScrollPage)
arrowTop.addEventListener('click', handleScrollTop)