const { default: mongoose } = require("mongoose")
const user = require("../../modal/user")
const bcryptJS = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body
    const _user = await user.findOne({ email }).lean()
    const _password = await bcryptJS.compare(password, _user.password)
    if (_password) {
        const _token = jwt.sign(
            _user,
            "qwerty",
            { expiresIn: '1h' }
        )
        res.status(201).json({ message: 'user login successful!', token: _token })
    } else {
        res.status(403).json({ message: 'Password is invalid' })
    }
}
const register = async (req, res) => {
    const { username, email, password, firebaseId } = req.body
    const encryptedPassword = await bcryptJS.hash(password, 10)
    // connectivity with db
    const _user = new user({
        _id: mongoose.Types.ObjectId(),
        username,
        email,
        password: encryptedPassword,
        firebaseId
    })
    await _user.save()
    return res.status(201).json({ message: 'successfully registered!!' })
}

module.exports = { login, register }