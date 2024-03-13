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

let 









