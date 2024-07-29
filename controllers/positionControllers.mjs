/* IMPORTS -------------------------------------------------*/
import Positions from '../models/positionSchema.mjs';

/* CRUD ACTIONS -------------------------------------------------*/
// create new position
const CreatePosition = async (req, res) => {
  try {
    let newPosition = new Positions(req.body);

    await newPosition.save();

    res.json(newPosition);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// "read" positions
const ReadPosition = async (req, res) => {
  try {
    //Get data dn save to variable
    const allPositions = await Positions.find({});
    //Send data to front end: res
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// update position
const UpdatePosition = async (req, res) => {
  try {
    const updatedPosition = await Positions.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedPosition);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// delete position
const DeletePosition = async (req, res) => {
  try {
    await Positions.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

/* EXPORT -------------------------------------------------*/
export default { CreatePosition, ReadPosition, UpdatePosition, DeletePosition };
