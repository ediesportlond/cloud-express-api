import dbConnect from "./dbConnect.js";

export async function createUser(req, res) {
    const db = dbConnect();
    const doc = await db.collection('users').add(req.body)
        .catch(err => res.status(500).send({ succes: false, message: err }));
    res.send(201).send({ success: true, message: 'User created: ' + doc.id })
}