import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// Database connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Database connected Successfully');

    app.listen(port, () => {
      console.log(`Server app listening on port ${port}`);
    });
  } catch (err) {
    console.log('failed to connect database', err);
  }
}
main().catch((err) => console.log(err.message));
