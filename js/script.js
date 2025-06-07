let basic_skills_info = [
    {id: "1", skill: "Good knowledge of HTML5, CSS3 & JavaScript",icon: "https://www.myclubtees.com/wp-content/uploads/html5-css3-and-javascript-color.jpg"},
    {id: "2", skill: "Good knowledge of Bootstrap, Tailwind & jQurey",icon: "https://assets.viget.com/blog/bootstrap-vs-tailwind.png"},
    {id: "3", skill: "Familiarity of SASS preprocessor",icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png"},
    {id: "4", skill: "Knowledge of React framework",icon: "https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg"},
    {id: "5", skill: "Knowledge of responsive design principles",icon: "https://www.andacademy.com/resources/wp-content/uploads/2025/05/inner_2e.webp"},
    {id: "6", skill: "Understanding of code versioning tool (Git)",icon: "https://www.javacodegeeks.com/wp-content/uploads/2023/03/git.png"},
    {id: "7", skill: "Knowledge of API and using it",icon: "https://img.freepik.com/premium-vector/api-icon-vector-image-can-be-used-computer-science_120816-217765.jpg"},
    {id: "8", skill: "Good knowledge of Photoshop, Illustrator & Indesign",icon: "https://kbcovers.com/wp-content/uploads/2021/06/PS-AI-ID-Logo.png"},
    {id: "9", skill: "Good knowledge of Word, Excel & Powerpoint",icon: "https://img.freepik.com/premium-vector/vactor-set-microsoft-word-excel-power-point-icon_1101854-1138.jpg"}
];
let soft_skills_info = [
    {id: "1", skill: "Good working with team collaboratively", icon: "https://thumbs.dreamstime.com/b/teamwork-concept-logo-team-work-icon-white-background-eps-teamwork-concept-logo-team-work-icon-white-156664631.jpg"},
    {id: "2", skill: "Good communication and collaboration skills",icon: "https://www.shutterstock.com/image-vector/effective-communication-icon-3d-illustration-260nw-2207915083.jpg"},
    {id: "3", skill: "Work under pressure",icon: "https://www.shutterstock.com/image-vector/stress-work-man-icon-vector-260nw-1620380443.jpg"},
    {id: "4", skill: "Project Management",icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ot1zFx25AM8IfPz4J_WjBXs1jylgfCh73Q&s"},
    {id: "5", skill: "Good problem Solving",icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0n8GySzgzBXjVTPyjfrhHZib9SHcexcfQQ&s"}
];

let basic_skills_cards = document.querySelector(".basic-skills-cards");
let soft_skills_cards = document.querySelector(".soft-skills-cards");

function skills(skills_info, container){
    skills_info.map(basic_skill =>{
        container.innerHTML += `<div class="skill-card">
                                    <div class="card-bg"><h5 class="skill-id">${basic_skill.id}</h5></div>
                                    <div class="card-info">
                                        <img src="${basic_skill.icon}" class="skill-img" >
                                        <h4 class="skill-title">${basic_skill.skill}</h4>
                                    </div>
                                </div>`;
    });
}
skills(basic_skills_info, basic_skills_cards);
skills(soft_skills_info, soft_skills_cards);