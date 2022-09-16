let aboutCard = document.querySelector('#aboutCard');
let aboutButton = document.querySelector('#aboutCard button');
let aboutButtonDownState = true
let aboutButtonUpState = false
let aboutcardBody = document.createElement('div');





function downButton(){
   aboutcardBody = document.createElement('div');
    aboutcardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.innerHTML =`<ul> <li>Nodejs </li>     
    <li>CSS </li>
    <li>HTML </li>
    <li>C# </li>
    <li>express </li>
    <li>Mongodb </li>
    <li> SQL </li>
    <li> Networking </li>
    <li> IT Support </li>
    </ul>` ;
    
    aboutcardBody.append(p)
    aboutCard.appendChild(aboutcardBody);
    aboutcardBody.animate(aboutCard)
   
    aboutButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
  </svg>`
    aboutButtonDownState = false;
    aboutButtonUpState = true
}
function upButton() {

aboutButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>`
aboutcardBody.remove()
aboutButtonDownState = true;
aboutButtonUpState = false;
}


aboutButton.addEventListener('click',() => {
    
    if (aboutButtonDownState === true) {
        
  downButton()

    }  else {
        upButton()
    }
    


   
})

let projectCard = document.getElementById('projects');
let projectDownState = true;
let projectUpState = false
let projectCardBody = document.createElement('div');
projectCardBody.classList.add('card-body','d-flex','w-100','justify-content-center');
let projectBodyP = document.createElement('p');
let linkToBlog = document.createElement('a')
linkToBlog.classList.add('btn','btn-sm','btn-info')
linkToBlog.setAttribute('href','https://techblogapp-1.herokuapp.com/');
linkToBlog.innerText = 'tech blog';
let projectButton = document.getElementById('projectButton');

function projectDown() {
projectButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg>`;
projectBodyP.append(linkToBlog);
  projectCardBody.append(projectBodyP);
  projectCard.appendChild(projectCardBody)
projectDownState = false
projectUpState = true
}
function projectUp() {

 
  projectCardBody.remove()
  projectButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
  </svg>`
  projectDownState = true;
  projectUpState = false;
}

projectButton.addEventListener('click',() => {
  if (projectDownState) projectDown();
  else {
  projectUp()
  }
})

const contactCard = document.getElementById('contact');
let contactCardButton = document.querySelector('#contact button');
console.log(contactCardButton)
console.log(contactCard);
let contactDownState = true; 
let contactUpState = false; 
let contactCardBody = document.createElement('div');
contactCardBody.classList.add('d-flex','w-100','justify-content-center','p-2')
let emailButton = document.createElement('a');
emailButton.classList.add('btn','btn-sm','btn-info','text-center')
emailButton.setAttribute('href','mailto:pauljuran99@outlook.com');
emailButton.innerText = 'Email Me';
contactCardBody.append(emailButton);

function contactCardUp() {
contactCardButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>`
contactCardBody.remove()
contactDownState = true;
contactUpState = false; 



}


function contactCardDown() {


  contactCardButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
  </svg>`;
contactCard.append(contactCardBody);
  contactDownState = false;
  contactUpState = true;
}
 


contactCardButton.addEventListener('click', () => {
  if (contactDownState) contactCardDown()

  else {
    contactCardUp()
  }
  
 })




