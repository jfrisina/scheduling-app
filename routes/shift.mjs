import express from 'express';
const router = express.Router();
import ShiftCrtl from '../controllers/shiftControllers.mjs';

//Create
router.post('/', ShiftCrtl.CreateShift);

//Read
router.get('/', ShiftCrtl.ReadShift);

//Update
router.put('/:id', ShiftCrtl.UpdateShift);
//Delete
router.delete('/:id', ShiftCrtl.DeleteShift);

export default router;
