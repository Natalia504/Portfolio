
const express = require ('express'),
    bodyParser = require ('body-parser'),
    app = express(),
    port = 5050

app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/../build`));






// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })
app.listen(port, () => (console.log(`Listening on port ${port}`)));