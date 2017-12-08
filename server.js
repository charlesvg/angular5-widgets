var express = require('express');
var app = express();


app.use('/', express.static('src'))
app.use('/dist', express.static('dist'))
// app.use('/app-a', express.static('app-a'))
// app.use('/app-b', express.static('app-b'))

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.listen(3000)
