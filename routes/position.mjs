/* IMPORTS AND SET UP ------------------------------------------*/
import express from 'express';

// routes logic
import PositionController from '../controllers/positionControllers.mjs'; 

// set up ability to use router function from express by setting to a variable
const router = express.Router();

/* CRUD ACTIONS FROM CONTROLLERS FOLDER -------------------------------------------------*/
// Create a new position
router.post('/', PositionController.CreatePosition);

// Read - see all positions
router.get('/', PositionController.ReadPosition);

// Update positions
router.put('/:id', PositionController.UpdatePosition);

// Delete position
router.delete('/:id', PositionController.DeletePosition);

/* EXPORT -------------------------------------------------*/
export default router;
