import { portValidation } from "../models/portValidation.models.js";
import { storageValidation } from "../models/storageValidation.models.js";

const serverStarter = () => {
  storageValidation()
  portValidation()
}

export { serverStarter };