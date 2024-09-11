let roles = ["Front-end Developer", "React Developer", "Web Developer"];

let role = document.getElementById("role");
let index = 0;
let word = roles[index];
let i = 0;
let currentRole = "";
let deleteId;
let typeIntervalId;
let delayTimeoutId;

function deleteRole() {
    i -= 1;
    currentRole = currentRole.slice(0, i);
    role.textContent = currentRole;

    if (currentRole === "") {
        clearInterval(deleteId);
            index++;
            if (index === roles.length) {
                index = 0;
            }
            word = roles[index];
            i = 0;
            currentRole = "";
            typeIntervalId = setInterval(typewrite, 50);
    }
}

function typewrite() {
    currentRole = currentRole + word.charAt(i);
    role.textContent = currentRole;
    i++;
    if (i === word.length) {
        clearInterval(typeIntervalId);
        delayTimeoutId = setTimeout(() => {
        deleteId = setInterval(deleteRole, 25);
    }, 1000);
    }
}

typeIntervalId = setInterval(typewrite, 50);