//Question no 1

for(let i=0 ; i<5 ; i++){
    console.log("Hello World!")
}

//Question no 2

for(i=0 ; i<=10 ; i++){
    console.log(i)
}

//Question no 3

let number=+prompt("Enter a Number");

let lenght=+prompt("Enter the lenght");

for(i=1 ; i<=lenght ; i++){
    console.log(`${number} x ${i} = ${number*i}` );
}

//Question no 4

let ul=document.querySelector('ul');
let array=["Nokia" , "Samsung" , "Apple" ,"Sony" , "Huawei"];

for (let i = 0; i < array.length; i++) {
    ul.innerHTML += `<li>${array[i]}</li>`

}

//Question no 5

let items=["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

let unorderList=document.querySelector(".unorder-list");
let paragraph1=document.querySelector(".para");

for(let i=0 ; i<items.length ; i++){
    unorderList.innerHTML+=`<li>${items[i]}</li>`;
    paragraph.innerHTML+=`<li>Element at index ${i} is ${items[i]}</li>`

}

//Question no 6

let head = document.querySelector(".head");
let paragraph = document.querySelector(".para");

let userValue = +prompt("Enter number of items");

head.innerHTML = `Number of Items: ${userValue}`;

for (i = 1; i <= userValue; i++) {

  let item = prompt("Enter items name");

  paragraph.innerHTML+=`<li>${item}</li>`;

}



//Question no 7


// for(i=1 ; i<=15 ; i++){
//  document.write(`${i} , `)
// }


// for(j=15 ; j>=0 ; j--){
//     document.write(`${j} , `)
// }






//Question no 8

let a = ["cake", "choco pie", "cookies", "chips", "patties"];

let para = document.querySelector(".para-5");

let userDemand = prompt("Enter a item");

const available = false;

for (i = 0; i < a.length; i++) {
  if (userDemand === a[i]) {
    console.log(`The ${userDemand} is Available at index ${i}`);
    available = true;
  }
}

if (!available) {
  console.log(`Sorry ${userDemand} is not Available at our Bakery`);
}



//Question no 9

// let LargestArray=[56 , 78 , 68 , 98 , 90 , 97];

// let largest=LargestArray[0];

// for(i=1 ; i<LargestArray.length ; i++){

//     if(LargestArray[i]>largest){

//         largest=LargestArray[i]
//     }
// }

// console.log(largest);

//Question no 12

let pra=document.querySelector(".para-3")

for(i=1 ; i<=20  ; i++){

    pra.innerHTML+=`<li>${i*5}</li>`;

}

//Question no 13
let para3=document.querySelector(".para-5");
let students =["Ashar" , "Khan" , "Mahad" , "Kashif"];
let score=[99 , 84 , 86 , 87];

for(i=0 ; i<students.length ; i++){

para3.innerHTML+=`<table>
<tr>
<th>Students</th>
<th>Scores</th>
</tr>

<tr>
<td>${students[i]}</td>
<td>${score[i]}</td>
</tr>

</table>`;

}

//Question no 14



//Question no 15

let para2=document.querySelector(".para-4")

let b=[[1,2,3],[4,5,6],[7,8,9] ];

for(i=0 ; i<a.length ; i++){

para2.innerHTML+=`<li>${a[i]}</li>`
}

//Question no 16

let para0=document.querySelector(".para-5");
let para1=document.querySelector(".para-6");
let input=+prompt("Enter a Number");

for(i=input ; i>0  ; i--){

    para0.innerHTML+=`<p>${i - 0.5}</p>`
}

// Question no 17

for(i=1 ; i<=20 ; i++){

    if(i%2===0){
       document.write(`${i} is even number <br>`);
    }else{
        document.write(`${i} is odd number <br>`);
    }
}
//Question no 18

let product=1;

for(i=0 ; i<=7 ; i++){
    if(i%2!==0){
        product*=i
    }
}

console.log(`The product of 1 to 7 odd integers is ${product}`);

//Question no 19

let input2 = 5;

for (i = input2; i >= 1; i--) {
  let star = "";

  for (j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}



//Question no 20



//part A

let input1 = 4;



//part B

let input3 = 5;


for(i=0 ; i<=input1 ; i++){
    let star='';

    
    console.log(star);
}





//part C

let input4=6;

for(i=input4; i>=0 ; i--){
    let star2='';

    for(j=1 ; j<=i ; j++){
        
        star2+="*"
    }

    console.log(star2);
}
