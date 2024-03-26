import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// signup code
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // password check
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match." });
    }

    // check user exists or not
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists!" });
    }

    // hash password here
    const salt = await bcrypt.genSalt(10); // genSalt take a int to encrypt strongly if you take 50 then its more strong and take long time to encrypt
    const hashedPassword = await bcrypt.hash(password, salt);

    // user profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // user created
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // if user messing while input then this check happens
    if (newUser) {
      // generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);

      // saving created user in db
      await newUser.save();

      // if everything is right then server shows a user data response
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        password: newUser.password,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data." });
    }

    // if anything is wrong then throw this error
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }

  console.log("signing up...");
};

// login code
export const login = async (req, res) => {
  try {
    // reading data
    const { username, password } = req.body;

    // checking user exists
    const user = await User.findOne({ username });

    // checking input password with store db password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // checking correct username and password
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      password: user.password,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
  console.log("logging in...");
};

// logout code
export const logout = async (req, res) => {
  try {
    // clearing cookie and logout
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully." });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
  console.log("logging out...");
};
