import AuthService from '../services/AuthService.js';

class AuthController {
    static async signin(req, res) {
        const { identifier, password } = req.body; // Accepts either email or username
        try {
            const { result, token } = await AuthService.signin(identifier, password);
            res.status(200).json({ result, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async signup(req, res) {
        const { username, email, password, confirmPassword } = req.body;
        try {
            const { result, token } = await AuthService.signup(username, email, password, confirmPassword);
            res.status(201).json({ result, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default AuthController;
