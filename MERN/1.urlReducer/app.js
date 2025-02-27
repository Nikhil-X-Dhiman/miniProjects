import express from 'express'
import { PORT } from './modules/validation.module.js';

const app = express();

app.get('/', (req, res)=>{
  res.send('OK');
})

app.listen(PORT, ()=>{
  console.log(`Server is running at port: ${PORT}`);
})