/* IMPORTS AND SET UP ------------------------------------------*/
import express from 'express';

// routes logic
import EmployeeController from '../controllers/employeeControllers.mjs'; 

// set up ability to use router function from express by setting to a variable
const router = express.Router();

/* CRUD ACTIONS FROM CONTROLLERS FOLDER -------------------------------------------------*/
// Create a new shift
router.post('/', EmployeeController.CreateEmployee);

// Read - see all shifts
router.get('/', EmployeeController.ReadEmployee);

// Update shifts
router.put('/:id', EmployeeController.UpdateEmployee);

// Delete shift
router.delete('/:id', EmployeeController.DeleteEmployee);

/* EXPORT -------------------------------------------------*/
export default router;
