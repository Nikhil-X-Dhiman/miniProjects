import path from 'path';
import fs from 'fs'

// Check storage file exists or not... if not then create one

// absolute location of storage file from
const storageURL = path.join(import.meta.dirname, '..', 'data', 'storage.json')
export const storageValidation = () =>{
  try {
    // syncronously checks if file exists
    if (!fs.existsSync(storageURL)) {
      // asynchronously write new file with empty json
      fs.writeFile(storageURL, '{}', 'utf8', (err)=>{
        if (err) {
          console.error(err);
        }else{
          console.log(`File not found. New file created`);
        }
      })
    }
  } catch (error) {
    console.log(error);
  }
}