let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: {type: String, required: true},
  usn: {type: String, required: true}
})

let User = mongoose.model('User', userSchema);

let saveUser = (data, callback) => {
  let user = new User(data);
  User.find({email: data.email}, (err, doc) => {
    console.log(doc)
    if(doc.length > 1)
      return callback('Already Subscribed', false)
    else
      user.save((err, success) => {
        callback(err, success);
      })
  })
}

module.exports = {
  saveUser
}