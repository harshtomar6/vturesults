let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: {type: String, required: true},
  usn: {type: String, required: true}
})

let User = mongoose.model('User', userSchema);

let saveUser = (data, callback) => {
  let user = new User(data);
  user.save((err, success) => {
    callback(err, success);
  })
}

module.exports = {
  saveUser
}