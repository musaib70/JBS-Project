/**
 * auth controller 
 * @auther Ahsan Ali
 * @purpose authentication
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const http_response = require('../helpers/http_response');

const login = async (req, res) => {
    const { username, password } = req.body;

    // Find user in "database"
    const user = await User.findOne({ username });
    if (!user) return http_response.notFound(res, 'User not found');

    // compare passwords
    const is_match = await bcrypt.compare(password, user.password);
    if (!is_match) return http_response.notFound(res, 'Invalid password');

    // define token expiration
    const tokenExpiry = '1d';

    // create and sign JWT token
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: tokenExpiry });

    // calculate expiration date
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    return http_response.success(res, { token, user, expiresAt: expiryDate.toISOString() })
};

// define the async function for registering a user
const registerUser = async (req, res) => {
    try {
        const body = req.body;

        // check if the email / username already exists
        const existing_user = await User.findOne({ $or: [{ email: body.email }, { username: body.username }] });
        if (existing_user) return http_response.validationError(res, 'Email/username is already registered');

        // generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        // create a new user instance with the hashed password
        const user = new User({ ...body, password: hashedPassword });

        // save the user to the database
        await user.save();

        const response = { ...user.toObject(), password: undefined };
        return http_response.success(res, response)
    } catch (err) {
        return http_response.error(res, err.message)
    }
};

module.exports = { registerUser, login };
