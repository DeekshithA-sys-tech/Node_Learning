const fs = require('fs')

// Writable stream : createWriteStream method
// let create = fs.createWriteStream('text.txt')   //file creation
// create.write('i love JS', 'utf-8')  //writeStream object
// console.log('file created and data added')

// create.end()    //end process
// trying to add the data after ending the process
// create.write('i love express js', 'utf-8')


// create.on('finish', ()=>{
//     console.log('Task is completed')    //final confirmation msg
// })

// create.on('error', ()=>{
//     console.log('yeno miss hodithide')  //error handling
// })

// NOTE //
// in above example we are creating the file and adding data to it using stream concept
// here we are using createWriteStream method to create file and then using its methods like write(), end() and on() [using these three methods we are managing stream]

// write() method is used to add data

// end() method is used to end/terminate the process of data flow
// once we end the process we cant add any more data or perform anything

// on() method is used to manage the events of stream like 'finsih', 'error', 'end' and 'data'
// on() method accepts two arguments:-
//  first argument is used to pass event name ['finsih', 'error', 'end' and 'data']
//  second argument is used to pass a callback function

//------------------------------------------------------------------------------//


//Readable Stream : createReadStream

// let read = fs.createReadStream('text.txt', 'utf-8')
// // console.log(read)

// let info = ''
// read.on('data', (chunk)=>{
//     console.log(chunk)
//     info += chunk
// })

// read.on('end', ()=>{
//     console.log(info)
//     console.log('task completed')
// })

// read.on('error', (err)=>{
//     console.log(err)
//     console.log('yeno miss hodithide')
// })

//------------------------------------------------------------//


// Duplex stream pipe() : both (read & write)

// let read = fs.createReadStream('text.txt')
// let write = fs.createWriteStream('data.txt')

// read.pipe(write)

// read.on('end', ()=>{
//     console.log('task completed')
// })

// read.on('error', ()=>{
//     console.log('yeno miss hodithide')
// })

//--------------------------------------------------------------//


let read = fs.createReadStream('text.txt', {highWaterMark:20})

read.on('data', (chunk)=>{
    console.log(chunk.toString(), chunk.length)
})