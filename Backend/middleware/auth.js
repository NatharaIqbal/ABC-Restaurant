import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login required." });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify token using secret key
        req.body.userId = token_decode.id; // Attach the user ID from the token to the request body
        console.log('User ID from token:', req.body.userId); // Log the userId from the token
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.log('Error verifying token:', error);
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;
