import { readStorage } from "../models/manageStorageOps.models.js";

const redirectPath = async (req, res) => {
  const data = await readStorage();
  const shortURL = req.params.getURL;
  let link = data[shortURL];
  if (!link) {
    res.redirect('/')
  }
  res.redirect(`https://${link}`);
}

export { redirectPath }