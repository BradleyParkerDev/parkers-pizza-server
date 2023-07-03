const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generatePasswordHash = async (password, saltRounds) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const validatePassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

const generateUserToken = (userData) => {
	const exp = Math.floor(Date.now() / 1000) + 60 * 60;
	const payload = {
		userData,
		exp: exp
	}
	
	const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(payload, jwtSecretKey);
  return token;
};

const verifyToken = (req, res, next) => {
    try {
		// console.log(req.headers)
        const bearerToken = req.headers.authorization

        if (bearerToken) {
            console.log("bearerToken")

            console.log(bearerToken)
            const token = bearerToken.split(' ')[1]

            let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log('!@-------decoded-------@!')
            console.log(decoded)
            // jwt.verify will check for expiration, code below is the manual version
            // if (decoded.exp < Date.now()/1000) {
            //     throw {
            //         status: 403,
            //         message: "Token Expired"
            //     }
            // }
            req.decoded = decoded
			console.log("Middleware!!!!")

            // req / request object gets passed with the next callback function
            next()  
        } else {
            throw {
                status: 401,
                message: 'Missing Token'
            }
        }
    } catch (error) {
       res.status(error.status || 401).json(error.message) 
    }

}

module.exports = {
  generatePasswordHash,
  validatePassword,
	generateUserToken,
	verifyToken
};