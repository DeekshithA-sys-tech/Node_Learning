const fs = require("fs")

// methods
// fs.writefile()
// fs.readfile()
// fs.appendfile()
// fs.unlinkfile()
// fs.mkdir()
// fs.redir()


// asynchronus writefile
// Syntax : fs.writeFile("path file","dayt",CBF(err){})
// fs.writeFile("text.txt","i love js",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("file is creater and data is added")
//     }
// })


// async appendfile
// Syntax : fs.readFile("file path","data to be added",CBF(err){})

// fs.appendFile("text.txt"," i love express ",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("extra data is added")
//     }
// })


// async readfile

// syntax : fs.readFile("file path","utf-8",CBF(err,data){}}
// fs.readFile("text.txt","utf-8",(err,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log(data)
//     }
// })



// renaming the file : async rename
// fs.rename("old file name","new file name",CBF(err){}}
// fs.rename("text.txt","a.txt",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("file is renamed")
//     }
// })

// deleting the file : unlink
// syntax : fs.unlink("file name",CBF(err){}}
// fs.unlink("a.txt",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("file is deleted")
//     }
// })


// create folder/directory
// syntax : fs.mkdir("file name",CBF(err){}}
// fs.mkdir("demo folder",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("folder is created")
//     }
// })



// delete folder / directory
//syntax : fs.rmdir("file name",CBF(err){}}
// fs.rmdir("demo folder",(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log("folder is deleted")
//     }
// })


// task 1


// fs.mkdir("demo_folder",(err)=>{
//     if(err) throw err;
//     console.log("folder is created")

//     fs.writeFile("demo_folder/demo.txt","welcome",(err)=>{
//         if(err) throw err;
//         console.log("file is created and data is added")

//         fs.readFile("demo_folder/demo.txt","utf-8",(err,data)=>{
//             if(err) throw err;
//             console.log(data)
//         })
//     })
// })



// fs.mkdir("demo_folder", (err) => {
//     if(err) throw err
//     console.log("folder is created")
//     fs.writeFile("demo_folder/client.txt", "welcome", (err) => {
//         if (err) throw err
//         console.log("client file is created and data is added")

//         fs.writeFile("demo_folder/srever.txt", "welcome", (err) => {
//             if (err) throw err;
//             console.log("server file is created and data is added")
//                 fs.readFile("demo_folder/client.txt", "utf-8", (err, data1) => {
//                     if(err){
//                         throw err
//                     } else {
//                         console.log(data1)
//                     }
//                     fs.readFile("demo_folder/srever.txt", "utf-8", (err, data2) => {
//                         if(err){
//                             throw err
//                         } else {
//                             console.log(data2)
//                         }
//                         fs.writeFile("demo_folder/app.text",`${data1} ${data2}`,(err)=>{
//                             if (err) throw err ;
//                             console.log(`${data1} ${data2}`)
//                         })
//                 })
//             })

//         })
//     })
// })


// fs.unlink('demo_folder/app.txt', (err) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log("app file is deleted")
//     }
//     fs.unlink('demo_folder/client.txt', (err) => {
//         if (err) {
//             throw err;
//         }
//         else {
//             console.log("client file is deleted")
//         }

//         fs.unlink('demo_folder/srever.txt', (err) => {
//             if (err) {
//                 throw err;
//             }
//             else {
//                 console.log("server file is deleted")
//             }

//             fs.rmdir('demo_folder', (err) => {
//                 if (err) {
//                     throw err;
//                 }
//                 else {
//                     console.log("demo folder is deleted")
//                 }

//             })


//         })

//     })
// })