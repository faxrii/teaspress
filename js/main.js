
let barMenu=document.querySelectorAll('.bar-menu');
let barMenuIcon=document.querySelectorAll('.bar-menu-ico');
for(let i=0;i<barMenuIcon.length;i++){
    barMenuIcon.onclick=function(){
        barMenu.classList.toggle('activeBar')
    }
}
let catAll=document.querySelector('.all-categories-content');
let catIco=document.querySelector('.catIco');
catIco.onclick=function(){
    catAll.classList.toggle('activeCat')
}