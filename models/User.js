const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true, // space 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minLength: 5
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// const User = mongoose.model('파일명', 스키마명)
const User = mongoose.model('User', userSchema)

// exports를 선언해서 user 모델을 다른 파일에서도 사용할 수 있도록 설정함
module.exports = {User}