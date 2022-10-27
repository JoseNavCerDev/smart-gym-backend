/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import mongoose from 'mongoose';
export async function ddbbConnection() {
    // joe conection
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const conection = process.env.DB_CONECTION_FORMAT;
    const uri = `${conection}//${user}:${password}.mongodb.net/?retryWrites=true`;
    // localhost conection
    // const port = process.env.DB_PORT
    // const name = process.env.DB_NAME
    // const uri: string = `mongodb://localhost:${port}/${name}`
    try {
        // if (!port || !name) throw new Error('undefined params')
        if (!user || !password || !conection)
            throw new Error('undefined params');
        await mongoose.connect(uri);
        return console.log('Successful connection to DDBB', process.env.DB_NAME);
    }
    catch (error) {
        console.log(error);
    }
}
