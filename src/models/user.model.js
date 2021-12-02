import mongoose from '../utils/mongoose';

const schema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      type: String,
      unique: true,
    },
    avatar: String,
    phone: Number,
    birthday: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', schema);
