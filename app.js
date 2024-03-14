//Question no 1

for(let i=0 ; i<5 ; i++){
    console.log("Hello World!")
}


//Question no 2


for(i=0 ; i<=10 ; i++){
    console.log(i)
}


//Question no 3



// let number=+prompt("Enter a Number");

// let lenght=+prompt("Enter the lenght");


// for(i=1 ; i<=lenght ; i++){
//     console.log(`${number} x ${i} = ${number*i}` );
// }


//Question no 4



let ul=document.querySelector('ul');
let array=["Nokia" , "Samsung" , "Apple" ,"Sony" , "Huawei"];

for (let i = 0; i < array.length; i++) {
    ul.innerHTML += `<li>${array[i]}</li>`
}



//Question no 5


let items=["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

let unorderList=document.querySelector(".unorder-list");
let paragraph=document.querySelector(".para");

for(let i=0 ; i<items.length ; i++){
    unorderList.innerHTML+=`<li>${items[i]}</li>`;
    paragraph.innerHTML+=`<li>Element at index ${i} is ${items[i]}</li>`


   

}


//Question no 6

// let head=document.querySelector(".head");
// let para=document.querySelector(".para-2");

// let n=+prompt("Enter a items");

// for(i=1 ; i<=n ; i++){
//     let p=prompt("Enter Name");

//    head.innerHTML=`Number of items: ${n}`;
//    para.innerHTML+=`<li>${p}</li>`;
// }



//Not done yet completely



//Question no 7

let header=document.querySelector(".header");
let header1=document.querySelector(".header-1");
let header2=document.querySelector(".header-2");
let header3=document.querySelector(".header-3");

let counting=[1 , 2 , 3 , 4 , 5 , 6  , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15];

header.innerHTML="Reverse counting"

document.write(counting.reverse());

header1.innerHTML="Even counting"

document.write(counting%2===0)





//Question no 9








//Question no 12


let pra=document.querySelector(".para-3")

for(i=1 ; i<=20  ; i++){

    pra.innerHTML+=(`${5*i}`);
    
   
}


//Question no 13

let students =["Ashar" , "Khan" , "Mahad" , "Kashif"];
let score=["30" , "50" , "89" , "56"];

document.write(students + "<br>" + score);




//Question no 16

let input=+prompt("Enter a Number");


for(i=0 ; i<=input ; i++){

    console.log(i - 0.5);
}







//Question no 17



// for(i=1 ; i<=20 ; i++){

//     if(i%2===0){
//        document.write(`${i} is even number <br>`);
//     }else{
//         document.write(`${i} is odd number <br>`);
//     }
    


// }



//Question no 18


let product=1;

for(i=0 ; i<=7 ; i++){
    if(i%2!==0){
        product*=i
    }
}

console.log(`The product of 1 to 7 odd integers is ${product}`);








