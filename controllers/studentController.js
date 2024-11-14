const Student = require('../models/studentModel');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);  // Create a new Student instance using the request body
    await student.save();  // Save it to the database
    res.status(201).json(student);  // Respond with the created student data
  } catch (error) {
    res.status(400).json({ message: error.message });  // Handle errors
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();  // Fetch all students
    res.status(200).json(students);  // Respond with the list of students
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};

// Update a specific student by ID
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;  // Get the ID from the route params
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });  // Update the student data
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });  // Handle case where student is not found
    }
    res.status(200).json(updatedStudent);  // Respond with the updated student data
  } catch (error) {
    res.status(400).json({ message: error.message });  // Handle errors
  }
};

// Delete a specific student by ID
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;  // Get the ID from the route params
    const deletedStudent = await Student.findByIdAndDelete(id);  // Delete the student
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });  // Handle case where student is not found
    }
    res.status(200).json({ message: 'Student deleted successfully' });  // Respond with success message
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};
