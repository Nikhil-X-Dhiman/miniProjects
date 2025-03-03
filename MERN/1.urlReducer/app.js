import express from 'express'
import { router } from './routes/app.routes.js';
import { PORT } from './models/portValidation.models.js';
import { serverStarter } from './controllers/serverStarter.controller.js';

const app = express();

serverStarter()

// middleware starts
app.use(express.static('public'))
// to read correct req body data
app.use(express.urlencoded({extended: true}))
// for server side rendering
app.set('view engine', 'ejs');
// middleware ends

// router setup
app.use(router);
// if no defines routes found
app.use((req, res)=>{
  res.send("Not Allowed")
})

// server listening on port
app.listen(PORT, ()=>{
  console.log(`Server is running at port: ${PORT}`);
})