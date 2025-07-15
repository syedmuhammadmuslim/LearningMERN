import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDoc = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) =>
    console.log("MongoDB Error:\n", err.message, "\nAn error has occured")
  );
