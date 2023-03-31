// Alert Name  function

document.getElementById('Aleart Name').onclick=function(){

alert('Rana Husnain Munj')
var name =" alert('Rana Husnain Munj') " 
var ali = " rana"


document.getElementById('Statementbox').innerHTML= name ;ali



}


// Clear statement function 
function  Clear (){
  document.getElementById('Statementbox').innerHTML= ' '
}

// Alert Number function

function Number (){

  alert(10)
  var number = " alert(10 "
document.getElementById('Statementbox').innerHTML=    number

}

// Show veriable Name Function 


function veriable(){

var list = '<ul> <li>JavaScript is the worlds most popular programming language</li> <li>JavaScript is the programming language of the Web </li><li> JavaScript is easy to learn</li> <li>is tutorial will teach you JavaScript from basic to advanced </li></ul>    '

document.getElementById('Outputbox').innerHTML =  list
}

// Clear Output function
document.getElementById('Clearutput').onclick=function (){

document.getElementById('Outputbox').innerHTML = ""

}



// Show CamelCase
document.getElementById('CamelCase').onclick=function(){
var list2 = '  <ul> <li>user</li> <li>userResponse </li><li> <code>userResponseTime </code> </li> <li>userResponseTimeLimit </li></ul>     '
  document.getElementById('Outputbox').innerHTML = list2
}

// Sum 2 numbers
var num1 = 10
var num2 = 20
var total = num1 + num2 



document.getElementById('Sum').onclick=function  (){

document.getElementById('Statementbox').innerHTML= ' let num1 = ' + num1 + '<br>  let num2 = ' + num2 + '<br> let total = num1 + num2   ' ;

document.getElementById('Outputbox').innerHTML= "<p style='text-align:center' > " +  total + "</p>" 



}


// Sub 2 numbers

document.getElementById('Sub').onclick=function (){

let num3 = 45
let num4 = 16

let totalSub = num3-num4 
console.log(totalSub)

document.getElementById('Statementbox').innerHTML= '  let num3 = 45   <br> let num4 = 16  <br> let totalSub = num3-num4     '

document.getElementById('Outputbox').innerHTML= ' <p style="text-align:center" > ' +  totalSub + '</p>'






}


// Multiply 2 numbers

document.getElementById('Multiply').onclick=function (){

  let num3 = 45
  let num4 = 16
  
  let totalSub = num3*num4 
  console.log(totalSub)
  
  document.getElementById('Statementbox').innerHTML= '  let num3 = 45   <br> let num4 = 16  <br> let totalSub = num3*num4     '
  
  document.getElementById('Outputbox').innerHTML= ' <p style="text-align:center" > ' +  totalSub + '</p>'
  
  
  
  
  
  
  }


// Divide 2 numbers

function Divide (){

  let num3 = 45
  let num4 = 16
  
  let totalSub = num3/num4 
  console.log(totalSub)
  
  document.getElementById('Statementbox').innerHTML= '  let num3 = 45   <br> let num4 = 16  <br> let totalSub = num3/num4     '
  
  document.getElementById('Outputbox').innerHTML= ' <p style="text-align:center" > ' +  totalSub + '</p>'
  
  
  
  
  
  
  }









// Calculate some numbers


document.getElementById('Calculate').onclick=function (){

var someCalculate = 120*89*80+210

var total2 = 854610



document.getElementById('Statementbox').innerHTML='let someCalculate = 120*89*80+210'

document.getElementById('Outputbox').innerHTML= "<p style='text-align:center' > " +  total2 + "</p>" 









}