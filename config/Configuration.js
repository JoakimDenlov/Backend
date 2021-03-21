import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
	try {
		const DB_URL = "mongodb+srv://random:hejhej123@fullstackproject.ayvmb.mongodb.net/FullstackPortfolio?retryWrites=true&w=majority";
		await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
		console.log('Succesfully connected to the database!');
	}
	catch (error) {
		console.log('Failed to connect to database: ', error);
		process.exit();
	}
};

const connectToPort = (app) => {
	const port = process.env.PORT || 8080
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
};

export default {
	connectToDatabase,
	connectToPort
};
