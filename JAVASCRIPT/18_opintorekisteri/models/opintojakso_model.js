const db = require('../database');

const opintojakso = {

    getAllCourses: function (callback) {
        return db.query('select * from opintojakso', callback);
    },
    getCourseById: function (id, callback) {
        return db.query('select * from opintojakso where id=?', [id], callback);
    },
    addCourse: function (course, callback) {
        return db.query(
            'insert into opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
            [course.Koodi, course.Laajuus, course.Nimi],
            callback
        );
    },
    deleteCourse: function (id, callback) {
        db.query('DELETE FROM arviointi WHERE opintojakso_id=?', [id], function (err, result) {
            if (err) {
                return callback(err);
            }
            db.query('DELETE FROM opintojakso WHERE id=?', [id], callback);
        });
    },
    updateCourse: function (id, course, callback) {
        console.log(course);
        return db.query(
            'update opintojakso set Koodi=?,Laajuus=?,Nimi=? where id=?',
            [course.Koodi, course.Laajuus, course.Nimi, id],
            callback
        );

    }
};

module.exports = opintojakso;
