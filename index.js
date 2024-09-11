var hamIcon = document.getElementById("hambuger");
var mobileNav = document.getElementById('mobile-nav')
function hambugerClicked(){
    hamIcon.classList.toggle("cross")
    mobileNav.classList.toggle("show-nav")
}

// function navbar(elementId , file){
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//             hamIcon = document.getElementById("hambuger");
//             mobileNav = document.getElementById('mobile-nav')
//         })
// }

// window.onload = function(){
    
// }


var skillsContainer = document.getElementById("skills-container")

var projectsSection = document.getElementById("projects-container")

function createAndAddSkills(skills){
    skills.forEach( skill =>{
        let skillCard = document.createElement('div');
        let skillLogo = document.createElement('img');
        let skillname = document.createElement('p');
        skillCard.setAttribute("data-aos","fade-down");
        skillCard.classList.add('skill-card');
        skillLogo.setAttribute('src' , skill.image);
        skillname.textContent = skill.name;
        skillCard.appendChild(skillLogo);
        skillCard.appendChild(skillname);
        skillsContainer.appendChild(skillCard);
    })
} 

async function createAndAddProjects(projectsData) {
    var projetsHTML = ``
    await projectsData.forEach(each =>{
        projetsHTML += `
        <div class="projects-card" data-aos ="fade-down">
                <img src="${each.image}" />
                <div class="project-dropup" >
                    <div class="project-title-card"> 
                        <p class="project-name">${each.title}</p>
                    </div>
                    <p class="project-content">${each.content}</p>
                    <div class="projects-icon-card">
                        <a href="${each.view}" target="_blank">
                            <div class="project-code-icon">
                                View
                                <i class="fa-regular fa-eye"></i>
                            </div>
                        </a>
                        <a href="${each.code}" target="_blank">
                            <div class="project-code-icon">
                                Code
                                <i class="fa-solid fa-code"></i>
                            </div>
                        </a>
                    </div> 
                </div>
        </div>`
    })

    projectsSection.innerHTML = projetsHTML
}

async function loadProjectsData(){
    return await fetch("projects.json")
            .then(response => response.json())
}

async function loadSkillData(){
    return await fetch("skills.json")
     .then(response => response.json())
     .then(data => data)
};

async function fetchJSONDate(){
    var skillsData = await loadSkillData();
    var projectsData = await loadProjectsData();
    createAndAddSkills(skillsData);
    console.log(projectsData)
    createAndAddProjects(projectsData)
    
}

window.onload = function(){
    fetchJSONDate()
    // addProjects()
};
window.addEventListener('scroll', function() {
    AOS.refresh();  
});
  
// project 

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const recipient = 'subashcat67@gmail.com';
    const subject = `Message from ${name}`;
    const body = `You have received a message from ${name} (${email}).\n\nMessage:\n${message}`;

    if (name && email && message) {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      alert('Please fill out all fields before sending.');
    }
}


