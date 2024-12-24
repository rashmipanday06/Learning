/*async basically a keyword that is create async function  and this function alwasys return an promise*/


const p1= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is the new example of promise")
    }, 10000); 
})
const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is the new example of promise")
    }, 5000); 
})



/*using async function*/
/*
async function asyncFun() {
    return p
}


const asyncdata= asyncFun()

asyncdata.then((res)=>{
console.log(res)

}).catch((err)=>{
    console.error(err);
    
})*/

/*------------------------------------------------------------------------------*/
/*
async function example(){
    return "this is async func" //this will wrap under the promise and return
}
const data= example()
console.log(data);
data.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.error(err);
    
})*/

/*----------------------------------------------------------------------------------------*/

/*without using async keyword*/

/*function getdata() {
js engine will not waiting for promise to resolved
    p.then((res)=>{
        console.log(res);
        
    })
}
getdata()*/
//await can only be used inside async function
/*async function handlePromise() {
// when we use await funtion js engine will wait for promise  to resolve it will go to next line once will resolve
 const val=   await p;// the principle of async await is always use await infront of the promise.
console.log(val);

//here both promises resolve parrelery

const val1=   await p;
console.log(val1);
}
handlePromise()*/

// it will resolve all the promises in 10s not print the result of p2 promise after 5s
/*async function hanchAsync() {
     const val1= await p1;// it will take 10s to resolve
     console.log(val1);
     

     const val2= await p2 ;// it will take 5 sec to resolve
     console.log(val2);
     
}*/

// when i will change the order of the promise 

async function hanchAsync() {
    
    // now it will resolve first and take 5s to resolve and p1 will take 10s to resolve
    const val2= await p2 ;// it will take 5 sec to resolve
    console.log(val2);
    
    const val1= await p1;// it will take 10s to resolve
    console.log(val1);
}