const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log(getMongoDBUri());
        const uri=getMongoDBUri()
        const conn = await mongoose.connect(uri);
        console.error(`Mongo db connected: ${(conn.connection.host)}`);
    } catch (error) {
        console.error(`Error in MongoDB connection ${error}`);
        process.exit(1);
    }
};

/**
 * Function to return MongoDB connection URI
 * @returns {string} MongoDB connection URI
 */
function getMongoDBUri() {
  const [host,database,username,password] = [process.env.MONGODB_HOST,process.env.MONGODB_DATABASE,process.env.MONGODB_USERNAME,process.env.MONGODB_PASSWORD];
  
  let uri;

  if (username && password) {
    // If username and password are provided
    const encodedUsername = encodeURIComponent(username); //encodeURIComponent Handle speci
    const encodedPassword = encodeURIComponent(password);
    uri = `mongodb://${encodedUsername}:${encodedPassword}@${host}:${port}/${database}`;
  } else {
    // If username and password are not provided
    uri = `mongodb://${host}:${port}/${database}`;
  }
  console.log(`MonogDB connection URI ${uri}`);
  return uri;
}


module.exports = connectDB;
 
