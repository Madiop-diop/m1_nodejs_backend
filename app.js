const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./models');
const cors = require('cors');

const corsOptions = {
   origin : 'http://localhost:4200'
}

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
const userRoutes = require('./controllers/user.control');




(
   async () =>{
      await db.sequelize.sync();
   }
)();
app.use('/api/users',cors(corsOptions), userRoutes);
app.get('/', (req, res) => res.send('Hello World ass!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));