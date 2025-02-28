import { Router } from "express";

import { getRequest } from "../controllers/getRequest.controller.js";
import { redirectPath } from "../controllers/redirect.controller.js";
import { getParseURL } from "../models/getParseURL.modal.js";

const router = Router();



router.get('/', getRequest)

router.post('/submit', getParseURL)

router.get('/:getURL', redirectPath)

export { router };