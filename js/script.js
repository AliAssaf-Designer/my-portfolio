let doc = document;
let basic_skills_info = [
    {skill: "Good knowledge of HTML5, CSS3 & JavaScript",progress: "80%"},
    {skill: "Good knowledge of Bootstrap, Tailwind & jQurey",progress: "70%"},
    {skill: "Familiarity of SASS preprocessor",progress: "65%"},
    {skill: "Knowledge of React framework",progress: "80%"},
    {skill: "Knowledge of responsive design principles",progress: "70%"},
    {skill: "Understanding of code versioning tool (Git)",progress: "60%"},
    {skill: "Knowledge of API and using it",progress: "75%"},
    {skill: "Good knowledge of Photoshop, Illustrator & Indesign",progress: "80%"},
    {skill: "Good knowledge of Word, Excel & Powerpoint",progress: "90%"}
];
let soft_skills_info = [
    {skill: "Good working with team collaboratively", progress: "75%"},
    {skill: "Good communication and collaboration skills",progress: "80%"},
    {skill: "Work under pressure",progress: "75%"},
    {skill: "Project Management",progress: "70%"},
    {skill: "Good problem Solving",progress: "80%"}
];

let basic_skills_type = doc.querySelector(".basic-skills-type");
let soft_skills_type = doc.querySelector(".soft-skills-type");
let basic_skills_type_list = doc.querySelector(".basic-skills-type_list");
let soft_skills_type_list = doc.querySelector(".soft-skills-type_list");
let skill_progress = doc.querySelectorAll(".skill-progress")

basic_skills_type_list.addEventListener("change", ()=>{
    basic_skills_info.forEach(progress => {
        if (basic_skills_type_list.value == progress.skill) {
            skill_progress[0].innerHTML = "";
            skill_progress[0].innerHTML += `
            <h5 class="skill-progress_title">${basic_skills_type_list.value}</h5>
            <div class="skill-progress-bar">
                <div class="skill-progress-bar_value" style="width: ${progress.progress}">${progress.progress}</div>
            </div>
            `;
        };
    });
});

soft_skills_type_list.addEventListener("change", ()=>{
    soft_skills_info.forEach(progress =>{
        if (soft_skills_type_list.value == progress.skill) {
            skill_progress[1].innerHTML = "";
            skill_progress[1].innerHTML += `
                <h5 class="skill-progress_title">${soft_skills_type_list.value}</h5>
                <div class="skill-progress-bar">
                    <div class="skill-progress-bar_value" style="width: ${progress.progress};">${progress.progress}</div>
                </div>
            `;
        };
    });
});