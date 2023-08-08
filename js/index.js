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

article1 = document.querySelector(".article1"),
item1 = document.querySelector(".item1"),
text1 = item1.querySelectorAll("h1"),
item2 = document.querySelector(".item2"),
text2 = item2.querySelectorAll("h1"),
slides = document.querySelector(".swiper-wrapper"),
slide = document.querySelectorAll(".swiper-slide"),
index = 0;

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
            for (let text of text1) {
                text.classList.remove("active");
                // console.log(text);
                // console.log(text1);
            }
            index++;
            if(index === text1.length){
                // idx = 0;
                index = 0;
                text1[0].classList.add("active");
                section1.style.backgroundColor = "changeColor[0]";
            } else{
                text1[index].classList.add("active");
                section1.style.backgroundColor = "changeColor[index]";
            }
        
        //글자 변경
        // if(index==5){
        //         index=0;
        //     }
        
    },
},
});