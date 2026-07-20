// ===========================
// BULMUCOS WEBSITE SCRIPT
// ===========================

const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = themeToggle?.querySelector('span');
const themeIcon = themeToggle?.querySelector('i');
const savedTheme = localStorage.getItem('bulmucos-theme');

if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

const updateTheme = () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  if (themeLabel) {
    themeLabel.textContent = isDark ? 'Light' : 'Dark';
  }
  if (themeIcon) {
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
};

if (themeToggle) {
  updateTheme();
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('bulmucos-theme', nextTheme);
    updateTheme();
  });
}

// Smooth Scrolling

document
.querySelectorAll("a[href^='#']")
.forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)
.scrollIntoView({
behavior:"smooth"
});

});

});

// Sticky Navigation

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow=
"0 5px 15px rgba(0,0,0,.2)";

}else{

nav.style.boxShadow="none";

}

});

// Gallery Hover Animation

document
.querySelectorAll(".gallery img")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// Scroll To Top

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.className="top-btn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

btn.style.display=
window.scrollY>300
? "block"
: "none";

});

btn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

