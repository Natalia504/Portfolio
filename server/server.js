
const express = require ('express'),
    bodyParser = require ('body-parser'),
    app = express(),
    port = 5050

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));




app.listen(port, () => (console.log(`Listening on port ${port}`)));