const express = require('express');

const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour
} = require('../../controllers/v1/toursController');

router.param('id', (req, res, next, val) => {
  console.log(`The tour ID is: ${val}`);
  next();
});

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
