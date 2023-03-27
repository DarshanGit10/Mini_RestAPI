
const express = require('express')
const app = express()
const router = express.Router()
const student = require('../models/model')

router.get('/', async(req, res) => {
    try {
        const students = await student.find()
        res.json(students)
    } catch (error) {
        console.log('Error '+ error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const studentId = await student.findById(req.params.id)
        res.json(studentId)
    } catch (error) {
        console.log('Error '+ error)
    }
})

router.post('/', async(req, res) =>{
    const std = new student({
        name: req.body.name,
        tech: req.body.tech,
        marks: req.body.marks
    })
    try {
        const a1 = await std.save()
        res.json(a1)
    } catch (error) {
        console.log('Error '+ error)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const std = await student.findById(req.params.id) 
        std.marks = req.body.marks
        const a1 = await std.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async(req, res) => {
    try {
      const studentId = await student.findById(req.params.id);
      
      if (!studentId) {
        // Return a 404 response if student is not found
        return res.status(404).json({ message: 'Student not found' });
      }
  
      if (!studentId.remove || typeof studentId.remove !== 'function') {
        // Return a 500 response if the remove method is not defined
        return res.status(500).json({ message: 'Remove method is not defined' });
      }
  
      await studentId.remove();
  
      // Return a 204 response if the operation is successful
      res.status(204).json({ message: 'Student deleted successfully' });
  
    } catch (error) {
      console.log('Error: ', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

module.exports = router