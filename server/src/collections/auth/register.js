const { AuthServices } = require("../../services")
module.exports = (req, res) => {
    return AuthServices.register(req, res)
}