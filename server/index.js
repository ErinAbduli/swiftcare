import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
	origin: true,
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

//db
mongoose.set("strictQuery", false);
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.listen(port, () => {
	connectDB();
	console.log(`Server is running on port: ${port}`);
});
