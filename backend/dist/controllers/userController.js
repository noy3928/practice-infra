import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ user });
    }
    catch (error) {
        res.status(400).send(error);
    }
};
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .send({ error: "Login failed! Check authentication credentials" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).send({ error: "Invalid login credentials" });
        }
        res.status(200).send({ user });
    }
    catch (error) {
        res.status(400).send(error);
    }
};
