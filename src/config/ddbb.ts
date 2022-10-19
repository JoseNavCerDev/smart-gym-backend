import mongoose from 'mongoose';

export async function ddbbConnection() {

    try {
        await mongoose.connect(`${process.env.MONGO_CONNECTION}` );
        console.log("Successful connection to DDBB");
        
    } catch (error) {
        console.log(error);
        
    }    
}

