
let count = 0;
let saveEl = document.getElementById("save1");
let countEl = document.getElementById("value");
let total = document.getElementById("total");
let totalEl = document.getElementById("total1");

//making Array for storing values of pessangers!
let numArray = [];

// const value1 = document.querySelector('value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const number = e.currentTarget.classList;
    if(number.contains("decrease")){
      if(count > 0){
        count--;
      }else{
        count = 0;
      }
    }else if(number.contains("increase")){
      count++;
    }else if(number.contains("save")){
      if(count == 0){
        alert("Increase Your Value 0 cannot Store");
      }else {
        countStr = count + " + ";
        saveEl.innerHTML += countStr; 
        numArray.push(count);
        count = 0;
      }
    }else if(number.contains("total")){
      if(numArray.length == 0){
        alert("First Add Pessengers");
      }else{
        document.getElementById('total1').textContent = sum(numArray);
        function sum(numArray){
        let s = 0;
        for( let i = 0; i<numArray.length;i++){
          s = s + numArray[i];
        }
        return s;
      }
      }
    }
    else{
      // tSum = 0;
      count = 0;
      document.getElementById('save1').textContent = ' ';
      document.getElementById('total1').textContent = ' ';
      numArray.splice(0,numArray.length);
    }
    if(count > 0){
      value.style.color = "green";
    }
    if(count === 0){
      value.style.color = "black";
    } 
   document.getElementById('value').textContent = count;
  });
});



