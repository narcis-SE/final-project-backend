import express from 'express';
const questionRoutes = express.Router();
const Question = require('../models/Question');

questionRoutes.get("/", async (req, res) => {
    try {
        console.log("Hello World");
        res.status(200).json({"message": "At home page"})
    } 
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({message: "Internal Server Error"})
    }

    
})

questionRoutes.get('/api', async (req, res) => {
    const questions = await Question.find()
    res.send(questions)
});

questionRoutes.get('/random', async (req, res) => {
    try {
        const questions = await Question.find()
        const randomIndex = Math.floor(Math.random() * questions.length-1)
        const randomQuestion = questions[randomIndex].question + questions[randomIndex].answer[0].name
        const randomIndex2 = Math.floor(Math.random() * questions.length-1)
        const testQA = questions[randomIndex].answer[0].name

        // set variable testAnswer to generate random answers that would temporarily represent what a user would input
        // on the trivia form page... Test a match condidtion. Buildout if, else blocks.
        const testAnswer = questions[randomIndex2].answer[0].name
        console.log("TEST QA: " + testQA + " TEST ANSWER: " + testAnswer);
        
        if (testQA != testAnswer) {
            console.log(questions[randomIndex].question );
            res.status(200)
            .json(testQA + randomIndex + ": TEST ANSWER: " + testAnswer + randomIndex2)
        } 
        else {
            
            res.status(500).json({"message": "err, No match"})
        }
    }
    catch (e) {
        console.error("Error:", e);
        res.status(500).json({message: "Internal Server Error"})
    }
});

export default questionRoutes;

