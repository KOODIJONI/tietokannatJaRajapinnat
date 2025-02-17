
const express = require('express');
const router = express.Router();

const grade = require('../models/grade_model');

router.get('/', function (request, response) {
    grade.getAllGrades(function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            console.log(dbResult);
            response.json(dbResult);
        }
    })
});

router.get('/:id', function (request, response) {
    grade.getGradeById(request.params.id, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    })
});

router.post('/', function(request, response) {
    grade.addGrade(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.delete('/:id', function(request, response) {
    grade.deleteGrade(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.put('/:id', function(request, response) {
  grade.updateGrade(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;