// node js and mongo db connection

// install mongodb
// 1. import mongodb
// 2 . connect mongodb with the help of url


const mongodb = require("mongodb").MongoClient

const url =`mongodb://localhost:27017`

const connectDatabase = async()=>{
       try {
        // connecting node with the database using url
        const connceted = await mongodb.connect(url)
        console.log(`mongoDB is connected`)

        // creating the database(A9)
        const db = await connceted.db('A9')
        console.log(`Database is created`)

        // creating the collection in database
       let collection = await db.createCollection("Students")
        console.log(`collection is created`)

       // collection.insertOne({
       //        fname:"Dinga",
       //        lname:"Raja",
       //        age : 34,
       //        place :"B'lore"
       // })  
       // console.log(`Data is added to database`)    
       
       // collection.insertMany([
       //        {
       //        fname:"Dingi",
       //        lname:"Rani",
       //        age : 22,
       //        place :"goa"
       //        },
       //        {
       //        fname:"Dingu",
       //        lname:"Raju",
       //        age : 28,
       //        place :"mumbai"
       //        }
       // ])

       // // ? finding the first data 
       //        let FirstData = await collection.findOne()
       //        console.log(FirstData)


       //  ? finding particular data
              //  let ParticularData = await collection.findOne({fname: 'Dinga'})
              // if(!ParticularData){
              //        console.log(`Data not found`)
              // }else{
              //        console.log(ParticularData)
              // }


              let AllData =await collection.find().toArray()
              console.log(AllData)


              // ? updating particular field
              // let updateAge = await collection.updateOne(
              //        {fname : "Dinga"},
              //        {$set : {age : 26}}
              // )
              // console.log(`Dinga age is updated`)

               // ? updating first field
              // let updateAge = await collection.updateOne(
              //        {},
              //        {$set : {age : 45}}
              // )
              // console.log(`1st object's  age is updated`)

               // ? updating all object field
              // let updateAge = await collection.updateMany(
              //        {},
              //        {$set : {course : "MERN Stack"}}
              // )
              // console.log(`all object field is updated`)

              // ? update place whose age is =20

              // await collection.updateMany(
              //        {age : 45},
              //        {$set : {place : "goa"}}
              // )
              // console.log(`place is updated whose age = 20`)


              // await collection.updateMany(
              //        {place : "goa"},
              //        {$set : {place : "Bangaluru"}}
              // )
              // console.log(`Place is updated`)


              // delete operations

              // deleting 1st object

              // await collection.deleteOne()
              // console.log(`first object data is deleted`)

              // deleting particular data


              // await collection.deleteOne({fname :"Dingi"})
              // console.log(`Dingi data is deleted`)


              //deleting multiple object based on the condition

              // await collection.deleteMany({place :"mumbai"})
              // console.log(`data is deleted whose place is mumbai`)


              // deleting all record

              await collection.deleteMany()
              console.log(`all data is deleted`)
       } catch (error) {
        console.log(`mongoDB is not connected ${error}`)
       }

}

connectDatabase();


