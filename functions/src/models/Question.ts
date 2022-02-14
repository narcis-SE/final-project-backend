import { ObjectId } from "mongodb";

export default interface Question{
    _id?: ObjectId,
    question: string,
    answer: [{
        _id: false,
        name: string,
        image: string
    }]
    hint: string,
    difficulty: string
}