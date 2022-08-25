var button=document.getElementById("nightmode");
var frame=document.getElementById("frame");
var about=document.getElementById("about");
var skills=document.getElementById("Skills");
var education=document.getElementById("education");
var contact=document.getElementById("contact");
var count=0;
function toggleMode(){
    if(count%2==0){
        frame.style.backgroundColor="black";
        frame.style.transition="ease-in-out 1s";
        about.style.backgroundColor="black";
        about.style.borderColor="white";
        about.style.transition="ease-in-out 1s";
        skills.style.backgroundColor="black";
        skills.style.borderColor="white";
        skills.style.transition="ease-in-out 1s";
        education.style.backgroundColor="black";
        education.style.borderColor="white";
        education.style.transition="ease-in-out 1s";
        contact.style.background="black";
        contact.style.borderColor="white";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-sun baby"></i>';
        console.log(count + " dark mode");
    }
    else{
        frame.style.backgroundColor="#FEF5E7";
        frame.style.transition="ease-in-out 1s";
        about.style.backgroundColor="lightpink";
        about.style.borderColor="black";
        about.style.transition="ease-in-out 1s";
        skills.style.backgroundColor="#E6E6FA";
        skills.style.borderColor="black";
        skills.style.transition="ease-in-out 1s";
        education.style.backgroundColor="#F5F5DC";
        education.style.borderColor="black";
        education.style.transition="ease-in-out 1s";
        contact.style.background="linear-gradient(30deg,#00FFFF,#AFEEEE,#FFF0F5)";
        contact.style.borderColor="black";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-moon"></i>';
        console.log(count + " light mode");
    }
    count++;
}

button.addEventListener("click",toggleMode);

