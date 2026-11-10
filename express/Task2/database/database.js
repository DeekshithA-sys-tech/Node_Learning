const mongodb = require("mongodb").MongoClient

let collection
const connectDB = async()=>{
    try {
        const  connectedDB = await mongodb.connect(`mongodb://localhost:27017`)
       const database = await connectedDB.db('STUDENT')
        
         collection = await database.collection('STD_DATA')
        
        console.log(`database created and connected`)
        
    } catch (error) {
        console.log(error)
    }

}

const getCollection = ()=>{
    return collection
}

module.exports = {connectDB,getCollection}