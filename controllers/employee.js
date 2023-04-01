const mongoClient = require("../database/employee");

const studentAdd = async (req,res)=>{
    const data = req.body
    try {
        const result = await mongoClient.insertDetails(data);
        return res.status(200).send(data)
    } catch (error) {
        console.log(error.message)
    }
}
const studentShow = async (req,res)=>{
    
    try {
        const data = await mongoClient.getDetails();
        return res.status(200).send(data)
    } catch (error) {
        console.log(error.message)
    }
}
const studentFind = async (req,res)=>{
    const data = req.body
    try {
        const result = await mongoClient.findDetails(data);
        return res.status(200).send(result)
    } catch (error) {
        console.log(error.message)
    }
}
const studentFilter = async (req,res)=>{
    // const filter=req.body;
    const filterObj={salary:{$gt:30000}}
    try {
    const result = await mongoClient.findSalary(filterObj)
return res.status(200).send(result)    
} catch (error) {
        console.log(error.message)
    }
}
const studentFilterExp = async (req,res)=>{
    // const filter=req.body;
    const filterObj={overallExp:{$gte:2}}
    try {
      const result = await mongoClient.findExp(filterObj)
      return res.status(200).send(result)    
    } catch (error) {
        console.log(error.message)
    }
}
const studentGraduated = async (req,res)=>{
    // const filter=req.body;
    const filterObj={yearGrad:{$gte:2015},overallExp:{$gt:1}}
    try {
      const result = await mongoClient.findGrad(filterObj)
      return res.status(200).send(result)    
    } catch (error) {
        console.log(error.message)
    }
}
const studentDelete = async (req,res)=>{
    // const filter=req.body;
    const filterObj={lastCompany:"Y"}
    try {
      const result = await mongoClient.deleteY(filterObj)
      return res.status(200).send(result)    
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    studentAdd,studentShow,studentFind,studentFilter,studentFilterExp,studentGraduated ,studentDelete
}