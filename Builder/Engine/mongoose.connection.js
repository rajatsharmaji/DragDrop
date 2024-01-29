import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.URI;



 export const connection = async () => {
   try{ await mongoose.connect(URI)
        console.log("DB Connected");
   }
    catch (e) {console.error("error: ", e);
  }
}
