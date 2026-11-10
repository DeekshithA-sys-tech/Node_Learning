const {MongoClient} = require("mongodb")

const url = `mongodb://localhost:27017`

const client = new MongoClient(url)

exports.mongoConnection = async()=>{

    await client.connect()

    console.log(`mongoDB is connected`)

    const database = await client.db("employee")

    console.log(`employee database is created`)

    const collection = await database.collection('emp_data')

    console.log(`collection is created`)

    return collection

}