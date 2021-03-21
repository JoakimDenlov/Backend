import TimelineModel from '../models/Timeline.model.js';
import StatusCode from '../../config/StatusCode.js';


const createTimeline = async (req, res) => {

	const timeline = new TimelineModel({
		tag: req.body.tag,
		body: req.body.body,
		color: req.body.color,
		date: req.body.date
	});
    
	try {
		const response = await timeline.save();
		res.status(StatusCode.CREATED).send(response);
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message });
	}
};

const getAllTimeline = async (req, res) => {
	try {
		const response = await TimelineModel.find();
		res.status(StatusCode.OK).send(response);
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message});
	}
};

export default {
	getAllTimeline,
	createTimeline
}