import TimelineController from '../controller/Timeline.controller.js';

const routes = (app) => {
	app.get('/timeline', TimelineController.getAllTimeline);
	app.post('/timeline', TimelineController.createTimeline);
};

export default {
	routes
};