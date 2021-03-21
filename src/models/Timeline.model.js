import mongoose from 'mongoose';

const TimelineSchema = mongoose.Schema(
	{
		tag: String,
		body: String,
		color: String,
		date: String,
	}, {timestamps: true}
);

const TimelineModel = mongoose.model('timeline', TimelineSchema);

export default TimelineModel;