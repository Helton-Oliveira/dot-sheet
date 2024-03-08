import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createToken = async(params) => {
   const token = jwt.sign({name: params.name}, process.env.SECRET)

   return token
}

const verifyToken = async(req, res, next) => {
    
    try {
        
        const tokenHeader = req.headers['authorization'];
        const token = tokenHeader && tokenHeader.split(' ')[1];
        if(!token) {
            res.status(500).json({msg: 'token is not valid'})
            return
        }

        jwt.verify(token, process.env.SECRET)
        next()

    } catch (error) {
        next(error)
    }
}

export { createToken, verifyToken }; 