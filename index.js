var ul=document.getElementsByTagName("ul")
var input=document.getElementById("input")
var li=document.getElementsByTagName("li")

           //using ES5
//adding event listner
input.addEventListener('keyup',kay)

function kay(){
 let value=document.getElementById('input').value.toUpperCase();
   //getting ul
 var ul=document.getElementById('names')
   //getting li from ul
 var li=ul.querySelectorAll('li.list')
   //looping 
 for(var i=0;i<li.length;i++){
   a=li[i].getElementsByTagName('a')[0];
   //adding a condition
   if(a.innerHTML.toUpperCase().indexOf(value)>-1){
     li[i].style.display=""
   }else{
    li[i].style.display="none" 
   }
 }
 
}
        //using ES6
 