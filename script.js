console.log('hello world')
//side menu button functionality
const oneBtn = $('#one');
const twoBtn = $('#two');
const threeBtn = $('#three');
const fourBtn = $('#four');
//getting pages
const pageOne = $('#step-one');
const pageTwo = $('#step-two');
const pageThree = $('#step-three');
const pageFour = $('#conformation');
//functionality of sidemenu buttons
oneBtn.on('click',getPageOne);
twoBtn.on('click', getPageTwo);
threeBtn.on('click', getPageThree);
fourBtn.on('click', getPageFour)
//variables of next and go back buttons
const nextOne =$('#next-one');
const nextTwo=$('#next-two');
const nextThree = $('#next-three');
const backOne = $('#back-one');
const backTwo = $('#back-two');
const backThree = $('#back-three');
//moving by next and back
nextOne.on('click',function(){
const email = $('#e-address');
const name =$('#full-name');
const number =$('#phone-no');
let moveOn = 0
const personalInfo = [email, name, number];
//this for loop inside click on function makes sure user is alerted if input is empty
for (let i=0; i< personalInfo.length; i++){
    let label = $('label[for="' + personalInfo[i].attr('id') + '"]');  
  if(!personalInfo[i].val()){ 
  label.children().removeClass('hidden')
  personalInfo[i].addClass('missing')
   }else {
   label.children().addClass('hidden')
    personalInfo[i].removeClass('missing')
    moveOn++
} 
}
if (moveOn == 3){

    getPageTwo()

}});



backOne.on('click', getPageOne);
nextTwo.on('click', getPageThree);
backTwo.on('click', getPageTwo);
nextThree.on('click', getPageFour);
backThree.on('click',getPageThree)





//functions

//these function get specifie pages
function getPageOne() {
pageOne.removeClass().addClass('main-card');
pageTwo.removeClass().addClass('hidden');
pageThree.removeClass().addClass('hidden');
pageFour.removeClass().addClass('hidden');
}
function getPageTwo() {
pageTwo.removeClass().addClass('main-card');
pageOne.removeClass().addClass('hidden');
pageThree.removeClass().addClass('hidden');
pageFour.removeClass().addClass('hidden');
}
function getPageThree(){
pageThree.removeClass().addClass('main-card');
pageOne.removeClass().addClass('hidden');
pageTwo.removeClass().addClass('hidden');
pageFour.removeClass().addClass('hidden');
}
function getPageFour(){
pageFour.removeClass().addClass('main-card');
pageOne.removeClass().addClass('hidden');
pageTwo.removeClass().addClass('hidden');
pageThree.removeClass().addClass('hidden');
}
//end of get page funcitons