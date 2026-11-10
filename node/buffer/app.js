
// buffer : IN JAVA SCRIPT buffer data is to handle binary data directly(raw data)
// - mainly  buffer is available in node.js runtime(not in browser)
// NOTE: buffer is like temporary storage area in memory where data is stored in bytes
// -it is useful when we are working with file(read / write), network (stream , sockets),
// binary data (images , vedios) , receving data from server etc..
// note : both ascii value and buffer value is not same

// let text = "hello"
// console.log(text)


// // Buffer.from() : 
//  let buf = Buffer.from(text)
// console.log(buf)

// //todo : toString() is used to convert buffer data to string
// console.log(buf.toString())



// // todo : length is used to check the length of the string
// console.log(buf.toString.length)
// console.log(buf.length)

// // 

// console.log(buf[1])//ascii value of e, i.e 101
// console.log(String.fromCharCode(101))//e
// console.log(String.fromCharCode(buf[1]))//e


// buffer.alloc


// let buf1 = Buffer.alloc(5)
// console.log(buf1)

// let buf2 = Buffer.alloc(10)//buffer value a b c is stored in alloc memory(round robin)
// console.log(buf2)
// buf2.write("i love node.JS")
// console.log(buf2)
// console.log(buf2.toString())
// console.log(buf2.toString().length)

//to check weather the value is buffer or not

// let buf = Buffer.from('hello')
// console.log(buf)
// console.log(Buffer.isBuffer(buf))
// let str = 'hello'
// console.log(str)
// console.log(Buffer.isBuffer(str))
// console.log(typeof(buf))
// console.log(typeof(str))