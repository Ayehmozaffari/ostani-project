document.querySelector('.shopping-btn').addEventListener('Click' , validation)
document.querySelector('.shopping-btn1').addEventListener('Click' , validation)
document.querySelector('.shopping-btn2').addEventListener('Click' , validation)
document.querySelector('.shopping-btn3').addEventListener('Click' , validation)
function validation(e){
  if(e.target.Click){
    alert("you have to select product");
  }
}