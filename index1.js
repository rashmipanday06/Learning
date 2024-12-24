//const cart = ["kurta", "pant", "t-shirt"];
//const promise = createOrder(cart);

//promise.then(function(orderId) {
  //  console.log(orderId);
    
//})
//function createOrder(cart) {
 // const pr = new Promise(function (resolve, reject) {
   // if (!vallidatiCart(cart)) {
      //console.log("this cart is not validated");
   //   const er = "this cart is not validated";
    //  reject(er);
    //}

 //   const orderId = "12345";
   // if (orderId) {
     // resolve(orderId);
  //  }
 // });
 // return pr;
//}



const p1= new Promise((resolve, reject)=>{
 //setTimeout(() =>resolve("p1 get success"), 3000);
  setTimeout(() =>reject("p1 fail"), 3000);
})
const p2= new Promise((resolve, reject)=>{
//setTimeout(() =>resolve("p2 get success"), 1000);
  setTimeout(() =>reject("p2 fail"), 1000);
})
const p3= new Promise((resolve, reject)=>{
  //setTimeout(() =>resolve("p3 get success"), 2000);
 setTimeout(() =>reject("p3 fail"), 2000);
})

//promise.all()
/*

it will wait fot all the promises setted in case of success but when any promis get reject it will return result as soon as it get
Promise.all([p1, p2, p3]).then(res=>{
  console.log(res);
  
}).catch((err)=>{
  console.error(err);
  
})*/

/*--------------------------------------------------*/
//promise.allSetteked()


/*it will return the result when all the promises will settel this is one of the sefest option

Promise.allSettled([p1, p2, p3]).then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.error(err);
  
})*/

/*----------------------------------------------------------*/
//Promise.race()
/*it will return the result as soon as any promis will setteled or rejected
Promise.race([p1, p2, p3]).then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.error(err);
  
})*/

//promise.any()


/*it is return result as soon as any promise setteled and incase of reject it will wait for other promise to setteled if all the promise will get rejected it will through aggregateError
Promise.any([p1, p2, p3]).then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.error(err);
  
})
  this is new*/