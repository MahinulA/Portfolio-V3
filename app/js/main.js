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

let screenWidth = window.innerWidth;
console.log(screenWidth);
if(screenWidth <= 1000){
    console.log("work");
    const sideMenuLinksInit = document.querySelectorAll(".side-link");
    for(let counter = 0; counter < sideMenuLinksInit.length; counter++){
        const sideMenuLinks = sideMenuLinksInit[counter];
        sideMenuLinks.addEventListener("click", ()=>{
            let sideMenu = document.getElementsByClassName("side-menu-container");
            sideMenu[0].style.left = "-100%";
        });
    }
}

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
    sectionPortfolio.style.paddingBottom ="300px";
    loadingScreenfunc();
});

skillsbtn.addEventListener("click", ()=>{
    hidenShow(header, aboutmeSection, sectionPortfolio, skillSection);
    loadingScreenfunc();
});


// CHANGING HEADER BACKGROUND IMAGE
const sliderContainer = document.querySelector(".header-main-container");
let fourSecond = 4000;
const firstSlider = "0%";
const secondSlider = "-100%";
const thirdSlider = " -200%";
const fourthSlider = "-300%"

let sliderTracker = 1; //slider is set to one


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

setInterval(()=>{
    sliderEngine();
}, fourSecond);




// Inner information section
let BriefIntroElement = document.querySelector(".brief-intro");
let BriefSectionCloseButton = document.querySelector(".brief-icon-close");
document.querySelector(".intro-btn").addEventListener("click", ()=>{
    BriefIntroElement.style.display= "block";
});
BriefSectionCloseButton.addEventListener("click", ()=>{
    BriefIntroElement.style.display= "none";
});











