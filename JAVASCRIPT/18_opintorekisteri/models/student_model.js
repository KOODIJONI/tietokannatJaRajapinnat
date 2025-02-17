const db = require('../database');

const student = {
  getAllStudents: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id=?', [id], callback);
  },
  add: function(student, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [student.Etunimi, student.Sukunimi,student.Osoite,student.Luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    db.query('DELETE FROM arviointi WHERE opiskelija_id=?', [id], function(err, result) {
        if (err) {
            return callback(err);
        }
        db.query('DELETE FROM opiskelija WHERE id=?', [id], callback);
    });
},
  update: function(id, student, callback) {
    console.log(student);
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?,Osoite=?,Luokkatunnus=? where id=?',
      [student.Etunimi, student.Sukunimi, student.Osoite, student.Luokkatunnus, id],
      callback
    );
    
  }
};
module.exports = student;