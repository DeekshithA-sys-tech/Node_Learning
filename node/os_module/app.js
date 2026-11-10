const os = require('os')
// console.log(os)


const totalMem = os.totalmem()
// console.log(totalMem)

let kb = totalMem/1024
// console.log(kb)


let mb = kb/1024
// console.log(mb)

let gb = mb/1024 
// console.log(gb)


const totalFreeSpace = os.freemem()
// console.log(totalFreeSpace)


let freekb = totalFreeSpace/1024
// console.log(kb)


let freemb = freekb/1024
// console.log(mb)

let freegb = freemb/1024 
// console.log(freegb)


// console.log(gb-freegb)


// console.log(os.hostname())

// console.log(os.homedir())

// console.log(os.userInfo().username)

// console.log(os.version())

// console.log(os.cpus())

// console.log(os.type())


// console.log(os)