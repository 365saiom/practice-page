// scroll에 따른 header 배경 변경
const section1 = document.querySelector(".section1");
const section7 = document.querySelector(".section7");
const header = document.querySelector("header");


let section1Height = section1.clientHeight;
let section7Height = section7.clientHeight;
let bodyHeight = document.body.scrollHeight;


document.addEventListener("scroll",()=>{
    // console.log(section1Height);
    if(scrollY>section1Height && scrollY < (bodyHeight-section7Height-1)){
        header.style.backgroundColor = "rgba(84,57,57,.25)";
        header.style.backdropFilter = "blur(25px)";
        header.style.display = "flex";
    }else if(scrollY<=section1Height){
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "none";
        header.style.display = "flex";
    }else if(scrollY > (bodyHeight-section7Height-1)){
        document.querySelector("header").style.display = "none";
    }
});

// section1의 mouseover효과
var circleSize = $(".circle").width()/2;
$(".section1").on("mousemove", (e) => {    
    $('.circle').css("opacity", 1);
    $('.circle').css("top", e.pageY - circleSize);
    $('.circle').css("left", e.pageX - circleSize);
    $('.circle').fadeIn();
});
$(".section1").on("mouseleave", (e) => {
    $('.circle').css("opacity", 1);
    $('.circle').fadeOut();
});

$(".section1").on("click", () => {
    $('.circle').css("opacity", 0);
});




// 배경 색상, 문구 변경

let changeColor = [
    "#5d9060",
    "#d26a51",
    "#aba35a",
    "#5661c7",
    "#b3956d"
];

let frontFont = [
    "ORIGINAL GREEN TEA",
    "PASSIONFRUIT & PEACH TEA",
    "PINEAPPLE & MANGO TEA",
    "BLUEBERRY & RASPBERRY TEA",
    "BLOOD ORANGE & HIBISCUS TEA"
]

let lastFont = [
    "A CLEAN TAKE ON A CLASSIC",
    "SUBTLY SWEET",
    "PERFECTLY PLAYFUL",
    "COOL AND REFRESHING",
    "CRISP AND EASY"
]

article = document.querySelector(".article1"),
font = document.querySelector(".item"),
front = font.querySelector("h1:first-child"),
last = font.querySelector("h1:last-child"),
slides = document.querySelector(".swiper-wrapper"),
slide = document.querySelectorAll(".swiper-slide"),
slideCount = slide.length;
let index = 0;


section1.addEventListener("click", () => {
    //슬라이드 이동
    swiper.slideNext();
});

// 슬라이드
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    speed: 500,
    slidesPerView: 1.6,
    spaceBetween: 400,
    loop: true,

  on: {
    slideChangeTransitionStart: function() {
        section1.style.backgroundColor = changeColor[index];
        // console.log(index);
        
        //글자 변경
        front.innerText = frontFont[index];
        front.classList.add("fade-in");
        last.innerText = lastFont[index];
        last.classList.add("fade-in");
        index++;
        if(index==5){
                index=0;
            }
        
    },
},
});