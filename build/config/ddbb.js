/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import mongoose from 'mongoose';
export async function ddbbConnection() {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const conection = process.env.DB_CONECTION_FORMAT;
    const uri = `${conection}//${user}:${password}.mongodb.net/?retryWrites=true&w=major`;
    try {
        await mongoose.connect(uri);
        return console.log('Successful connection to DDBB');
    }
    catch (error) {
        console.log(error);
    }
}
