// MOBILE NAV FUNCTIONALITIES
let hambtn = document.getElementsByClassName("hamberger-icon-mobile");
hambtn[0].addEventListener("click", ()=>{
    console.log("button working");
    let sideMenu = document.getElementsByClassName("side-menu-container");
    sideMenu[0].style.left = "0%";
});

let closeHamBtn = document.getElementsByClassName("mobile-cross-btn");
closeHamBtn[0].addEventListener("click" , ()=>{
    console.log("close button is working");
    let sideMenu = document.getElementsByClassName("side-menu-container");
    sideMenu[0].style.left = "-100%";
}) ;
// MOBILE NAV FUNCTIONALITIES END




// PICTURE RESIZE
let projectHeight= document.getElementsByClassName("project-container-link");
for(i =0; i < projectHeight.length; i++){
    let projectHeightAll= projectHeight[i];
    let imgHeight =projectHeightAll.offsetWidth;
    projectHeightAll.style.height = imgHeight + "px";
    window.addEventListener("resize", ()=>{
        imgHeight =projectHeightAll.offsetWidth;
        projectHeightAll.style.height = imgHeight + "px";
    });
    
}





// SIDE MENU FUNCTIONALITY
// click a button - hide all element except one
//show a loading screen
let header = document.querySelector(".header-main-container");
let sectionPortfolio = document.querySelector(".portfolio-section");
let aboutmeSection = document.querySelector(".aboutmeSection");
let skillSection = document.querySelector(".skills-section");

let abtmebtn = document.querySelector('.js-side-aboutme');
let myworkbtn= document.querySelector(".js-side-mywork");
let skillsbtn = document.querySelector(".js-side-skills");

let hidenShow = (hidefirst, hidesecond, hidethird, showone)=>{
    //hide 3 section 
    //show one section
    hidefirst.style.display= "none";
    hidesecond.style.display= "none";
    hidethird.style.display= "none";
    showone.style.display = "block";
    window.scrollTo(0, 0);
}

let loadingScreenfunc = ()=>{
    let mainLoadingScreen = document.querySelector(".loading-section");
    mainLoadingScreen.style.display ="block";
    let loadingtimeout= Math.floor((Math.random() * 3) +1);
    console.log(loadingtimeout +" loading");
    document.querySelector(".loading-bar-fill").style.animation = "loadingScreen " + loadingtimeout +"s ease-in";

    // document.querySelector(".loading-bar-fill").style.animation = "loadingScreen 2s ease-in";
    setTimeout(()=>{
        mainLoadingScreen.style.display ="none";
    }, (loadingtimeout * 1000));
}

abtmebtn.addEventListener("click", ()=>{
    console.log("about me button worked");
    hidenShow(header, sectionPortfolio, skillSection, aboutmeSection);
    loadingScreenfunc();
});

myworkbtn.addEventListener("click", ()=>{
    hidenShow(header, skillSection, aboutmeSection, sectionPortfolio);
    document.querySelector(".portfolio-section-h1").style.marginTop = "30px";
    sectionPortfolio.style.paddingBottom ="300px";
    loadingScreenfunc();
});

skillsbtn.addEventListener("click", ()=>{
    hidenShow(header, aboutmeSection, sectionPortfolio, skillSection);
    loadingScreenfunc();
});



// // CHANGING HEADER BACKGROUND IMAGE
// let headerElement = document.querySelector(".header-main-container");
// let headerBGcount = 1;
// let headerBGImgArray = ['./app/img/sliderHeader/sliderHeader1.webp', './app/img/sliderHeader/sliderHeader2.webp', './app/img/sliderHeader/sliderHeader3.webp' , './app/img/sliderHeader/sliderHeader4.webp' ];
// setInterval(() => {
//     if(headerBGcount >= 0 && headerBGcount < 3){
//         headerElement.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('"  +  headerBGImgArray[headerBGcount] + "')";
//         headerElement.style.backgroundSize = "cover";
//         headerElement.style.backgroundAttachment = "fixed";
//         headerElement.style.backgroundPosition = "center";
//         headerElement.style.transition = "background 0.4s";
//         headerBGcount++;
//     }else if(headerBGcount == 3){
//         headerElement.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('"  +  headerBGImgArray[headerBGcount] + "')";
//         headerElement.style.backgroundSize = "cover";
//         headerElement.style.backgroundAttachment = "fixed";
//         headerElement.style.backgroundPosition = "center";
//         headerElement.style.transition = "background 0.4s";
//         headerBGcount =0;
//     }
// }, 8000);






// CHANGING HEADER BACKGROUND IMAGE
const sliderContainer = document.querySelector(".header-main-container");
let fourSecond = 4000;
const firstSlider = "0%";
const secondSlider = "-100%";
const thirdSlider = " -200%";
const fourthSlider = "-300%"

let sliderTracker = Math.floor((Math.random() * 4) + 1 ) ; //slider is set to one
console.log(sliderTracker);

const sliderFunctionalities = (upComingSlider,currentSliderPosition)=>{
    document.querySelector(".header-slider-inner-container").style.transform= `translate(${upComingSlider})`;
    sliderTracker =currentSliderPosition;
}
const sliderEngine =()=>{ 
    if(sliderTracker ==1){
        sliderFunctionalities(secondSlider, 2);
    }else if(sliderTracker ==2){
        sliderFunctionalities(thirdSlider, 3);
    }else if(sliderTracker ==3){
        sliderFunctionalities(fourthSlider, 4);
    }else if(sliderTracker ==4){
        sliderFunctionalities(firstSlider, 1);
    } 
}

// gives a random slider
sliderEngine();


setInterval(()=>{
    sliderEngine();
}, fourSecond);














