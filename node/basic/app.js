// console.log('hello');
// console.log(100+200);

// let add = ()=>{
//     let a=100, b=200
//     let sum = a+b;
//     console.log(sum);
//     return sum;
// }
// let mul = (a,b)=>{
//     let ans = a*b;
//     return ans;
// }
// let m1 = mul(add(),2)
// console.log(m1);

// let outer = () =>{
//     let a=100;
//     console.log(a);

//     let inner = ()=>{
//         let b=200;
//         console.log(a,b);
//         return b;
//     }
//     let b = inner();
//     console.log(b);

// }

// outer();

// let mul = ()=>{
//     let a= 12
//     let sqrNumber = ()=>{
//         let ans= a*a;
//         console.log(ans);

//     }
//     sqrNumber();
//     return a;
// }

// console.log(mul());

// let  p = new Promise((res,rej)=>{
//     if(false){
//         res('happy');
//     }
//     else{
//         rej('end');
//     }
// });

// p.then((msg)=>{
//     console.log(msg);

// }).catch((err)=>{
//     console.log(err);

// }).finally(()=>{
//     console.log("completed");

// })

// let fun = async () => {
//     if (false)
//         return "welcome"
//     else {
//         return "sorry"
//     }
// }

// let f = fun();
// f.then((data) => {
//     console.log(data);
// })

// let  f = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("welcome")
//         },2000)
//     })
// }

// printdata = async ()=>{
//     f(await data);
// }
// printdata();

// let val = 1
// let v = setInterval(()=>{
//     console.log(val++);

// },1000)

// setTimeout(()=>{
//     v()
// },10000);

let task1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("task1");
      res();
    }, 2000);
  });
};
let task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task2");
    }, 1000);
    resolve();
  });
};
let task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task3");
    }, 3000);
    resolve;
  });
};

// task1(()=>{
//     task2(()=>{
//         task3();
//     })
// })

// console.log("hello");

// async function tasks() {
//     await task1()
//     await task2()
//     await task3()
// }
// tasks();

let num1 = (n1, cl) => {
  setTimeout(() => {
    cl(n1);
  }, 2000);
};
let num2 = (n2, cl) => {
  setTimeout(() => {
    cl(n2);
  }, 2000);
};

// num1(200,(msg)=>{
//    let n1= msg;
//    console.log(msg);
//    num2(200,(msg)=>{
//       let n2 = msg;
//       console.log(msg);
//       console.log(n1+n2);

//    })
// });

// let apiFetch = fetch(`https://api.github.com/users`)
// console.log(apiFetch);

// let respData = apiFetch.then((response)=>{

//    console.log(response);
//    return response.json();

// })

//  let d = respData.then((data)=>{
//    console.log(data);

// })

let api = async () => {
  try {
    let response = await fetch(`https://api.github.com/users`);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};
// api();

// let time = 10
//  let timer = setInterval(()=>{
//   console.log(time--)
//   if(time<0){
//     clearInterval(timer)
//     console.log(`otp has expired`)
    
//   }
//  },1000)
  
//  let timeout =setTimeout(()=>{
//   console.log(`timeout`)
//  },5000)
//  clearTimeout(timeout)

// let timer = setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// clearTimeout(timer);


