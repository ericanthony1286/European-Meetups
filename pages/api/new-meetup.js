// /api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://nnquangnd:quang123456@cluster0.f5ute.mongodb.net/europeanMeetups?retryWrites=true&w=majority"
    );
    const db = client.db(); // collection holds multiple dcocuments in mongodb definition
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
