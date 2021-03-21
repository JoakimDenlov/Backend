import React, {useState, useEffect} from 'react';
import Styles from './Review.module.css'
import axios from 'axios';
import CommentBox from './Comment'

const CreateComment = () => {
    
    const [name, setName] = useState("");
    const [commentBody, setCommentBody] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([]);
    
    const fetchComments = () => {
         axios.get("/comments")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }

    const postComment = () => {
        const comment = {
            name: name,
            commentBody: commentBody,
            password: password
        }
        axios.post('/comments', comment)
        .then (res => {
            console.log(res)
        })
        .catch(error => {console.log(error)})
    }

    const updateComment = (id, index) => {
        const comment = {
            name: name,
            commentBody: commentBody,
            password: password
        }
        if(password === data[index].password) {
        axios.put(`/comments/${id}`, comment)
        .then((response) => {console.log(response.data.message)})
        .catch((error) => {console.log(error)})
        }
        else {
            alert("Password does not match")
        }
    }
    const deleteComment = (id, index) => {
        if (password === data[index].password) {
        axios.delete(`/comments/${id}`)
        .then((response) => {console.log(response.data.message) })
        .catch((error) => {console.log(error)})
    }
    else {
        alert("Password do not match")
    }
}


    useEffect(() => {
        fetchComments();
    }, [])

    
    
    return (
        <>
        <div className={Styles.Main}>
        {data.map((data, idx) => (
            <div>
            <CommentBox data={data} key={idx} />
            <button onClick={() => updateComment(data._id, idx)}> Edit </button>
            <button onClick={() => deleteComment(data._id, idx)}> Delete </button>

            </div>
        ))}
        </div>
         <div>
        <h4 className={Styles.CreateCommentTitle}> Make a comment! </h4>
        <div className={Styles.CreateComment}>
        <form onSubmit={postComment}>
        <input className={Styles.CreateCommentInputField}
        required={true}
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name.." 
        type="text"
        />
        <textarea className={Styles.CreateCommentInputField} 
        required={true} 
        value={commentBody} 
        onChange={(e) => setCommentBody(e.target.value)} 
        placeholder="Your Comment.." type="text" />
        <input className={Styles.CreateCommentInputField} required={true} 
        value={password} onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        type="password" 
        />
        <input 
        className={Styles.CreateCommentInputField} 
        type="submit" 
        placeholder="Upload" 
        />
        <h4 className={Styles.CreateCommentTitle}>To edit or delete a comment, use the form. Password must match with corresponding comment</h4>
        </form>
        </div>
        </div>
    )
    </>
)
        }

export default CreateComment