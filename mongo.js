// HAS NOTHING TO DO WITH PRODUCTION
// NOT CONNECTED TO ANY BACKEND
// TEST FILE


const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
//   `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`
  `mongodb+srv://wizardlord160:${password}@cluster0.so9xoqh.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

// Data schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// Creates "notes" collection because on schema from noteSchema
const Note = mongoose.model('Note', noteSchema)

// Creating new note using the model constructor, which has schema, from above
const note = new Note({
  content: 'Mongoose makes things easy',
  important: true,
})

// Find all notes, since find parameter is empty object
Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://wizardlord160:Master123thesws1230006!@cluster0.so9xoqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
