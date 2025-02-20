const db = require('../database');
const bcrypt = require('bcryptjs'); // bcrypt for hashing passwords

const register = {
  addUser: function(user, callback) {
    // Check if the username already exists in the database
    db.query('SELECT * FROM user WHERE username = ?', [user.username], (dbError, existingUser) => {
      if (dbError) {
        callback(dbError, null);  // Pass the error to the callback
        return;
      }

      if (existingUser.length > 0) {
        // If a user with the same username exists, call the callback with an error
        callback(new Error('Username is already taken.'), null);
        return;
      }

      // Hash the password using bcrypt
      bcrypt.hash(user.password, 10, (hashError, hash) => {
        if (hashError) {
          callback(hashError, null);  // Pass the hash error to the callback
          return;
        }

        // If username is available and password is hashed, insert the new user
        db.query('INSERT INTO user (username, password) VALUES (?, ?)', [user.username, hash], (insertError, dbResult) => {
          if (insertError) {
            callback(insertError, null);  // Pass the insert error to the callback
          } else {
            callback(null, dbResult);  // Pass the successful result to the callback
          }
        });
      });
    });
  }
};

module.exports = register;
