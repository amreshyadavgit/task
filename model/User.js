require('../services/dbConnection');
var UserSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password:{ type: String, required: true },
    name:{ type: String, required: true },
    mobile:{ type: String, default: null },
    googleId:{ type: String, required: true, index: { unique: true } },
    googleAccessToken: { type: String, required: true, index: { unique: true } },
    facebookId:{ type: String, required: true, index: { unique: true } },
    facebookAccessToken: { type: String, required: true, index: { unique: true } },
    modifiedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: 1 },
    inActiveDate: { type: Date, default: null },
}, { timestamp: { createdAt: "createdAt", updatedAt: "modifiedAt" } });
module.exports = mongoose.model("User", UserSchema);