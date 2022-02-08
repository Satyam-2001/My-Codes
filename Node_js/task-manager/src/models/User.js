const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Task = require("./Task")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`Email is invalid!!`)
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    avatar: {
        type: Buffer
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
},{
    timestamps: true
})

userSchema.virtual('tasks',{
    ref: 'Task',
    localField:'_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function(){
    const userObject = this.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id.toString()}, 'Satyam@2001')
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}

userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})
    if(user && await bcrypt.compare(password,user.password)){
        return user
    }
    throw new Error("Unable to login")
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8)
    }
    next()
})

userSchema.pre('remove', async function(next){
    await Task.deleteMany({owner: this._id})
    next()
})

const User = mongoose.model('User',userSchema)

module.exports = User