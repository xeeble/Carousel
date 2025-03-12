const image = document.getElementById("person");
const job = document.getElementById("job");
const info = document.getElementById("info");
const author = document.getElementById("name");
const btns = document.querySelectorAll(".btn");
const random = document.querySelector(".btn-random");

let index = 0;
// example data
const reviews = [
    {
        id:1,
        name:"Jane Doe",
        job:"web developer",
        img: "",
        text: "Im a web developer",
    },
    {
        id:2,
        name:"Mary Sue",
        job:"backend developer",
        img: "",
        text: "Im a backend developer",
    },
    {
        id:3,
        name:"Luke Hall",
        job:"front-end developer",
        img: "",
        text: "Im a front-end developer",
    },
    {
        id:4,
        name:"Jake Smith",
        job:"web developer",
        img: "",
        text: "Im a web developer",
    },
]

//load first element on page load
window.addEventListener('DOMContentLoaded', function(){
    const review = reviews[index];
    image.img = review.img;
    job.textContent = review.job;
    info.textContent = review.text;
    author.textContent = review.name;
})

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const ev = e.currentTarget.classList;
        if(ev.contains('next')){
            if(index+1 <= reviews.length-1){
                index += 1;
            } 
            else { 
                index = 0;
            }
        }
        if(ev.contains('prev')){
            if(index-1 >= 0){
                index -= 1;
            } 
            else { 
                index = reviews.length-1;
            }
        }
        const review = reviews[index];
        image.src = review.img;
        job.textContent = review.job;
        info.textContent = review.text;
        author.textContent = review.name;
    })
});
