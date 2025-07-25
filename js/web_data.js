let doc = document;
const web_data = [
    {
        id: "1",
        link: "https://aliassaf-designer.github.io/stars-group/",
        name: "Stars Group",
        languages: "HTML,Bootstrap",
        description: "This is a simple website present some information about stars group.",
        image: "https://up6.cc/2024/06/171958029587771.png"
    },
    {
        id: "2",
        link: "https://aliassaf-designer.github.io/level/",
        name: "Level Website Homepage",
        languages: "HTML,CSS,Bootstrap,jQuery",
        description: "This is a website homepage, at the first we can see like a form for reserve then there is some cards that contains an articles after that ther is some recommended places and video, finally a contact form.",
        image: "https://up6.cc/2024/06/171965196562591.png"
    },
    {
        id: "3",
        link: "https://aliassaf-designer.github.io/many-language/",
        name: "Many Language Simple Website",
        languages: "HTML,CSS,Bootstrap",
        description: "It's represent  a simple page that can display in arabic or english.",
        image: "https://up6.cc/2024/06/171958025382481.png"
    },
    {
        id: "4",
        link: "https://aliassaf-designer.github.io/IDE/",
        name: "Simple IDE",
        languages: "HTML,CSS,Bootstrap,JavaScript",
        description: "A simple IDE for web that can write code in HTML,CSS and JavaScript but just for the inline and enternal css and javascript.",
        image: "https://up6.cc/2024/06/171965175780951.png"
    },
    {
        id: "5",
        link: "https://aliassaf-designer.github.io/simple-radio/",
        name: "Radio",
        languages: "HTML,CSS,JavaScript",
        description: "Radio website that contains 5 radio channel with some lgradients for the background.",
        image: "https://up6.cc/2024/06/171965167800131.png"
    },
    {
        id: "6",
        link: "https://aliassaf-designer.github.io/accordion/",
        name: "Accordion",
        languages: "HTML,CSS,jQuery",
        description: "The accordion in jQuery.",
        image: "https://up6.cc/2024/06/171965190734941.png"
    },
    {
        id: "7",
        link: "https://aliassaf-designer.github.io/Calculator/",
        name: "Calculator",
        languages: "HTML,CSS,JavaScript",
        description: "A calculator that can use it for adding, subtraction, divide, multipling operation.",
        image: "https://up6.cc/2024/06/17195803920611.png"
    },
    {
        id: "8",
        link: "https://aliassaf-designer.github.io/base_64-coder/",
        name: "Coder",
        languages: "HTML,CSS,JavaScript",
        description: "This is a simple coder that use the base 64 that include in JavaScript.",
        image: "https://up6.cc/2024/06/171965164323571.png"
    },
    {
        id: "9",
        link: "https://aliassaf-designer.github.io/api-product/",
        name: "Product page",
        languages: "HTML,CSS,JavaScript,API",
        description: "This page show some products with information about it.",
        image: "https://up6.cc/2024/06/171966247768141.png"
    },
    {
        id: "10",
        link: "https://aliassaf-designer.github.io/impact/",
        name: "Impact Website Homepage",
        languages: "HTML,CSS,Bootstrap",
        description: "A homepage for impact website.",
        image: "https://up6.cc/2024/06/171957988008661.png"
    },
    {
        id: "11",
        link: "https://aliassaf-designer.github.io/password-generator/",
        name: "Password Generator",
        languages: "HTML,CSS,JavaScript",
        description: "A page for generate random password with length you choose but at least 8 characters and when you load the site you can choose what character you want to put in the password",
        image: "https://up6.cc/2024/06/171958055734761.png"
    },
    {
        id: "12",
        link: "https://aliassaf-designer.github.io/api-user-info/",
        name: "User Information Table",
        languages: "HTML,CSS,JavaScript,API",
        description: "This table show information about users from an api in a table.",
        image: "https://up6.cc/2024/06/171966299290221.png"
    },
    {
        id: "13",
        link: "https://aliassaf-designer.github.io/simple-login-form/",
        name: "Login Form",
        languages: "HTML,CSS",
        description: "Simple login form",
        image: "https://up6.cc/2024/06/171957863617891.png"
    },
    {
        id: "14",
        link: "https://aliassaf-designer.github.io/photoshop-website-layout/",
        name: "homepage layout using photoshop",
        languages: "HTML,CSS,jQuery",
        description: "This is a simple website homepage layout using photoshop.",
        image: "https://up6.cc/2024/06/171957929951971.png"
    },
    {
        id: "15",
        link: "https://aliassaf-designer.github.io/simple-website-interface/",
        name: "Simple Website HomePage",
        languages: "HTML,CSS",
        description: "This is a simple website homepage.",
        image: "https://up6.cc/2024/06/171957943763521.png"
    },
    {
        id: "16",
        link: "https://aliassaf-designer.github.io/hexashop-website-homepage/",
        name: "HEXASHOP website Homepage",
        languages: "HTML,CSS",
        description: "This is a simple website homepage for clothes shop.",
        image: "https://up6.cc/2024/06/171957848296451.png"
    },
    {
        id: "17",
        link: "https://aliassaf-designer.github.io/time/",
        name: "Time Clock",
        languages: "HTML,CSS,JavaScript",
        description: "Simple styled clock shows hours, minutes, seconds.",
        image: "https://up6.cc/2024/06/17195805881621.png"
    },
    {
        id: "18",
        link: "https://aliassaf-designer.github.io/to-do-list/",
        name: "To Do List",
        languages: "HTML,CSS,JavaScript",
        description: "Add and edit your task and when you complete it delete from the list.",
        image: "https://up6.cc/2024/06/171965170272871.png"
    },
    {
        id: "19",
        link: "https://aliassaf-designer.github.io/dropdown/",
        name: "Dropdown",
        languages: "HTML,CSS,jQuery",
        description: "This is a dropdown menu using jquery.",
        image: "https://up6.cc/2024/06/171957698117281.png"
    },
    {
        id: "20",
        link: "https://aliassaf-designer.github.io/facebook-interface/",
        name: "Facebook Homepage Interface",
        languages: "HTML,CSS,JavaScript",
        description: "simple facebook homepage using HTML, CSS and some JavaScript for laptop.",
        image: "https://up6.cc/2024/06/171957712338891.png"
    },
    {
        id: "21",
        link: "https://aliassaf-designer.github.io/poster-1/",
        name: "Poster 1",
        languages: "HTML,CSS",
        description: "This page represent a poster  deigned with Photoshop.",
        image: "https://i.postimg.cc/9fBQwxsd/first-poster-using-css.png"
    },
    {
        id: "22",
        link: "https://aliassaf-designer.github.io/udemy-homepage-interface/",
        name: "Udemy Homepage Interface",
        languages: "HTML,SASS,Bootstrap,JavaScript",
        description: "This page represent udemy homepage using sliders and sass.",
        image: "https://up6.cc/2024/06/171957681649921.png"
    },
    {
        id: "23",
        link: "https://aliassaf-designer.github.io/Poster-2/",
        name: "Poster 2",
        languages: "HTML,CSS",
        description: "This page represent a poster  deigned with photoshop.",
        image: "https://i.postimg.cc/sgYhK4tX/second-poster.png"
    },
    {
        id: "24",
        link: "https://aliassaf-designer.github.io/json-data/",
        name: "JSON Data",
        languages: "HTML,CSS,JavaScript,JSON",
        description: "Show data from json file when we click on the button.",
        image: "https://up6.cc/2024/06/171958033919321.png"
    },
    {
        id: "25",
        link: "https://aliassaf-designer.github.io/jquery-tab/",
        name: "jQuery Tabs",
        languages: "HTML,CSS,jQuery",
        description: "This page show jQuery tabs.",
        image: "https://up6.cc/2024/06/171966241934761.png"
    },
    {
        id: "26",
        link: "https://aliassaf-designer.github.io/side-menu/",
        name: "Side Menu",
        languages: "HTML,CSS,jQuery",
        description: "This page show side menu using jquery.",
        image: "https://up6.cc/2024/06/171965199826081.png"
    },
    {
        id: "27",
        link: "https://aliassaf-designer.github.io/tailwind-homepage-interface/",
        name: "Tailwind Homepage Interface",
        languages: "HTML,Tailwind",
        description: "Simple homepage represent tailwind using it.",
        image: "https://up6.cc/2024/06/171957689943721.png"
    },
    {
        id: "28",
        link: "https://aliassaf-designer.github.io/gallery-in-jquery/",
        name: "Gallery",
        languages: "HTML,CSS,jQuery",
        description: "Small gallery contains some photo with filters for it.",
        image: "https://up6.cc/2024/06/171965193451221.png"
    },
    {
        id: "29",
        link: "https://aliassaf-designer.github.io/dark-site/",
        name: "Dark Site Homepage",
        languages: "HTML,CSS",
        description: "Dark mode site homepage with black background and simple cards.",
        image: "https://up6.cc/2024/06/171957858286791.png"
    },
    {
        id: "30",
        link: "https://aliassaf-designer.github.io/Image-slider/",
        name: "Image Slider",
        languages: "HTML,CSS,jQuery",
        description: "Image slider using cycle jquery plugin.",
        image: "https://up6.cc/2024/06/171966238365861.png"
    },
    {
        id: "31",
        link: "https://aliassaf-designer.github.io/list/",
        name: "List",
        languages: "HTML,CSS,JavaScript",
        description: "To do list with one button.",
        image: "https://up6.cc/2024/06/171965173168761.png"
    },
    {
        id: "32",
        link: "https://aliassaf-designer.github.io/Poster-3/",
        name: "Poster 3",
        languages: "HTML,CSS",
        description: "This page represent a poster  deigned with Photoshop.",
        image: "https://up6.cc/2024/06/171957650831611.png"
    },
    {
        id: "33",
        link: "https://aliassaf-designer.github.io/courses-site/",
        name: "courses Site Homepage",
        languages: "HTML,CSS,Bootstrap",
        description: "Homepage with a slider that contains inside every slide a card for course.",
        image: "https://up6.cc/2024/06/171957976668181.png"
    },
    {
        id: "34",
        link: "https://aliassaf-designer.github.io/simple-site/",
        name: "Simple Site",
        languages: "HTML,CSS",
        description: "This is a simple website homepage.",
        image: "https://up6.cc/2024/06/171957969066251.png"
    },
    {
        id: "35",
        link: "https://aliassaf-designer.github.io/learn-jquery/",
        name: "Learn jQuery",
        languages: "HTML,CSS,jQuery",
        description: "Learn jquery with some actions that you can do wit it.",
        image: "https://up6.cc/2024/06/171966189778771.png"
    },
    {
        id: "36",
        link: "https://aliassaf-designer.github.io/slide-show-jquery/",
        name: "Slide Show",
        languages: "HTML,CSS,jQuery",
        description: "Slide show some photo using jquery.",
        image: "https://up6.cc/2024/06/171966200776091.png"
    },
    {
        id: "37",
        link: "https://aliassaf-designer.github.io/quiz-app/",
        name: "Quiz App",
        languages: "HTML,CSS,JavaScript,API",
        description: "Question game include 50 questions show it by next button.",
        image: "https://up6.cc/2024/06/171966330744241.png"
    },
    {
        id: "38",
        link: "https://aliassaf-designer.github.io/movies-search/",
        name: "Movies Search",
        languages: "HTML,CSS,JavaScript,API",
        description: "You can search for movies or TV shows because of the large api that used in the site.",
        image: "https://up6.cc/2024/06/171966321384981.png"
    },
    {
        id: "39",
        link: "https://aliassaf-designer.github.io/bootstrap-site-homepage-using-react/",
        name: "Website Homepage",
        languages: "HTML,CSS,Bootstrap,React",
        description: "This is a simple website home page that use Bootstrap within React and include some elements.",
        image: "https://up6.cc/2024/06/17196639411591.png"
    },
    {
        id: "40",
        link: "https://aliassaf-designer.github.io/my-cv-using-react/",
        name: "My CV",
        languages: "React",
        description: "My old version CV designed by React.",
        image: "https://up6.cc/2024/06/171966404136341.png"
    },
    {
        id: "41",
        link: "https://aliassaf-designer.github.io/quran-mp3/",
        name: "Quran MP3",
        languages: "HTML,CSS,JavaScript,API",
        description: "listening to the holly quran, searching by reciters then by moshaf then by surah name, and there is two live channels.",
        image: "https://up6.cc/2024/06/171966390845261.png"
    },
    {
        id: "42",
        link: "https://aliassaf-designer.github.io/simple-note/",
        name: "Simple Note",
        languages: "HTML,CSS,JavaScript",
        description: "you can write a simple note that including some text.",
        image: "https://up6.cc/2024/12/173425420894741.png"
    },
    {
        id: "43",
        link: "https://aliassaf-designer.github.io/cards-using-react/",
        name: "Cards using React",
        languages: "React",
        description: "Simple cards including some information creating using react",
        image: "https://up6.cc/2024/12/173425475174141.png"
    },
    {
        id: "44",
        link: "https://aliassaf-designer.github.io/image-color-palettes-extractor/",
        name: "Image Color Palettes Extractor",
        languages: "Full Project,HTML,CSS,JavaScript",
        description: "Extract colors form images and build palettes depending on type and colors count that you want with displaying info about each color and full info part, there is a ready palette generated automatically and you can also choose the type and count. you can search for a color using a specific value to showing other values and display a palette depends on previous choices. Finally, you can download any palette and show it's code.",
        image: "https://up6.cc/2025/04/174479467550981.png"
    },
    {
        id: "45",
        link: "https://aliassaf-designer.github.io/rock-paper-scissors/",
        name: "Rock Paper Scissors",
        languages: "HTML,CSS,JavaScript",
        description: "Play rock, paper, scissors with computer and try to win!.",
        image: "https://up6.cc/2025/05/174803610966911.png"
    },
    {
        id: "46",
        link: "https://aliassaf.free.nf/anime/",
        name: "Anime Watch",
        languages: "HTML,CSS,JavaScript,Bootstrap,jQuery,API",
        description: "Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 billion times? Anime is famous worldwide and it is now wonder we've seen a sharp rise in the number of free anime streaming sites.",
        image: "https://up6.cc/2025/05/174867828782061.png"
    },
];
// Constants
let web_full_project = doc.querySelector(".web-projects");
let site_cards = doc.querySelector(".site-cards");
let type_list_item = doc.querySelectorAll(".type-list-item");
const show_more_btn = doc.querySelector(".show-more-btn");
// Full Project
for (let i = 0; i < web_data.length; i++) {
    if (web_data[i].languages.includes("Full Project")) create_card(web_full_project, web_data[i])
}
// All Sites And Pages
function create_cards(array, index, items){
    for (let i = 0; i < index; i++) create_card(site_cards, array[i]);
    let currentIndex = index;
    const itemsPerClick = items;
    function show_more_items(data){
        const itemsToShow = data.slice(currentIndex, currentIndex + itemsPerClick);
        itemsToShow.forEach(item => create_card(site_cards, item));
        currentIndex += itemsPerClick;
        if (currentIndex >= data.length) show_more_btn.style.display = "none";
    }
    show_more_btn.addEventListener("click", ()=>show_more_items(array));
}
function create_card(container, element){
    let language_value = (element.languages).split(",");
    container.innerHTML  += `<div class="site-card" value="${language_value}">
                                <a href="${element.link}" target="_blank">
                                    <img src="${element.image}" alt="site image" class="site-image">
                                </a>
                                <div class="site-info">
                                    <h2 class="site-title">${element.name}</h2>
                                    <h4 class="site-lang">${element.languages}</h4>
                                    <p class="site-description">${element.description}</p>
                                </div>
                            </div>`;
}
window.onload = create_cards(web_data, 6, 3);
// Type List Filter
for (let i = 0; i < type_list_item.length; i++) {
    type_list_item[i].addEventListener("click", ()=>{
        let listed_web_data = [];
        site_cards.innerHTML = "";
        if(type_list_item[i].innerHTML == "ALL"){
            show_more_btn.style.display = "block";
            for (let i = 0; i < 6; i++) create_card(site_cards, web_data[i]);
        }
        for (let j = 0; j < web_data.length; j++) {
            if(web_data[j].languages.includes(type_list_item[i].innerHTML)){
                site_cards.innerHTML = "";
                show_more_btn.style.display = "none";
                listed_web_data.push(web_data[j]);
                for (let i = 0; i < listed_web_data.length; i++) create_card(site_cards, listed_web_data[i]);
            }
        }
    });
}