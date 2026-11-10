const fs = require("fs")


// FS - MODULE( Mainly used for Managing files and folders )
// FS - MODULE STANDS FOR FILE SYSTEM.
// FS MODULE IS USED FOR WORK WITH FILE SYSTEM LIKE CREATING FILE , READING THE FILE UPDATING THE FILE ETC.
// It is a builtIn module so, no need to install it .
// write file sync method ie used to creating file and adding the data
// 
// fs methods : 
//              1. fs.writefilesync()
//              2. fs.readfilesync()
//              
// 
// 
// 
// 
// 

// todo : write file sync
// syntax : fs.writeFileSync("file path","data")

// fs.writeFileSync("text.txt","welcome")
// console.log("file is created and data is added")


// todo : append file sync
// syntax : fs.writeFileSync("file path","data")
// fs.appendFileSync("text.txt" , ' to node.js')
// console.log("data is appended")

//todo : read file sync
// syntax : let data = fs.writeFileSync("file path") --  returns the buffer data
// read file sync is ued to read the data from the another file and it returns buffer data( it reads in buffer formate)
// to convert data to string , we are using tostring() js method

// let data = fs.writeFileSync("file path","utf-8") --  returns buffer data to string 
// utf - 8 --> stands for unicode transformation formate with 8 bit . it converts character to binary.
// let data = fs.readFileSync("text.txt")
// console.log("data is read from the file")
// console.log(data)
// console.log(data.toString())



// data = fs.readFileSync("text.txt","utf-8")
// console.log(data)



// todo : fs.unlinksync("file name") -used to delete file
// fs.unlinkSync("text.txt")




// todo : fs.mkdirsync("folder name") - used to create new folder
// fs.mkdirSync("new_folder")
// console.log("folder is created ")


// todo : fs.renamesync("old folder name " , "new folder name")---used to rename the file as well as folder.
// fs.renameSync("new_folder","rename folder")
// console.log("folder is renamed")


// todo : fs.rmdirsync("folder name")---used to delete the folder

// fs.rmdirSync("new_folder")
// console.log("folder is deleted")


// task 1 - create a folder inside that create one file and add the data

// fs.mkdirSync("folder1")
// console.log("folder is cerater")
// fs.writeFileSync("folder1/text.txt","data is inserted")
// console.log("file is created and data is added");

// task 2

// fs.unlinkSync("folder1/text.txt")
// console.log("folder is created ")
// fs.rmdirSync("folder1")
// console.log("folder is deleted")

// fs.mkdirSync("lovestory")
// fs.writeFileSync("lovestory/p1","dinga")
// fs.writeFileSync("lovestory/p2","dingi")
// let data1 = fs.readFileSync("lovestory/p1","utf-8")
// let data2 = fs.readFileSync("lovestory/p2","utf-8")
// let data = data1 +" loves "+ data2
// fs.writeFileSync("lovestory/msg",data)

// fs.unlinkSync("lovestory/p1")
// console.log("p1 removed")
// fs.unlinkSync("lovestory/p2")
// console.log("p2 removed")
// fs.unlinkSync("lovestory/msg")
// console.log("msg removed")
// fs.rmdirSync("lovestory")
// console.log("folder removed")

// fs.mkdirSync("folder 1")
// console.log("folder 1 is created")
// fs.writeFileSync("folder 1/t1.txt","text file 1")
// fs.mkdirSync("folder 1/folder2")
// console.log("folder 2 is created")
// fs.writeFileSync("folder 1/folder2/t2.txt","text file 2")
// fs.mkdirSync("folder 1/folder2/folder3")
// fs.writeFileSync("folder 1/folder2/folder3/text3.txt","text file3")