const jwt = require('jsonwebtoken');

module.exports = () => {
    return(req, res, next) => {
        if(req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            try {
                if(jwt.verify(token, process.env.SECRET_PHRASE)) {
                    next();
                }
                else {
                    res.status(401).json({ message: "Auth Ko"})
                }

            } catch (error) {
                res.status(401).json({message: "Auth ko"})

            }
        }
        else {
            res.status(401).status({message: "Auth ko"})
        }
    }
}