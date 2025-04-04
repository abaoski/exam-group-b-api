const express = require('express');
const router = express.Router();

let exams = [
];
router.get('/', (req, res) => {
  res.json({ message: `Group B API` });
});

module.exports = router;

// GET /exam-group/exams - Get all exams
router.get('/exams', (req, res) => {
  res.json(exams);
});