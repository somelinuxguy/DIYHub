const db = require('../database');

let postComment = (req, res) => {
    let comment = req.body;
    console.log(comment);
    db.none(
        `INSERT INTO diy_comments (creation_date, user_id, project_id, comment) VALUES
        (current_timestamp, ${comment.user_id}, ${comment.project_id}, '${comment.comment}');
        `)


    .then(response => {
        console.log(response);
        res.send({status: 'success'})
    })
}
module.exports = postComment;