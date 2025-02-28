import crypto from 'crypto';
import { readStorage, writeStorage } from "../models/manageStorageOps.models.js";

const genShortURL = () =>{
  return crypto.randomBytes(4).toString('hex');
}

const getParseURL = async (req, res) => {
  let { realURL, optShortURL } = req.body;
  if(!realURL) res.sendStatus(404).send('URL is required!!!')
  const data = await readStorage();
  
  let shortURL = optShortURL;

  if (data[shortURL] || shortURL === '') {
    do {
      shortURL = genShortURL();
    } while (data[shortURL]);
  }
  realURL = realURL.match("https://") ? realURL.slice(8): realURL;
  realURL = realURL.match("http://") ? realURL.slice(7): realURL;
  
  data[shortURL] = realURL;
  writeStorage(data);
  res.redirect('/');
}

export { getParseURL }