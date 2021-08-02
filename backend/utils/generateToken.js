import jwt from 'jsonwebtoken'


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECERET, {
        expiresIn:'1d',
    });
}

export default generateToken;