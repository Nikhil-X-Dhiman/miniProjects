import { readStorage } from "../models/manageStorageOps.models.js";

 const getRequest = async (req, res)=>{
  let host = req.host
  const data = await readStorage();
  res.render('index', { data, host });
}

export { getRequest }