
const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojakso_model');


router.get('/', function (request, response) {
    opintojakso.getAllCourses(function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            console.log(dbResult);
            response.json(dbResult);
        }
    })
});

router.get('/:id', function (request, response) {
    opintojakso.getCourseById(request.params.id, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    })
});

router.post('/', function(request, response) {
    opintojakso.addCourse(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.delete('/:id', function(request, response) {
    opintojakso.deleteCourse(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.put('/:id', function(request, response) {
  opintojakso.updateCourse(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;

