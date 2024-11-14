const express = require('express');
const { createStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

// Create a new student (POST /api/students)
router.post('/', createStudent);

// Get all students (GET /api/students)
router.get('/', getStudents);

// Update a specific student by ID (PUT /api/students/:id)
router.put('/:id', updateStudent);

// Delete a specific student by ID (DELETE /api/students/:id)
router.delete('/:id', deleteStudent);

module.exports = router;
