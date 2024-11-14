const Faculty = require('../models/facultyModel');

// Create a new faculty member
exports.createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);  // Create a new Faculty instance using the request body
    await faculty.save();  // Save it to the database
    res.status(201).json(faculty);  // Respond with the created faculty data
  } catch (error) {
    res.status(400).json({ message: error.message });  // Handle errors
  }
};

// Get all faculty members
exports.getFaculty = async (req, res) => {
  try {
    const facultyMembers = await Faculty.find();  // Fetch all faculty members
    res.status(200).json(facultyMembers);  // Respond with the list of faculty members
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};

// Update a specific faculty member by ID
exports.updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;  // Get the ID from the route params
    const updatedFaculty = await Faculty.findByIdAndUpdate(id, req.body, { new: true });  // Update the faculty data
    if (!updatedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });  // Handle case where faculty is not found
    }
    res.status(200).json(updatedFaculty);  // Respond with the updated faculty data
  } catch (error) {
    res.status(400).json({ message: error.message });  // Handle errors
  }
};

// Delete a specific faculty member by ID
exports.deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;  // Get the ID from the route params
    const deletedFaculty = await Faculty.findByIdAndDelete(id);  // Delete the faculty member
    if (!deletedFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });  // Handle case where faculty is not found
    }
    res.status(200).json({ message: 'Faculty deleted successfully' });  // Respond with success message
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};
