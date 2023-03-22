import express from "express";
import cors from "cors"; // "cors" helps with the cross origin resource sharing
import reviews from "./api/reviews.route.js" //we name it reviews because we are to export it as reviews for the movies

const app = express(); // our app is to be using express

//depedencies that the app is to use
app.use(cors());
app.use(express.json()) // middle ware to accept the json files of the user through express


app.use("/api/v1/reviews", reviews) // spepcifiying the format of the api , after the comma speecify reviews as the rout that is to be used
app.use("*", (req, res) => res.status(404).json({ error: "not found" })) //this caters for any user request that cannot be facilitated and included in the line above

export default app; //app created above is exported as a module