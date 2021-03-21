import CommentModel from '../models/Comments.model.js';
import StatusCode from '../../config/StatusCode.js';


const createComment = async (req, res) => {

	const comment = new CommentModel({
		name: req.body.name,
		commentBody: req.body.commentBody,
		password: req.body.password
	});
    
	try {
		const response = await comment.save();
		res.status(StatusCode.CREATED).send(response);
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message });
	}
};

const getAllComments = async (req, res) => {
	try {
		const response = await CommentModel.find();
		res.status(StatusCode.OK).send(response);
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message});
	}
};

const getCommentWithId = async (req, res) => {
	try {
		const response = await CommentModel.findById(req.params.commentsId);
		res.status(StatusCode.OK).send(response);
	} catch ( error ) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occcured while trying to retrieve user with ID ' + req.params.commentsId,
			error: error.message
		});
	}
};

const getCommentWithNameQuery = async (req, res) => {
	try {
		const response = await CommentModel.find({name: req.query.name});
		response.length !== 0 ? 
			res.status(StatusCode.OK).send(response)
			: res.status(StatusCode.NOT_FOUND).send({ message: 'Could not find user with name: ' + req.query.name});

	} catch ( error ) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error uccured while trying to retrieve comment with name: ' + req.query.name,
			error: error.message
		});
	}
};

const updateComment = async (req, res ) => {
	try {
		if(!req.body) {return res.status(StatusCode.BAD_REQUEST).send({message: 'Cannot update empty values'}); }
		const response = await CommentModel.findByIdAndUpdate(req.params.commentsId, { 
			name: req.body.name,
			commentBody: req.body.commentBody,
			password: req.body.password
		}, {new: true});
		res.status(StatusCode.OK).send(response);
	} catch ( error ) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to update values of the comment with the ID: ' + req.params.commentId,
			error: error.message
		});
	}

};

const deleteComment = async (req, res) => {
	try {
		const response = await CommentModel.findByIdAndDelete(req.params.commentsId);
		res.status(StatusCode.OK).send({
			message: 'Succesfully deleted the COMMENT with name: ${response.name} and ID: ${req.params.commentsId}'
		});
	} catch ( error ) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to delete comment with the ID: ' + req.params.commentsId,
			error: error.message
		});
	}
};
export default {
	createComment,
	getAllComments,
	getCommentWithId,
	getCommentWithNameQuery,
	updateComment,
	deleteComment
};