let taskTitle = document.querySelector('input[name="tasktitle"]').value;
let submitDate = document.querySelector('input[name="submitdate"').value;
let subBut = document.querySelector('button[name="submit"]');


subBut.addEventListener("click", function(){
  alert(taskTitle);
  alert(submitDate);
  alert(subBut);
  alert(subBut.value);
})

let myForm = document.querySelector('form').addEventListener("click", function(e){
  e.target.style.backgroundColor = "red";
})