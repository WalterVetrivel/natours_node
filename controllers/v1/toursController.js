const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    results: tours.length,
    data: {
      tours
    }
  });
};

const getTour = (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id));

  if (tour) {
    return res.status(200).json({
      status: 'success',
      statusCode: 200,
      requestTime: req.requestTime,
      data: {
        tour
      }
    });
  } else {
    return res.status(404).json({
      status: 'failed',
      message: 'Not found',
      statusCode: 404
    });
  }
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      if (err) {
        console.error('Something went wrong.');
        return res.status(400).json({
          status: 'failed',
          statusCode: 400
        });
      }

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        data: {
          tour: newTour
        }
      });
    }
  );
};

const updateTour = (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id));

  if (tour) {
    return res.status(201).json({
      status: 'success',
      statusCode: 201,
      data: {
        tour
      }
    });
  } else {
    return res.status(404).json({
      status: 'failed',
      message: 'Not found',
      statusCode: 404
    });
  }
};

const deleteTour = (req, res) => {
  const tour = tours.find(t => t.id === parseInt(req.params.id));

  if (tour) {
    return res.status(204).json({
      status: 'success',
      statusCode: 204,
      data: null
    });
  } else {
    return res.status(404).json({
      status: 'failed',
      message: 'Not found',
      statusCode: 404
    });
  }
};

module.exports = { getAllTours, getTour, createTour, updateTour, deleteTour };
