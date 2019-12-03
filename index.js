let express = require('express');
let app = express();
let mongoose = require('mongoose');


app.get('/',(req, res) => {
res.json({message: `connected`});
});

let uri = `mongodb://localhost/mongo_ref_2410`;

mongoose.connect(uri);
mongoose.connection.once('open', () => {
console.log(`mongodb connected`);
app.listen(3000,() => console.log(`sever connected at port 3000`)
)
})