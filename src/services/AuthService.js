import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

class AuthService {
    static async signin(identifier, password) {
        // Allow login via either email or username
        const existingUser = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }],
        });

        if (!existingUser) throw new Error("User doesn't exist.");

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) throw new Error("Invalid credentials.");

        const token = jwt.sign(
            { id: existingUser._id, username: existingUser.username, email: existingUser.email },
            process.env.JWT_SECRET || 'test',
            { expiresIn: "1h" }
        );

        return { result: existingUser, token };
    }

    static async signup(username, email, password, confirmPassword) {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) throw new Error("User with this email or username already exists.");

        if (password !== confirmPassword) throw new Error("Passwords do not match.");

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: newUser._id, username: newUser.username, email: newUser.email },
            process.env.JWT_SECRET || 'test',
            { expiresIn: "1h" }
        );

        return { result: newUser, token };
    }
}

export default AuthService;
