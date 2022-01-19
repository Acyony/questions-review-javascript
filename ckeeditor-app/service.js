const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')

const multipart = require('connect-multiparty');
const MultipartyMiddleware = multipart({uploadDir: './images'});

const morgan = require('morgan');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).json({message: "Testing my server! "})
})

app.post('/uploads', MultipartyMiddleware, (req, res) => {
    console.log("sdfghjkl;'")
    console.log(req.files.upload);
    // ler os dados enviados
// salvar no diretorio umages
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server has successfully started at: ${PORT} =^.^=`));