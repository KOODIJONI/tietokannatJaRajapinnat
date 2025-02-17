const db = require('../database');

const grade = {
    
    getAllGrades: function (callback) {
        return db.query('select * from arviointi', callback);
    },
    getGradeById: function (id, callback) {
        return db.query('select * from arviointi where id=?', [id], callback);
    },
    addGrade: function (grade, callback) {
        return db.query(
            'insert into arviointi (Paivamaara,Arvosana,Opiskelija_id,Opintojakso_id) values(?,?,?,?)',
            [grade.Paivamaara, grade.Arvosana, grade.Opiskelija_id, grade.Opintojakso_id],
            callback
        );
    },
    deleteGrade: function (id, callback) {
        db.query('DELETE FROM arviointi WHERE id=?', [id], callback);
    },
    updateGrade: function (id, grade, callback) {
        return db.query(
            'update arviointi set Paivamaara=?,Arvosana=?,Opiskelija_id=?,Opintojakso_id=? where id=?',
            [grade.Paivamaara, grade.Arvosana, grade.opiskelija_id, grade.opintojakso_id, id],
            callback
        );
    }
};
//curl commands for testing
//curl -X GET http://localhost:3000/grades
//curl -X GET http://localhost:3000/grades/1
//curl -X POST -H "Content-Type: application/json" -d "{\"Paivamaara\":\"2021-03-01\",\"Arvosana\":\"5\",\"Opiskelija_id\":\"1\",\"Opintojakso_id\":\"1\"}" http://localhost:3000/grades
module.exports = grade;

