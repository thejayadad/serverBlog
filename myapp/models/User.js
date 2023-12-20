import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
      },
      name: {
        type: String,
        required: [true, 'Name is already exists!'],
        unique: true

      },
      owner: {type: String, required: true},
      displayName: {type: String, default: ''},
      favoriteTeam: {type: Object, default: {}},
      bio: {type: String, default: ''},
      bgType: {type: String, default: 'color'},
      bgColor: {type: String, default: '#000'},
      bgImage: {type: String, default: ''},
      buttons: {type: Object, default: {}},
}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)