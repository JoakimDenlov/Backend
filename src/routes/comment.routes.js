import commentController from '../controller/Comments.controller.js';


const routes = (app) => {
	app.post('/comments', commentController.createComment);
	app.get('/comments', commentController.getAllComments);
	app.get('/comments/:commentsId', commentController.getCommentWithId);
	app.get('/searchCommentName', commentController.getCommentWithNameQuery);
	app.put('/comments/:commentsId', commentController.updateComment );
	app.delete('/comments/:commentsId', commentController.deleteComment);

};

export default {
	routes
};