var express = require('express');
var path = require('path');

let app = express();
app.get('/*', (req, res) => {
 res.sendFile(path.join(__dirname, './index.html'));
});
app.listen(3000, () => console.log('Running on a localhost:3000'));