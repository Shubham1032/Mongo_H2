const {MongoClient}= require('mongodb');
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);
// console.log(client)

const insertDetails = async (data)=>{
    const database=client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const result = await collection.insertMany(data);
    console.log(result)
    await client.close()
    return result
}
const getDetails = async ()=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const data = collection.find({});
    console.log(data)
    await client.close();
    return data
}
const findDetails = async (data)=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const value =await collection.findOne(data);
    // console.log(value)
    await client.close();
    return value
}
const findSalary =  async (data)=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const value =await collection.find(data).toArray();
    // console.log(value)
    await client.close();
    return value
}
const findExp =  async (data)=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const value =await collection.find(data).toArray();
    // console.log(value)
    await client.close();
    return value
}
const findGrad =  async (data)=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const value =await collection.find(data).toArray();
    // console.log(value)
    await client.close();
    return value
}
const deleteY =  async (data)=>{
    const database= client.db('Human_Resource');
    const collection = database.collection('employee');
    await client.connect();
    const value =await collection.deleteMany(data);
    // console.log(value)
    await client.close();
    return value
}
module.exports = {
    insertDetails,getDetails,findDetails,findSalary,findExp,findGrad,deleteY 

}
