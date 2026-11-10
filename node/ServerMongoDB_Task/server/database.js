const {MongoClient} = require('mongodb')


const url = `mongodb://localhost:27017`

const client = new MongoClient(url)

exports.mongodbConnection = async()=>{

    await client.connect()

    console.log(`mongoDB is connected`)

    const database = await client.db('Note_App')

    console.log(`employee database is created`)

    const collection = await database.collection('Note_data')

    console.log(`collection is created`)

    return collection;

}

