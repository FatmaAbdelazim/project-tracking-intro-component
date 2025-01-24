var elementMenuImage = document.getElementsByClassName('menuImage');
var elementNavList = document.getElementsByClassName('navList');
var index = 0;
function onClick(){
     if(index == 0)
     {
        elementMenuImage[0].setAttribute("src","images/icon-close.svg");
        elementNavList[0].classList.add('block');
        elementNavList[0].classList.add('flex');
        index = 1;
     }
     else
     {
        elementMenuImage[0].setAttribute('src','images/icon-hamburger.svg');
        elementNavList[0].classList.remove('block');
        elementNavList[0].classList.remove('flex');
        index = 0;
     } 
}