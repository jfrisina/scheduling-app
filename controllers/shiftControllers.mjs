import Shifts from '../models/shiftSchema.mjs';

//Functions
const CreateShift = async (req, res) => {
  try {
    let newShift = new Shifts(req.body);

    await newShift.save();

    res.json(newShift);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const ReadShift = async (req, res) => {
  try {
    //Get data dn save to variable
    const allShifts = await Shifts.find({});
    //Send data to front end: res
    res.json(allShifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const UpdateShifts = async (req, res) => {
  try {
    const updatedShift = await Shifts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedShift);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const DeleteShift = async (req, res) => {
  try {
    await Shifts.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};
export default { CreateShift, ReadShift, UpdateShift, DeleteShift };
