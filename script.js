const homePage=document.querySelector(".home-page");
const signUpPage=document.querySelector(".sign-up-page");
const logInPage=document.querySelector(".log-in-page");
const wishlistPage=document.querySelector(".wishlist-page");
const contactPage=document.querySelector(".contact-page");
const aboutPage=document.querySelector(".about-page");
const cartPage=document.querySelector(".cart-page");
const checkoutPage=document.querySelector(".checkout-page");
const accountPage=document.querySelector(".account-page");
const prodDetailsPage=document.querySelector(".prod-details-page");

const homePageTab=document.querySelectorAll("[data-home-page]");
const signUpTab=document.querySelector("[data-sign-up]");
const logInTab=document.querySelector("[data-log-in]");
const wishlistTab=document.querySelector("[data-wishlist]");
const contactTab=document.querySelector("[data-contact]");
const aboutTab=document.querySelector("[data-about]");
const cartTab=document.querySelectorAll("[data-cart]");
const checkoutTab=document.querySelector("[data-checkout]");
const accountTab=document.querySelectorAll("[data-account]");
const prodDetailTab=document.querySelector("[data-prod-details]");


let currentPage=homePage;
function init(){
    homePage.classList.add("active");
    currentPage=homePage;
}

init();

homePageTab.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        console.log("hi");
        currentPage.classList.remove("active");
        homePage.classList.add("active");
        currentPage=homePage;
    });
});


signUpTab.addEventListener("click",()=>{
    console.log("hello");
    currentPage.classList.remove("active");
    signUpPage.classList.add("active");
    currentPage=signUpPage;
});

logInTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    logInPage.classList.add("active");
    currentPage=logInPage;
});

wishlistTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    wishlistPage.classList.add("active");
    currentPage=wishlistPage;
});

contactTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    contactPage.classList.add("active");
    currentPage=contactPage;
});

aboutTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    aboutPage.classList.add("active");
    currentPage=aboutPage;
});

cartTab.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        console.log("hi");
        currentPage.classList.remove("active");
        cartPage.classList.add("active");
        currentPage=cartPage;
    });
});

checkoutTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    checkoutPage.classList.add("active");
    currentPage=checkoutPage;
});

accountTab.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        console.log("hi");
        currentPage.classList.remove("active");
        accountPage.classList.add("active");
        currentPage=accountPage;
    });
});

prodDetailTab.addEventListener("click",()=>{
    currentPage.classList.remove("active");
    prodDetailsPage.classList.add("active");
    currentPage=prodDetailsPage;
});