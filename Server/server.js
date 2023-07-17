const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://sathwik02:sathwik02@cluster0.yymchly.mongodb.net/demo');
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

server.use(cors());
server.use(bodyParser.json());


//CRUD - Create
server.post('http://localhost:8080/demo', async (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    const doc = await user.save();

    console.log(doc)
    res.json(doc);
})

server.get('http://localhost:8080/demo', async (req, res) => {
    const docs = await User.find({});
    res.json(docs)

})

server.listen(8080, () => {
    console.log('server started')
})
