import { z } from 'zod';
import { config } from 'dotenv';

// difining different checks & conversion from string to number of PORT
const portSchema = z.coerce.number().min(1024).max(65535).default(3000);
let PORT;
const portValidation = () => {
  try {
    // dotenv method to get PORT value from .env file
    config();
    // checks are performed & import of PORT number from .env file
    PORT = portSchema.parse(process.env.PORT)
  } catch (error) {
    console.log('PORT Validation Error: ', error.issues[0].message);
  }
}
// exports port value
export { PORT, portValidation };