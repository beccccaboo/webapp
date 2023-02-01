import app from "./api/app.js"

import client from "./api/config/DBConnection.js"
import dotenv from "dotenv"
import db from "./api/models/index.js";
dotenv.config()

const PORT = process.env.PORT || 8080

// db.connectionTest()
db.sequelize.sync({ force: false })
    .then(() => console.log("Drop and Re-Sync db."))
    .catch((err) => console.log("Failed to sync db: " + err.message))

app.listen(PORT, ()=> {
    console.log("Server Running on Port "+ PORT)
})

