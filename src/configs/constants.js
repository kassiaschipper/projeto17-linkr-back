import dotenv from "dotenv";
dotenv.config();
const { PORT, DATABASE_URL } = process.env;

export { PORT, DATABASE_URL };
