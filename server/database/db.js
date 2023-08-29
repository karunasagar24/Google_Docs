import mongoose  from 'mongoose';

const Connection = async (username = 'sagarraj12', password = 'rajkp2023') => {
    const URL = `mongodb+srv://sagarraj12:rajkp2023@cluster0.ao0x6k4.mongodb.net/google_docs?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}
export default Connection;