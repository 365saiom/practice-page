// header 배경
// console.log(window);
window.addEventListener("scroll",()=>{
    // console.log(scrollY);
    if(scrollY > 660){
        document.querySelector("header").style.backgroundColor = "rgba(84,57,57,.25)";
        document.querySelector("header").style.backdropFilter = "blur(25px)";
    }else if(scrollY<=660 || scrollY>=4765){
        document.querySelector("header").style.backgroundColor = "transparent";
    }
});

// section1의 mouseover효과
var circleSize = $(".circle").width()/2;
$(".section1").on("mousemove", (e) => {    
    $('.circle').css("top", e.pageY - circleSize);
    $('.circle').css("left", e.pageX - circleSize);
    $('.circle').fadeIn();
});
$(".section1").on("mouseleave", (e) => {
  $('.circle').fadeOut();
});


// 슬라이더
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 1.6,
    spaceBetween: 280,
    loop: true,
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

const section1 = document.querySelector(".section1"),
      article = document.querySelector(".article1"),
      font = document.querySelector(".item"),
      front = font.querySelector("h1:first-child"),
      last = font.querySelector("h1:last-child"),
      slides = document.querySelector(".swiper-wrapper"),
      slide = document.querySelectorAll(".swiper-slide"),
      slideCount = slide.length;
let index = 1;

section1.addEventListener("click", () => {
    //배경 변경
    section1.style.backgroundColor = changeColor[index];
    //글자 변경
    front.innerText = frontFont[index];
    last.innerText = lastFont[index];
    //슬라이드 이동
    swiper.slideTo(index);
    // const realIndex = swiper.realIndex;
    // console.log(realIndex);
    console.log(index);
    index++;

    if(index==5){
            index=0;
        };
    }
    // if(index==5){
    //     setTimeout(()=>{
    //         index=0;
    //     },500);
    // }
);