const { MongoClient } = require('mongodb');

async function deleteAllDocuments() {
  const uri = "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const database = client.db('LECTURESCHECK');
    const collection = database.collection('<collection-name>'); // Replace with your collection name

    // Delete all documents in the collection
    const result = await collection.deleteMany({});
    console.log(`${result.deletedCount} document(s) were deleted.`);

  } catch (error) {
    console.error("Error deleting documents:", error);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}

deleteAllDocuments();
