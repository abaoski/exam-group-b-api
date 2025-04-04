const express = require('express');
const router = express.Router();

let exams = [
];
router.get('/', (req, res) => {
  res.json({ message: `Group B API` });
});

module.exports = router;

// GET
router.get('/exams', (req, res) => {
  res.json(exams);
});

//POST
router.post('/exams', express.json(), (req, res) => {
  const newExam = {
    id: exams.length + 1,
    name: req.body.name,
    date: req.body.date
  };
  exams.push(newExam);
  res.status(201).json(newExam);
});