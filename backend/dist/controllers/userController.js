import { User } from "../models/user.js";
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
