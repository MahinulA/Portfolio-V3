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
    aboutmeSection.style.marginTop= "117px";
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



// CHANGING HEADER BACKGROUND IMAGE
let headerElement = document.querySelector(".header-main-container");
let headerBGcount = 1;
let headerBGImgArray = ['./app/img/sliderHeader/sliderHeader1.jpg', './app/img/sliderHeader/sliderHeader2.jpg', './app/img/sliderHeader/sliderHeader3.jpg' , './app/img/sliderHeader/sliderHeader4.jpg' ];
setInterval(() => {
    if(headerBGcount >= 0 && headerBGcount < 3){
        headerElement.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('"  +  headerBGImgArray[headerBGcount] + "')";
        headerElement.style.backgroundSize = "cover";
        headerElement.style.backgroundAttachment = "fixed";
        headerElement.style.backgroundPosition = "center";
        headerElement.style.transition = "background 0.4s";
        headerBGcount++;
    }else if(headerBGcount == 3){
        headerElement.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('"  +  headerBGImgArray[headerBGcount] + "')";
        headerElement.style.backgroundSize = "cover";
        headerElement.style.backgroundAttachment = "fixed";
        headerElement.style.backgroundPosition = "center";
        headerElement.style.transition = "background 0.4s";
        headerBGcount =0;
    }
}, 8000);