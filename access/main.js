//Dynamic Title
const currentTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "You're away";
});
window.addEventListener("focus", () =>{
  document.title = currentTitle;
});
//Switch-toggle
const button = document.getElementsByClassName('switch');
for(let i = 0 ;i < button.length;i++){
  button[i].onclick = function(){
    this.classList.toggle('active');
  }
}
//More
const more =document.getElementsByClassName('more');
for(let i=0;i< more.length;i++){
  more[i].onclick = function(){
  this.classList.toggle('active');
  }
}
//
document.getElementsByClassName("bell").addEventListener("click", function(){ alert("Hello World!"); });
