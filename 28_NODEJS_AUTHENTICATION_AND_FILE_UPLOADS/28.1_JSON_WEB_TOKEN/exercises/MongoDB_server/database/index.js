import mongodb from 'mongodb';

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

function connection() {
  return mongodb.MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true})
    .then((conn) => conn.db('user_crud'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export default connection;
