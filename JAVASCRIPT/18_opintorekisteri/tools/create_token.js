// generate tokn
const crypto = require('crypto');
const co = require('co');

function spawnTokenBuf(){
    return function(callback){
        crypto.randomBytes(64, callback);
    }
}
co(function*(){
    const token = yield spawnTokenBuf();
    console.log(token.toString('hex'));
});