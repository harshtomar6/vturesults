//depenedencies
let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = require('./db');

const port = process.env.PORT || 3000;
mongoose.connect('mongodb://harshtomar6:bjn721@ds117888.mlab.com:17888/vtu-results');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/html.html')
})

app.post('/subscribe', (req, res) => {
  console.log(req.body);
  db.saveUser(req.body, (err, success) => {
    if(err)
      res.sendFile(__dirname+'/error.html');
    else
      res.sendFile(__dirname+'/success.html');
  })
  
})

app.listen(port, () => {
  console.log('Server is live at port '+port);
})