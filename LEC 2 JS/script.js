


//  Compare == / ===
// console.log("1" == 1); // true
// console.log("1" === 1); // false



// Logic oparetor
// let firt = true
// let sec = false 

// if(firt && sec){
//     console.log("dono true hai");
// }

// if(firt || sec){
//     console.log("koi to true hai");
// }

// if(!sec){
//     console.log("kuch bhi");
// }



// Spread oparetor
// let arr = [10,20,30,40,50]

// let copyArr = [...arr]

// copyArr.push(60)

// console.log("old Array",arr);
// console.log("copy Array",copyArr);



// Rest
// function sum(...numbers) {

    // console.log(numbers.length);
    
    // let sum = 0
    // for(let i = 0 ; i<numbers.length ; i++){
    //     sum += numbers[i]
    // }

    // return sum

    // return 
// }

// sum(10,20,30,40)
// console.log(sum(10,20,30,40));


// Function Declaration 
function fun() {
    
}


// Function expression 
// const fun = function () {
    
// }

//  Arrow Function 
// const fun = ()=>{

// }

// Default parameters

function chacha(name = "hanshya",a) {
    console.log(a);
    console.log(name);
    
    
}

chacha("raj")