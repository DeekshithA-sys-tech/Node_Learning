//Import events  

const Events = require('events')
// console.log(Events)
// to convert to object using new keyword
let emmiter = new Events()
// console.log(emmiter)


//program 1

emmiter.on('1stevent' , ()=>{
    console.log("1st event is created and triggered")
})

emmiter.emit('1stevent')

// program 2

emmiter.on('add',(...a)=>{
    let ans=a.reduce((Prev,cur)=>{
        return Prev+cur
    })
    console.log(ans)
})

// emmiter.emit('add',20,80,30,50)

emmiter.on('even',(...num)=>{
    let evenNum = num.filter((ele)=>{
        return ele%2==0
    })
    let oddNum = num.filter((ele)=>{
        return ele%2==1
    })
    let evenSum = evenNum.reduce((prev,cur)=>{
        return prev+cur
    })
    let oddSum = oddNum.reduce((prev,cur)=>{
        return prev+cur
    })
    let evenMUL = evenNum.reduce((prev,cur)=>{
        return prev*cur
    })
    let oddMul = oddNum.reduce((prev,cur)=>{
        return prev*cur
    })
    let MulNum = num.reduce((prev,cur)=>{
        return prev*cur
    })
    // console.log(evenSum)
    // console.log(evenNum)
    //  console.log(oddSum)
    // console.log(oddNum)
    // console.log(evenMUL)
    // console.log(oddMul)
    // console.log(MulNum)
})
emmiter.emit('even',1,2,3,4,5,6,7,8)