const contact = document.getElementById("contact");
const rock = document.getElementById("rockPaper");
const to = document.getElementById("to-do");
const grid = document.getElementById("grid");
const content = document.getElementById("Content");
const faq = document.getElementById("faq");
const questions = document.querySelectorAll(".question"); 
const answers = document.querySelectorAll(".answer"); 
contact.onclick = function(){
  alert("Phone Number: 972-234-5476, Email: sammyalbataineh@gmail.com");
}
rock.onclick = function(){
  window.open("https://codepen.io/beefboss72/pen/QWYXKpv","_blank");
}  
to.onclick = function(){
  window.open("https://codepen.io/beefboss72/pen/NWoENVX","_blank");
}
grid.onclick = function(){
  window.open("https://codepen.io/beefboss72/pen/PoVLRdG","_blank");
}
content.onclick = function(){
  window.scrollTo(0,1650);
}
faq.onclick = function(){
  window.scrollTo(0,2000);
}
for(let i = 0; i < questions.length; i++){
  questions[i].onclick = function(){
    answers[i].classList.toggle("hidden");
  } 
}
