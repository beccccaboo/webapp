import express from "express"
import {setResponse} from "../controllers/index.js";
import {logger} from "../config/logConfig.js";
import {client} from "../config/cloudWatch.js";
const Router = express.Router()

// Routes to check health
Router.route("/")
    .get(
        (req, res) => {
            try{
                client.increment("Health")
                logger.info(`Health point hit`)
                setResponse("Success", 200, res)
            } catch (error) {
                setResponse(error, 500, res, "error")
            }
        }
    )

export default Router;
