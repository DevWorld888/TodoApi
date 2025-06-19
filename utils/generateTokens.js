import jwt from 'jsonwebtoken';

const generateTokens = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
}

export default generateTokens;
