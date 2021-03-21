import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema(
	{
		name: String,
		commentBody: String,
		password: String
	}, {timestamps: true}
);

const CommentModel = mongoose.model('comments', CommentSchema);

export default CommentModel;