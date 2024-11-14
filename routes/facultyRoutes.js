const express = require('express');
const { createFaculty, getFaculty, updateFaculty, deleteFaculty } = require('../controllers/facultyController');
const router = express.Router();

// Create a new faculty member (POST /api/faculty)
router.post('/', createFaculty);

// Get all faculty members (GET /api/faculty)
router.get('/', getFaculty);

// Update a specific faculty member by ID (PUT /api/faculty/:id)
router.put('/:id', updateFaculty);

// Delete a specific faculty member by ID (DELETE /api/faculty/:id)
router.delete('/:id', deleteFaculty);

module.exports = router;
