/* IMPORTS AND SET UP ------------------------------------------*/
import express from 'express';

// routes logic
import ShiftController from '../controllers/shiftControllers.mjs'; 

// set up ability to use router function from express by setting to a variable
const router = express.Router();

/* CRUD ACTIONS FROM CONTROLLERS FOLDER -------------------------------------------------*/
// Create a new shift
router.post('/', ShiftController.CreateShift);

// Read - see all shifts
router.get('/', ShiftController.ReadShift);

// Update shifts
router.put('/:id', ShiftController.UpdateShift);

// Delete shift
router.delete('/:id', ShiftController.DeleteShift);

/* EXPORT -------------------------------------------------*/
export default router;
