let bodyParser = require('body-parser');
let express = require('express');

let PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, function() {
  console.log(`listening at http://localhost:${PORT}!`);
});