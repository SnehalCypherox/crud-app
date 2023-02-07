import mongoose from 'mongoose';

// how our document look like
const userSchema = mongoose.Schema({
    name:  {type: String, required: true},
    email: {type: String, required: true},
    rollno: {type: Number, required: true},
});

export default mongoose.model('user', userSchema);;