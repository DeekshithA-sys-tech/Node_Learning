let fs = require("fs").promises
// writefile()
// note : .promises is mandatory
//  fs.writeFile("text.txt", "i love js")
// .then(()=>{
//     console.log("file is created and data is added")
// })
// .catch((err)=>{
//     console.log("err")
// })
// .finally(()=>{
//     console.log("task is completed")
// })


// appendfile()
// note : append file is also used to create the file (if file is not present then it will create the file append the data)
//  fs.appendFile("text.txt", " i love js")
// .then(()=>{
//     console.log("extra data is added")
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("task is completed")
// })


// readfile()
//  fs.readFile("text.txt", "utf-8")
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("File not found")
// })
// .finally(()=>{
//     console.log("task is completed")
// })

// rename()
//  fs.rename("text.txt", "newText.txt")
// .then(()=>{
//     console.log("file is renamed")
// })
// .catch((err)=>{
//     console.log("File not found",err)
// })
// .finally(()=>{
//     console.log("task is completed")
// })

// unlink() -- deleting the file 

//  fs.unlink("newtext.txt")
// .then(()=>{
//     console.log("file is deleted")
// })
// .catch((err)=>{
//     console.log("File not found")
// })
// .finally(()=>{
//     console.log("task is completed")
// })

// mkdir() -- creating folder

// fs.mkdir("folder1")
// .then(()=>{
//     console.log("folder is created")
// })
// .catch((err)=>{
//     console.log("file not found")
// })
// .finally(()=>{
//     console.log("task is completed")
// })

// rmdir()-- deleteing the folder


// fs.rmdir("folder1")
// .then(()=>{
//     console.log("folder is deleted")
// })
// .catch((err)=>{
//     console.log("file not found")
// })
// .finally(()=>{
//     console.log("task is completed")
// })


// task 1





// fs.mkdir("app")
//     .then(() => {
//         console.log("folder is created")
//         fs.writeFile("app/text.txt", "hello world")
//             .then(() => {
//                 console.log("file is created and data is added")
//                 fs.readFile("app/text.txt", "utf-8")
//                     .then((data) => {
//                         console.log(data)
//                     })
//                     .catch((err) => {
//                         console.log("file notn found")
//                     })
//                     .finally(() => {
//                         console.log("task is completed")
//                     })
//             })
//             .catch((err) => {
//                 console.log("file is not created")
//             })

//         })
//     .catch((err) => {
//         console.log("file not found")
//     })



// TASK 2


fs.mkdir("application")
    .then(() => {
        console.log("folder is created")
        fs.mkdir("application/client")
            .then(() => {
                console.log("client folder is created")
                fs.writeFile("application/client/client.txt", "client")
                    .then(() => {
                        console.log("client file is created")
                        fs.readFile("application/client/client.txt", "utf-8")
                            .then((data1) => {
                                console.log(data1)
                                fs.appendFile("application/app.txt",`${data1}`)
                                    .then(data1=>{
                                        console.log(data1)
                                    }).catch((err)=>{
                                        console.log("data not read")
                                    })

                               
                            })

                    })
                    .catch((err) => {
                        console.log("failed to create client file")
                    })



            })

            .catch((err) => {
                console.log("failed to create cliect folder")
            })

        fs.mkdir("application/server")
            .then(() => {
                console.log("server folder is created")

                fs.writeFile("application/server/server.txt", " server ")
                    .then(() => {
                        console.log("server file is created")
                        fs.readFile("application/server/server.txt", "utf-8")
                            .then((data) => {
                                console.log(data)
                                fs.appendFile("application/app.txt",`${data}`)
                                    .then(data=>{
                                        console.log(data)
                                    }).catch((err)=>{
                                        console.log("data not read")
                                    })
                                
                            })
                            .catch((err) => {
                                console.log("server data is not read")
                            })



                    })
                    .catch((err) => {
                        console.log("server file is not created")
                    })
            })
            .catch((err) => {
                console.log("server folder is not created")
            })
            



    })
    .catch((err) => {
        console.log("failed")
    })