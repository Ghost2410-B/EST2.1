


//actualite
const title1=document.getElementById("avieetudiant-title");
const topic1=document.getElementById("avieetudiant");

const title2=document.getElementById("recretement-title");
const topic2=document.getElementById("recretement");

const title3=document.getElementById("appeldoffre-title");
const topic3=document.getElementById("appeldoffre");
topic1.style.display="flex";
    topic2.style.display="none";
    topic3.style.display="none";

title1.onclick=()=>{
    topic1.style.display="flex";
    topic2.style.display="none";
    topic3.style.display="none";
}
title2.onclick=()=>{
    topic1.style.display="none";
    topic2.style.display="flex";
    topic3.style.display="none";
}
title3.onclick=()=>{
    topic1.style.display="none";
    topic2.style.display="none";
    topic3.style.display="flex";
}
