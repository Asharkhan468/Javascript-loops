//Question no 1

// for(let i=0 ; i<5 ; i++){
//     console.log("Hello World!")
// }

//Question no 2

// for(i=0 ; i<=10 ; i++){
//     console.log(i)
// }

//Question no 3

// let number=+prompt("Enter a Number");

// let lenght=+prompt("Enter the lenght");

// for(i=1 ; i<=lenght ; i++){
//     console.log(`${number} x ${i} = ${number*i}` );
// }

//Question no 4

// let ul=document.querySelector('ul');
// let array=["Nokia" , "Samsung" , "Apple" ,"Sony" , "Huawei"];

// for (let i = 0; i < array.length; i++) {
//     ul.innerHTML += `<li>${array[i]}</li>`
// }

//Question no 5

// let items=["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

// let unorderList=document.querySelector(".unorder-list");
// let paragraph=document.querySelector(".para");

// for(let i=0 ; i<items.length ; i++){
//     unorderList.innerHTML+=`<li>${items[i]}</li>`;
//     paragraph.innerHTML+=`<li>Element at index ${i} is ${items[i]}</li>`

// }

//Question no 6

// let head = document.querySelector(".head");
// let paragraph = document.querySelector(".para");

// let userValue = +prompt("Enter number of items");

// head.innerHTML = `Number of Items: ${userValue}`;

// for (i = 1; i <= userValue; i++) {

//   let item = prompt("Enter items name");

//   paragraph.innerHTML+=`<li>${item}</li>`;

// }

//Not done yet completely

//Question no 7

// let para4=document.querySelector(".para-6");

// let counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let reverseCounting=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// for(i=0 ; i<counting.length ; i++){

// para4.innerHTML+=`${counting[i]} ,`;
// }

//Question no 8

let a = ["cake", "choco pie", "cookies", "chips", "patties"];

let para=document.querySelector(".para-5");

for(i=0 ; i<a.length ; i++){

para.innerHTML+=`<li>${a[i]}</li>`;
}

//Question no 9

// let array=[12 , 56  , 100 , 105 , 45 , 90];

// for(i=0 ; i<array.length ; i++){
//     console.log(i);
// }

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

// let pra=document.querySelector(".para-3")

// for(i=1 ; i<=20  ; i++){

//     pra.innerHTML+=`<li>${i*5}</li>`;

// }

//Question no 13
// let para3=document.querySelector(".para-5");
// let students =["Ashar" , "Khan" , "Mahad" , "Kashif"];
// let score=[99 , 84 , 86 , 87];

// for(i=0 ; i<students.length ; i++){

// para3.innerHTML+=`<table>
// <tr>
// <th>Students</th>
// <th>Scores</th>
// </tr>

// <tr>
// <td>${students[i]}</td>
// <td>${score[i]}</td>
// </tr>

// </table>`;

// }

//Question no 15

// let para2=document.querySelector(".para-4")

// let a=[[1,2,3],[4,5,6],[7,8,9] ];

// for(i=0 ; i<a.length ; i++){

// para2.innerHTML+=`<li>${a[i]}</li>`
// }

//Question no 16

// let input=+prompt("Enter a Number");

// for(i=0 ; i<=input ; i++){

//     console.log(i-0.5);
// }

//Question no 17

// for(i=1 ; i<=20 ; i++){

//     if(i%2===0){
//        document.write(`${i} is even number <br>`);
//     }else{
//         document.write(`${i} is odd number <br>`);
//     }

// }

//Question no 18

// let product=1;

// for(i=0 ; i<=7 ; i++){
//     if(i%2!==0){
//         product*=i
//     }
// }

// console.log(`The product of 1 to 7 odd integers is ${product}`);

//Question no 19

// let para=document.querySelector("#para");

// let inputs=prompt("Enter a number")

// for(i=0 ; i<=7 ; i++){

//     para.innerHTML+=`<li>${i}</li>`

// }
