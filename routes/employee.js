const router = require('express').Router();
const employeeController = require('../controllers/employee')
router.post("/employee/insertDetails",employeeController.studentAdd);
router.get("/employee/details",employeeController.studentShow)
router.get("/employee/findDetails",employeeController.studentFind)
router.get("/employee/findSalaryDetails",employeeController.studentFilter)
router.get("/employee/expYear",employeeController.studentFilterExp)
router.get("/employee/graduate",employeeController.studentFilterExp)
router.delete("/employee/delete",employeeController.studentDelete)



module.exports=router