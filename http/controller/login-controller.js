class LoginController {
    login(request, response, next) {
        response.render('login.njk')
    }
    bcrypt(request, response, next) {

    }
}
module.exports = LoginController;