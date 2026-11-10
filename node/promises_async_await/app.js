 const fs = require("fs").promises


 let writeFile = async()=>{
    await fs.writeFile("text.txt","hello world ")
    console.log("file is created and data is added")
 }
//  writeFile()

let appendData = async()=>{
    await fs.appendFile("text.txt","node and express")
    console.log("data is added")
}
// appendData()

// readfile()
let readData = async()=>{
    let data = await fs.readFile("text.txt","utf-8")
    console.log(data)
}
// readData()

// delete file -- unlink()

let deleteFile = async()=>{
    await fs.unlink("text.txt")
    console.log("file is deleted")
}
// deleteFile()


// rename()
let renameFile = async()=>{
    await fs.rename("text.txt","newText.txt")
    console.log("file is renamed")
}
// renameFile()

// createFolder()  -- mkdir()

let createFolder = async()=>{
    await fs.mkdir("folder1")
    console.log("folder is created")
}


// deleteFolder()  -- rmdir()
let deleteFolder = async()=>{
    await fs.rmdir("folder1")
    console.log("folder is deleted")
}
// deleteFolder()



// task 1

let task1 = async()=>{
    try {
        await fs.mkdir("folder1")
        console.log("folder is created")
        await fs.writeFile("folder1/demo.txt","hello")
        console.log("file is created and data is added")
        let data = await fs.readFile("folder1/demo.txt","utf-8")
        console.log(data)
    } catch (error) {
        console.log("error",error)
    }
}

// task1()


// task 2


let task2 = async()=>{

    try {
        await fs.mkdir("app")
        console.log("app folder is created")
        await fs.mkdir("app/client")
        console.log("cilent folder is created")
        await fs.mkdir("app/server")
        console.log("server folder is created")
        await fs.writeFile("app/client/frontend.txt","frontend")
        console.log("frontend file is created and data is added")
        await fs.mkdir("app/server/programmingLayer")
        console.log("programming layer  folder is created ")
        await fs.mkdir("app/server/backend")
        console.log("backend  folder is created ")
        await fs.writeFile("app/server/programmingLayer/programmingLayer.txt","programming layer")
        console.log("programming layer file is created and data is added")
        await fs.writeFile("app/server/backend/database.txt","backend layer")
        console.log("database file is created and data is added")
         let readfrontend = await fs.readFile("app/client/frontend.txt","utf-8")
        console.log(readfrontend)
        
        let readPL = await fs.readFile("app/server/programmingLayer/programmingLayer.txt","utf-8")
        console.log(readPL)
        
        let readBackend = await fs.readFile("app/server/backend/database.txt","utf-8")

        console.log(readBackend)
        await fs.appendFile("app/server/backend.txt",`${readPL}`)
        await fs.appendFile("app/server/backend.txt",`${readBackend}`)
        await fs.writeFile("app/app.text","")
        let data1 = readfrontend + readPL + readBackend
        await fs.appendFile("app/app.text",`${data1}`)

        let data2 = await fs.readFile("app/app.text","utf-8")
        console.log(data2)

        


    } catch (error) {
        console.log("error")
    }

}
// task2()




