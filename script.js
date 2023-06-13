
/* Scroll to top functions */

const arrowTop = document.querySelector(".scrolltop");

const handleScrollPage = (event) => {
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


/* Cards displaying functions */

const cardOne = document.getElementById("card-one");

function displayOne(event) {
    document.getElementById("whole-card-one").style.display = "block";
}

cardOne.addEventListener('click', displayOne)


const cardTwo = document.getElementById("card-two");

function displayTwo(event) {
    document.getElementById("whole-card-two").style.display = "block";
}

cardTwo.addEventListener('click', displayTwo)


const cardThree = document.getElementById("card-three");

function displayThree(event) {
    document.getElementById("whole-card-three").style.display = "block";
}

cardThree.addEventListener('click', displayThree)


/* Cards hiding functions */

const wholeCardOne = document.getElementById("whole-card-one");

function hideOne(event) {
    document.getElementById("whole-card-one").style.display = "none";
}

wholeCardOne.addEventListener('click', hideOne)


const wholeCardTwo = document.getElementById("whole-card-two");

function hideTwo(event) {
    document.getElementById("whole-card-two").style.display = "none";
}

wholeCardTwo.addEventListener('click', hideTwo)


const wholeCardThree = document.getElementById("whole-card-three");

function hideThree(event) {
    document.getElementById("whole-card-three").style.display = "none";
}

wholeCardThree.addEventListener('click', hideThree)