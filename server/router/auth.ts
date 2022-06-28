import { Router, Response } from "express";
import { ILogin, IRegister } from "../Interface/types";
import * as yup from "yup";
import userModel, { login } from '../models/auth'
import jwt from "jsonwebtoken";

export const AuthRouter = Router();
let authSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),

});
AuthRouter.post("/register", async (req, res: Response) => {
  const registerhPayload: IRegister = req.body;
  try {
    const validPayload = await authSchema.validate(registerhPayload);
    const newUserObj = new userModel(validPayload);
    const newUser = await newUserObj.save();
    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
    })
  } catch (err) {
    res.status(422).json({ errors: "Error" });
  }
});

AuthRouter.post("/login", async (req, res) => {
  const loginPayload: ILogin = req.body;

  try {
    const validPayload = await authSchema.validate(loginPayload);

    try {
      const user = await login(validPayload.email, validPayload.password);
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        "SHH_its_SECRET"
      );
      res.json({ token });
    } catch (error) {
      res.status(422).json({ errors: "Error" });
    }
  } catch (err) {
    res.status(500).json({ errors: "Error" });
  }
});

export default AuthRouter


