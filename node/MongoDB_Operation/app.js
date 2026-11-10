const mongodb = require("mongodb").MongoClient

const url = `mongodb://localhost:27017`

const connectionData = async()=>{
    try {
        
        const connected = await mongodb.connect(url)
        console.log(`mongoDB is connected`)

        const database = await connected.db("Emplyee")
        console.log(`database is created`)

        const collection = await database.createCollection("Employee_Data")
        console.log(`collection is created`)

        collection.insertMany(
            [
                {
                    name : "John",
                    age :  35,
                    place : "mumbai",
                    job : "Analyst",
                    hireData : "1989-12-10",
                    deptNo : 3
                },
                {
                    name : "Miller",
                    age :  32,
                    place : "b'lore",
                    job : "developer",
                    hireData : "1982-12-01",
                    deptNo : 2
                },
                {
                    name : "Killer",
                    age :  29,
                    place : "hydrabad",
                    job : "Research",
                    hireData : "1983-10-18",
                    deptNo : 10
                },
                {
                     name : "Josh",
                    age :  32,
                    place : "Nodia",
                    job : "Clerk",
                    hireData : "1989-1-31",
                    deptNo :2 
                },
                {
                     name : "Bush",
                    age :  26,
                    place : "Pune",
                    job : "Analyst",
                    hireData : "1986-1-31",
                    deptNo : 3
                },
                {
                     name : "Dew",
                    age :  31,
                    place : "Surat",
                    job : "Research",
                    hireData : "1987-06-10",
                    deptNo : 5
                }
            ]
        )
    } catch (error) {
        console.log(`error ${error}`)
    }
}

connectionData();