let checkbox=document.getElementById("checkbox")
let label=document.getElementById("label")
let h1 = document.getElementById("topic")

let head=document.getElementById("header")
let na=document.getElementById("nav")

let about=document.getElementById("about")
let info =document.getElementById("info")
let skills=document.getElementById("skills")
let project=document.getElementById("projects")

let pag=document.getElementById("land")
let log=document.getElementById("log")
let yoso=document.getElementById("yoso")
let gmo=document.getElementById("gmo")

function changeBg(){
    
    


    if(checkbox.checked){
        head.style.backgroundColor="var(--bgDark)";
       
        h1.style.color="var(--white)"
        label.style.color="var(--white)"
        na.style.backgroundColor="var(--navDark)";
        about.style.backgroundColor="var(--bgDark)";
        info.style.color="var(--white)"
        skills.style.backgroundColor="var(--bgDark)";
        project.style.backgroundColor="var(--bgDark)";
        projects.style.color="var(--white)"
        pag.style.color="var(--white)"
        log.style.color="var(--white)"
        yoso.style.color="var(--white)"
        gmo.style.color="var(--white)"




  
    }
    else{
    head.style.backgroundColor="var(--bgLight)";
    h1.style.color="var(--black)"
    label.style.color="var(--black)"  
    na.style.backgroundColor="var(--navLight)";
    about.style.backgroundColor="";  
    info.style.color="#000000";
    skills.style.backgroundColor="var(--navLight)";
    project.style.backgroundColor="var(--navLight)";
    projects.style.color="var(--black)"
    pag.style.color="#095736"
    log.style.color="#095736"
    yoso.style.color="#095736"
    gmo.style.color="#095736"



}
    


}
