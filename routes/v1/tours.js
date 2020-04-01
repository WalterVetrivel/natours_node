const express = require('express');

const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour
} = require('../../controllers/v1/tours');

router
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

router
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
