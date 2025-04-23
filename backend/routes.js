 // routes.js
const express = require('express');
const router = express.Router();
const FunnyGunFailure = require('./schema.js');  // Import the schema

// 1. Create a new Funny Gun Firing Failure
router.post('/funny', async (req, res) => {
  try {
      const { description, failureType, remainder } = req.body;

      if (!description || !failureType || !remainder) {
          return res.status(400).json({ error: "All fields are required" });
      }

      const newFailure = new FunnyGunFailure({ description, failureType, remainder });
      await newFailure.save();

      res.status(201).json({ message: "Entry created successfully", data: newFailure });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


// 2. Read all Funny Gun Firing Failures
router.get('/', async (req, res) => {
  try {
    const failures = await FunnyGunFailure.find();
    res.status(200).json(failures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Read a single Funny Gun Firing Failure by ID
router.get('/funny/:id', async (req, res) => {
  try {
    const failure = await FunnyGunFailure.findById(req.params.id);
    if (!failure) {
      return res.status(404).json({ message: 'Failure not found' });
    }
    res.status(200).json(failure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Update a Funny Gun Firing Failure
router.put('/funny/:id', async (req, res) => {
  try {
    const { description, failureType, location, videoUrl, humorousLevel } = req.body;

    const updatedFailure = await FunnyGunFailure.findByIdAndUpdate(
      req.params.id,
      { description, failureType, location, videoUrl, humorousLevel },
      { new: true }
    );

    if (!updatedFailure) {
      return res.status(404).json({ message: 'Failure not found' });
    }

    res.status(200).json(updatedFailure);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Delete a Funny Gun Firing Failure
router.delete('/funny/:id', async (req, res) => {
  try {
    const deletedFailure = await FunnyGunFailure.findByIdAndDelete(req.params.id);
    if (!deletedFailure) {
      return res.status(404).json({ message: 'Failure not found' });
    }
    res.status(200).json({ message: 'Failure deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
