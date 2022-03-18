let n=0;
let x=0;
let intial_value;
function fullsizeimage(value){
  if(x==0)
  {
    intial_value=value;
  }
  else{
    if(intial_value!=value)
    {
      msize[intial_value].style.display="none" 
      n=1  
    }
  }
  const image = document.getElementById("ssize");   
  const msize=document.getElementsByClassName("msize");
  console.log(msize)
  if(n==1)
  {
  msize[value].style.display="none";
  n=0;
  }
  else
  {
    msize[value].style.display="block";
    n=1;
  }
}

let menu_boxcount = 1
function showmenu()
{
  const menu = document.getElementsByClassName("dropdown-menu");
  if(menu_boxcount==1)
  {
    menu[0].style.display="block"
    menu_boxcount = 0;
  }
  else
  {
    menu[0].style.display="none"
    menu_boxcount = 1;
  }
}


let quanity_count=0;
const quanity_box = document.getElementById("numberbox");
quanity_box.innerHTML = "0";

function incrment_Quantity(){
  quanity_count++;
  document.getElementById("numberbox").innerHTML = quanity_count;
}

function decrment_Quantity(){
  quanity_count--;
  document.getElementById("numberbox").innerHTML = quanity_count;
}

function linesegment(){
var btncontainer = document.getElementById("product-details")
var btns = btncontainer.getElementsByClassName("btn");

for(var i=0; i<btns.length;i++){
  btns[i].addEventListener('click',function(){
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("active")
    this.className +="active";
  })
}
}

function addcart(){
  const cartitem = document.getElementsByClassName("numbrofitms").value;
  cartitem.innerHTML="10"
  console.log(cartitem);

}