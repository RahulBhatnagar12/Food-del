import mongoose from "mongoose";

export const  connectDB = async () =>{

<<<<<<< HEAD
    await mongoose.connect('mongodb+srv://Food-del:Fooddel123@cluster0.z3f2v.mongodb.net/food-del').then(()=>console.log("DB Connected"));
=======
    await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
>>>>>>> 1e11d4fccf5a48e58c5b8a513154a809c6af39f2
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.