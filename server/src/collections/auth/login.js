const { AuthServices } = require("../../services")
module.exports = (req, res) => {
    return AuthServices.login(req, res)
}