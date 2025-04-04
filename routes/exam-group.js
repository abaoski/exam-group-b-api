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

// PUT /exam-group/exams/:id - Update exam
router.put('/exams/:id', express.json(), (req, res) => {
  const id = parseInt(req.params.id);
  const examIndex = exams.findIndex(exam => exam.id === id);
  
  if (examIndex === -1) {
    return res.status(404).json({ message: "Exam not found" });
  }
  
  const updatedExam = {
    id: id,
    name: req.body.name || exams[examIndex].name,
    date: req.body.date || exams[examIndex].date
  };
  
  exams[examIndex] = updatedExam;
  res.json(updatedExam);
});