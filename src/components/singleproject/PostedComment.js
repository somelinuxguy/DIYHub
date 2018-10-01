import React from 'react';

let capitalize = (string) => {
    let name = string[0].toUpperCase() + string.slice(1)
    return name
}

let PostedComment = (props) =>
    <div className="commentBox">
        <div>{capitalize(props.comment.name)} commented:</div>
        <div>{props.comment.comment}</div>
        <div>{props.comment.creation_date}</div>
    </div>

export default PostedComment;