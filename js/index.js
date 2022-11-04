const options = {
    root: null,
    threshold: 0.5
}

let showFlag = false;

const HEADER = document.querySelector("header");

if(document.documentElement.scrollTop > 400) HEADER.classList.toggle("active");

const callback = (entries, observer) => {
    entries.forEach(entry => {
        HEADER.classList.toggle("active");
    });
}

const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector(".second"));