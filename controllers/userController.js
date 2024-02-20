function register(req, res) {
    res.send("Registering new user");
}

function login(req, res) {
    res.send("Login  new user");
}

function checkUser(req, res) {
    res.send("Check new user");
}


module.exports = {
    register,
    login,
    checkUser,
  };