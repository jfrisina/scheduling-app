/* IMPORTS -------------------------------------------------*/
import Employees from '../models/employeeSchema.mjs';

/* CRUD ACTIONS -------------------------------------------------*/
// create new shift
const CreateEmployee = async (req, res) => {
  try {
    let newEmployee = new Employees(req.body);

    await newEmployee.save();

    res.json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// "read" shifts
const ReadEmployee = async (req, res) => {
  try {
    //Get data dn save to variable
    const allEmployees = await Employees.find({});
    //Send data to front end: res
    res.json(allEmployees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// update shift
const UpdateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employees.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

// delete shift
const DeleteEmployee = async (req, res) => {
  try {
    await Employees.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

/* EXPORT -------------------------------------------------*/
export default { CreateEmployee, ReadEmployee, UpdateEmployee, DeleteEmployee };
