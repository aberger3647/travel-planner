const router = require('express').Router();
const { Trip } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
  try{
      const tripData = await Trip.findAll();
      res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a trip
router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a trip
router.put('/:id', async (req, res) => {
  try {
    const tripData = await Trip.update(req.body, {where: { id: req.params.id }});
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: { id: req.params.id }
    });
    if (!tripData) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
