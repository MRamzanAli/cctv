var divClosed = document.querySelector('.expandable-div');
divClosed.style.display = 'none';
document.addEventListener("DOMContentLoaded", function () {

    const detectionDivs = document.querySelectorAll(".detection");
    detectionDivs.forEach((div) => {
        div.addEventListener("click", function () {
            const item = div.getAttribute("data-item");
            window.location.href = `/Home/AnomlyOverview/${item}`;
        });
    });

    const OBJECT = document.querySelectorAll(".OBJECT");
    OBJECT.forEach((div) => {
        div.addEventListener("click", function () {
            const item = div.getAttribute("data-item");
            window.location.href = `/Home/ObjectOverview/${item}`;
        });
    });

    const pathParts = window.location.pathname.split('/');
    const item = pathParts.length > 3 ? pathParts[3] : null;

    const accordionSections = [
        { items: ".accordion-item", imageClass: ".column-right .firstImage", validItems: ["Assault", "Arrest", "Abuse", "AirPlane", "Car", "Train"] },
        { items: ".accordion-item1", imageClass: ".column-right1 .SecondImage", validItems: ["Explosion", "Burglary", "Arson", "Bicycle", "Truck", "Motorcycle"] },
        { items: ".accordion-item2", imageClass: ".column-right2 .ThirdImage", validItems: ["Shoplifting", "Fighting", "Shooting", "Bus", "Boat", "TrafficLight"] },
        { items: ".accordion-item3", imageClass: ".column-right3 .FourImage", validItems: ["Stealing", "Roadaccidents", "Vandalism", "Robbery", "StopSign", "ParkingMeter", "Bench"] },
        { items: ".accordion-item4", imageClass: ".column-right4 .FiveImage", validItems: ["Bird", "Cat", "Dog"] },
        { items: ".accordion-item5", imageClass: ".column-right5 .SixImage", validItems: ["Horse", "Sheep", "Cow"] },
        { items: ".accordion-item6", imageClass: ".column-right6 .SevenImage", validItems: ["Elephant", "Bear", "Zebra"] },
        { items: ".accordion-item7", imageClass: ".column-right7 .EightImage", validItems: ["Giraffe", "Backpack", "Umbrella"] },
        { items: ".accordion-item8", imageClass: ".column-right8 .NineImage", validItems: ["Handbag", "Suitcase", "Bottle"] },
        { items: ".accordion-item9", imageClass: ".column-right9 .TenImage", validItems: ["Frisbee", "Skis", "Snowboard"] },
        { items: ".accordion-item10", imageClass: ".column-right10 .ElevenImage", validItems: ["SurfBoard", "TennisRacket", "WineGlass"] },
        { items: ".accordion-item11", imageClass: ".column-right11 .TwelveImage", validItems: ["Cup", "Fork", "knife"] },
        { items: ".accordion-item12", imageClass: ".column-right12 .ThirteenImage", validItems: ["Cup", "Fork", "knife"] },
        { items: ".accordion-item13", imageClass: ".column-right13 .FourteenImage", validItems: ["Bowl", "Banana", "Apple"] },
        { items: ".accordion-item14", imageClass: ".column-right14 .FifteenImage", validItems: ["Sandwich", "Orange", "Broccoli"] },
        { items: ".accordion-item15", imageClass: ".column-right15 .SixteenImage", validItems: ["SportsBall", "Kite", "BaseballBat"] },
        { items: ".accordion-item16", imageClass: ".column-right16 .SeventeenImage", validItems: ["BaseballGlove", "Skateboard", "Carrot"] },
        { items: ".accordion-item17", imageClass: ".column-right17 .EightteenImage", validItems: ["HotDog", "Pizza", "Donut"] },
        { items: ".accordion-item18", imageClass: ".column-right18 .NineteenImage", validItems: ["Cake", "Chair", "Couch"] },
        { items: ".accordion-item19", imageClass: ".column-right19 .TwentyImage", validItems: ["PottedPlant", "Bed", "DinningTable"] },
        { items: ".accordion-item20", imageClass: ".column-right20 .TwentyOneImage", validItems: ["Weapon", "Toilet", "Tv"] },
        { items: ".accordion-item21", imageClass: ".column-right21 .TwentyTwoImage", validItems: ["Laptop", "Mouse", "Remote"] },
        { items: ".accordion-item22", imageClass: ".column-right22 .TwentyThreeImage", validItems: ["Keyboard", "CellPhone", "Microwave"] },
        { items: ".accordion-item23", imageClass: ".column-right23 .TwentyFourImage", validItems: ["Oven", "Toaster", "Sink"] },
        { items: ".accordion-item24", imageClass: ".column-right24 .TwentyFiveImage", validItems: ["Refrigerator", "Book", "Clock"] },
        { items: ".accordion-item25", imageClass: ".column-right25 .TwentySixImage", validItems: ["Vase", "Scissors", "TeddyBear"] },
        { items: ".accordion-item26", imageClass: ".column-right26 .TwentySevenImage", validItems: ["HairDrier", "Toothbrush", "Abnormal"] },
        { items: ".accordion-item27", imageClass: ".column-right27 .TwentyEightImage", validItems: ["Fire", "NumberPlate", "Weapondataset"] },


    ];

    accordionSections.forEach(({ items, imageClass, validItems }) => {
        const accordionItems = document.querySelectorAll(items);
        const image = document.querySelector(imageClass);

        if (validItems.includes(item)) {
            const targetItem = document.querySelector(`${items}[data-item='${item}']`);
            if (targetItem) {
                targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetItem.classList.add("active");
                targetItem.querySelector(".accordion-content").style.display = "block";
                image.setAttribute("src", targetItem.getAttribute("data-image-src"));
            }
        } else if (accordionItems.length > 0) {
            const firstItem = accordionItems[0];
            firstItem.classList.add("active");
            const firstContent = firstItem.querySelector(".accordion-content");
            firstContent.style.display = "block";
            image.setAttribute("src", firstItem.getAttribute("data-image-src"));
        }

        accordionItems.forEach((item) => {
            const header = item.querySelector(".accordion-header");
            const content = item.querySelector(".accordion-content");
            const imageSrc = item.getAttribute("data-image-src");

            header.addEventListener("mouseover", () => {
                if (!item.classList.contains("active")) {
                    accordionItems.forEach((otherItem) => {
                        otherItem.classList.remove("active");
                        otherItem.querySelector(".accordion-content").style.display = "none";
                    });
                    item.classList.add("active");
                    content.style.display = "block";
                    image.setAttribute("src", imageSrc);
                }
            });
        });
    });
});

// Function to hide all containers
function hideAllContainers() {
    document.querySelectorAll('.grid-container1, .grid-container, .grid-container2').forEach(container => {
        container.style.display = 'none';
    });
}
// Function to show a specific container
function showContainer(containerClass) {
    hideAllContainers();
    document.querySelector(containerClass).style.display = 'grid';
}
// Show industries-container by default
showContainer('.grid-container1');
// Add event listeners to switch between containers
document.querySelector('.face').addEventListener('mouseover', function () {
    showContainer('.grid-container1');
});
document.querySelector('.anomly').addEventListener('mouseover', function () {
    showContainer('.grid-container');
});
document.querySelector('.object').addEventListener('mouseover', function () {
    showContainer('.grid-container2');
});


function myFunction() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("set_opacity").style.opacity = "0.2";
    document.getElementById("cost_opcty").style.opacity = "0.2";
    document.getElementById("btn_opcity").style.opacity = "0.2";
    document.getElementById("rado1").style.opacity = "0.2";
    document.getElementById("obj_opct1").style.opacity = "0.2";
    document.getElementById("zero_opct1").style.opacity = "0.2";
    document.getElementById("rado2").style.opacity = "0.2";
    document.getElementById("obj_opct2").style.opacity = "0.2";
    document.getElementById("zero_opct2").style.opacity = "0.2";
    document.getElementById("rado3").style.opacity = "0.2";
    document.getElementById("obj_opct3").style.opacity = "0.2";
    document.getElementById("zero_opct3").style.opacity = "0.2";
    document.getElementById("rado4").style.opacity = "0.2";
    document.getElementById("obj_opct4").style.opacity = "0.2";
    document.getElementById("zero_opct4").style.opacity = "0.2";
    document.getElementById("rado5").style.opacity = "0.2";
    document.getElementById("obj_opct5").style.opacity = "0.2";
    document.getElementById("zero_opct5").style.opacity = "0.2";
    document.getElementById("rado6").style.opacity = "0.2";
    document.getElementById("obj_opct6").style.opacity = "0.2";
    document.getElementById("zero_opct6").style.opacity = "0.2";
    document.getElementById("config_opct").style.opacity = "0.2";
}
function hover(element) {

    element.childNodes.forEach(function (item, index, arr) {
        if (item.id == "ficial_img") {
            item.src = "/Images/Shape2-hover.png"
        }
        else if (item.id == "object1_img") {
            item.src = "/Images/Shape8.png";
        }
        else if (item.id == "fire1_img") {
            item.src = "/Images/Shape7-hover.png";
        }
        else if (item.id == "ficial1_img") {
            item.src = "/Images/Shape10 - hover.png";
        }
        else if (item.id == "fire_img") {
            item.src = "/Images/Shape7-hover.png";
        }
        else if (item.id == "get_text") {
            item.style.color = "black";
        }
    });

}
function hoverOut(element) {
    element.childNodes.forEach(function (item, index, arr) {
        if (item.id == "ficial_img") {
            item.src = "/Images/Shape2.png"
        }
        else if (item.id == "object1_img") {
            item.src = "/Images/Shape8 -hover.png";
        }
        else if (item.id == "fire1_img") {
            item.src = "/Images/Shape6.png";
        }
        else if (item.id == "ficial1_img") {
            item.src = "/Images/Shape10.png";
        }
        else if (item.id == "fire_img") {
            item.src = "/Images/Shape6.png";
        }
        else if (item.id == "get_text") {
            item.style.color = "rgb(207, 111, 55)";
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    var expandableDiv = document.querySelector('.expandable-div');
    var solutionsLink = document.getElementById('Solution');
   
    function showExpandableDiv() {
        divClosed.style.display = 'block';
        expandableDiv.style.height = '345px';
        expandableDiv.style.position = 'absolute';
        expandableDiv.style.top = '80px';
        expandableDiv.style.left = '0';
        expandableDiv.style.zIndex = '1000';
    }

    function hideExpandableDiv() {
        expandableDiv.style.height = '0px';
        expandableDiv.style.zIndex = '0';
    }


    solutionsLink.addEventListener('mouseover', showExpandableDiv);
    
    expandableDiv.addEventListener('mouseover', showExpandableDiv);
   
    expandableDiv.addEventListener('mouseover', showContainer('.grid-container1'));

    document.body.addEventListener('mouseover', function (event) {
        if (!solutionsLink.contains(event.target) && !expandableDiv.contains(event.target)) {
            hideExpandableDiv();
        }
    });
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.transition = "opacity 3.5s";
        slides[i].style.display = "none";
        slides[i].style.zIndex = '1';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.zIndex = '1'; 
    dots[slideIndex - 1].className += " active";
    setTimeout(function () {
        slides[slideIndex - 1].style.opacity = 1;
    }, 10);
}
var header = document.querySelector('header');
var nav = document.querySelector('nav');
if (header) {
    header.style.zIndex = '100';  
}
if (nav) {
    nav.style.zIndex = '100';     
}
setInterval(function () {
    plusSlides(1);
}, 3500);

let industries = document.querySelectorAll('.industry');
let delay = 0;
industries.forEach(industry => {
    industry.style.transitionDelay = `${delay}s`;
    delay += 0.1;
});
function openSSO() {
    window.location.href = "https://auth.sso.id/oauth/authorize?client_id=QCbGMMAYXoInhKitirGWV&redirect_uri=https://app.cctvguard.ai/login&language=en-US&response_type=code";
}


