let inputBox = document.getElementById('inputBox')
let event = document.getElementById('event');
let parent =document.getElementById('parent')
let display = document.getElementById("show")
let time = document.getElementById('time')
function addToList(){
  let timer = time.value;
  let data = event.value;
  
 if(data === "" && timer === ""){
     alert('Please input data needed')
   
 }
  else{
  let li= document.createElement("li")
  let checkBox = document.createElement('input')
  let checkValue = checkBox.value
  checkBox.type = 'checkbox'
  checkBox.style.backgroundColor = "red"
  li.innerHTML = `<p>${data}</p><label>${timer}</label>`
 parent.insertBefore(li,parent.childNodes[-1])
    li.insertBefore(checkBox,li.childNodes[0])
  event.value = ""
  time.value = ""
   
  }

 
}
//displaying the inputBox
function displayBox(){
  if(inputBox.style.display ==="none"){
    inputBox.style.display= "block"
  }
  else(inputBox.style.display="none")
}
function cancelIt(){
    if(inputBox.style.display ==="none"){
    inputBox.style.display= "block"
  }
  else(inputBox.style.display="none")
}











