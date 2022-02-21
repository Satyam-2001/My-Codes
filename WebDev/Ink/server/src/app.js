const express = require("express");

const port = process.env.PORT || 4001;
const app = express();
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})