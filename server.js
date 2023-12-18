const express = require ('express');
const app = express ();
import{connectDb} from "./helper/db.js"


// routes

app.get('/', (req, res) => {
    res.send('Hello Node API'); // Corrected from req to res
});

await connectDb("mongodb://localhost:27017",() => {
    console.log('db connected')
})

app.listen(7000, () => {
    console.log('Node API is running on port 7000')
});

