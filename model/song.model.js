const { model, Schema } = requiere('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'regular'
    }
});

module.exports = model('user', userSchema);