//Calculator Code:

var newEqua = true;
var consecSym = false;
var arr = [];
var condencedArr = [];
//var ceTemp = []; 
var curNum = 0;
var decDivide = 1;
var decTrue = false; 
var holdAnswer;
var pointTrue = false;
var screen = document.getElementById("screen");


  function ce(){
  if(newEqua){ 
    ac();
  } 
  else if (arr.length > 1){
        if(arr[arr.length-1] == "."){
        pointTrue = false; 
  }
    arr.pop();
    screen.innerHTML = arr.join('');
    consecSym = false;
    //alert(arr);
    var oWNW = ["+","-","*","/","."];
    if(oWNW.indexOf(arr[arr.length-1]) !== -1)
    consecSym = true; 
  } else {
    ac();
  }
}

function inputNum(num){
    if(newEqua){
    newEqua = false;
    reset();
    arr.push(num);
    screen.innerHTML = num;
   } else {
  arr.push(num);
  screen.innerHTML +=num;
  }
  consecSym = false; 
}
function point(){
 if (!pointTrue){
   pointTrue = true;
  if(!newEqua && !consecSym){
  arr.push('.');
  screen.innerHTML += '.';
  }
  else if (!newEqua && consecSym){
  //arr.push(0);  
  arr.push('.');
  screen.innerHTML += 0;
  screen.innerHTML += '.';
  } 
 }
}



function modify(sym){
  if(!newEqua && !consecSym){
   
  pointTrue = false;
  arr.push(sym);
  screen.innerHTML += sym;
  consecSym = true;
  }
  else if(newEqua && !consecSym){
  pointTrue = false;
  reset();  
  arr.push(holdAnswer);
  arr.push(sym);
    
  screen.innerHTML += sym
  consecSym = true;
  
  newEqua = false;
  holdAnswer = 0;
  }
  //alert(arr);
}



function equal(){
  arr.push("stop");
  doTheMath()
}



function ac(){
  reset(); 
  newEqua = true;
  screen.innerHTML = 0;
  

  
}
function reset(){

arr = [];
condencedArr = [];
curNum = 0;
decDivide = 1;
decTrue = false;
pointTrue = false;
}



function doTheMath(){
for(i = 0; i < arr.length; i++){
  if(arr[i] === "."){
    decTrue = true;
  }
  
  if(!isNaN(arr[i])){
    curNum *= 10;
    curNum += arr[i]
    //condencedArr.push("?");
    if(decTrue){
      decDivide *= 10;
    }
  }
  
  if(isNaN(arr[i]) && arr[i] !== "."){
    condencedArr.push(curNum / decDivide);
   
    condencedArr.push(arr[i]);
    
    decDivide = 1;
    curNum = 0;
  }
}
 
  
var result = condencedArr[0];
for(i = 0; i < condencedArr.length; i++){
   
    if(condencedArr[i] ===  "+"){
      result += condencedArr[i+1]; 
    }
   if(condencedArr[i] ===  "-"){
      result -= condencedArr[i+1]; 
    }
   if(condencedArr[i] ===  "*"){
      result *= condencedArr[i+1]; 
    }
   if(condencedArr[i] ===  "/"){
      result /= condencedArr[i+1]; 
    }
    else if (condencedArr[i+1] ===  "stop")
      i = condencedArr.length;
  }
   screen.innerHTML = "" + Math.round(result * 10000000)/10000000;
  
  holdAnswer = Math.round(result * 10000000)/10000000;
  
  newEqua = true; 
  
}