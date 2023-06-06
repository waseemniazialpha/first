

var myModal = document.getElementById("myModal");
var myModalBlur = document.getElementById("myModalBlur");

function myFunction() {
  myModal.style.display = "block";
  myModalBlur.style.display = "block";
}
function hideFunction() {
  myModal.style.display = "none";
  myModalBlur.style.display = "none";
}

function blurFunction(){
  myModal.style.display = "none";
  myModalBlur.style.display = "none";
}

var hardwareInfo = document.getElementById("hardware-info");
var customerInfo = document.getElementById("customer-info");
var process = document.getElementById("process");
var processTwo = document.getElementById("process-2");

// next button function 

function nextFunction(){
  customerInfo.style.display = "none";
  hardwareInfo.style.display = "block";
  process.style.display = "none";
  processTwo.style.display = "block";
}

// function myModalClick(){
//   myModal.style.display ="block"
//   myModalBlur.style.display = "block";
// }


// add member modal 

var memberModal = document.getElementById("memberModal");
var addMemberBlur = document.getElementById("addMemberBlur");


function memFunction() {
  memberModal.style.display = "block";
  addMemberBlur.style.display = "block";
}
function memHideFunction() {
  memberModal.style.display = "none";
  addMemberBlur.style.display = "none";
}

function memBlurFunction(){
  memberModal.style.display = "none";
  addMemberBlur.style.display = "none";
}
// add tag modal 

var tagBlur = document.getElementById("tagBlur");
var tagModal = document.getElementById("tagModal");


function addTagFunction() {
  tagModal.style.display = "block";
  tagBlur.style.display = "block";
}
function tagHideFunction() {
  tagModal.style.display = "none";
  tagBlur.style.display = "none";
}

function tagBlurFunction(){
  tagModal.style.display = "none";
  tagBlur.style.display = "none";
}






var delModal = document.getElementById("delModal");
var modalBlur = document.getElementById("modalBlur");

function delFunction() {
  delModal.style.display = "block";
  modalBlur.style.display = "block";
}
function closeFunction() {
  delModal.style.display = "none";
  modalBlur.style.display = "none";
}

modalBlur.onclick = function () {
  modalBlur.style.display = "none";
  delModal.style.display = "none";
}

function cDelFunction(){
  modalBlur.style.display = "none";
  delModal.style.display = "none";
}
function cancelDelFunction(){
  modalBlur.style.display = "none";
  delModal.style.display = "none";
}





function ticketData(evt, ticketData) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ticketData).style.display = "block";
  evt.currentTarget.className += " active";
}



// parent hover


// $('nav-ul').hover(function(){
//   $(this).children('hoverli').css("fill","white");
// });