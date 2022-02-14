import express from "express";
import Question from "../models/Question";
import { getClient } from "../db";

const questionRoutes = express.Router();

questionRoutes.get("/home", async(req,res) =>{
    console.log("hello world")
    try{
    const client = await getClient();
    const results = await client.db().collection<Question>('questions').find().toArray();
    console.log(results);

    res.json(results)
    } catch(e){
        console.error("Error: ", e)
        res.status(500).json({message: "Internal Server Error"})
    }
})

//Demo Post
questionRoutes.post("/game",async (req, res) => {
    console.log("Test");

    const {
        userAnswer, 
        oneQuestion, 
        actualAnswer
    } = req.body;

    try {
        console.log(userAnswer);
        console.log(actualAnswer);
        console.log(oneQuestion);

        if (userAnswer == actualAnswer) {
            console.log("Found A Match");
            res.status(200).json({"message": userAnswer + " matched " + actualAnswer})
        } else {
            console.log("Didnt find a match");
            console.log(userAnswer + "--" + oneQuestion);
            res.json({"error": "did not match"})
        }
    }
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({message: "Internal Server Error"})
    }
})


export default questionRoutes;