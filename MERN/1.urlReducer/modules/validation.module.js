import { z } from 'zod';
import { config } from 'dotenv';

const portSchema = z.coerce.number().min(1024).max(65535).default(3000);
let PORT;

try {
  config();
  PORT = portSchema.parse(process.env.PORT)
} catch (error) {
  console.log('PORT Validation Error: ', error.issues[0].message);
}

export { PORT };