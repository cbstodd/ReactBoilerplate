var express = require('express');

// Create app
var app = express();

app.use(express.static('public'));
app.listen(3000, function(){
    console.log('~~~| Express is listening on http://localhost:3000 |~~~');
});