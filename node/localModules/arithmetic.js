

// EXPORTING

let add = (num1=0,num2=0)=>{
    let sum = num1+num2;
    return`${num1} + ${num2} = ${sum}`
}


let sub = (num1=0,num2=0)=>{
    let res = num1-num2
    return `${num1} - ${num2} = ${res}`
}



// 1st WAY
// module.exports.addition = add;
// module.exports.subtraction = sub;


// 2nd way

// module.exports.add = add;
// module.exports.sub = sub;


// 3rd way

// module.exports={add,sub}





exports.division = (num1=0,num2=0)=>{
    let sum = num1/num2;
    return`${num1} / ${num2} = ${sum}`
}


exports.mul = (num1=0,num2=0)=>{
    let res = num1*num2
    return `${num1} * ${num2} = ${res}`
}


exports.addmuliti = (...num)=>{
     let res = num.reduce((prev,cur)=>{
        return prev+cur
    })
   
    return `${num.join(' + ')} = ${res}`
    
    
}


exports.onlyeven = (...num)=>{
    let res =  num.filter(ele =>ele%2==0)
    console.log(res);
    
    return `EVEN NUMBERS = {${res.join('+')}}`
}  
    
    
exports.onlyodd = (...num)=>{
    return num.filter(ele =>ele%2==1)
}  
  


exports.onlyevensum = (...num)=>{
     let even = num.filter(ele =>ele%2==0)
     .reduce((prev,cur)=>{
        return prev+cur;
    })
    return even  
}



exports.onlyoddsum = (...num)=>{
     let odd = num.filter(ele =>ele%2==1)
     let oddsum = odd.reduce((prev,cur)=>{
        return prev+cur;
    })
    return `${odd.join('+')} = ${oddsum}`  
}



exports.largestNUM = (...num)=>{

     let arr = num.sort((a,b)=>{
        return b-a
    })
    return arr
}

/* note ...num is a array --> min function is used with numbers not with array.So,
 So, we are using Spread operator */
exports.smallNUM = (...num)=>{
    let small = Math.min(...num)
    return small
}

exports.checkPalindrome=(msg)=>{
    let res =  msg.split('').reverse().join()
    return res === msg ? `${msg} is palindrome` : `${msg} is not Palindrome`
}


exports.checkValueContains=(...num)=>{
    return num.includes(10)
}


exports.removeELE=(num)=>{
    let arr = num.splice(1,3)
    return arr.join('   ')
}









    
   