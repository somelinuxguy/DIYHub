const db = require('../database');
const jwt = require('jsonwebtoken')

let postProject = async (req, res) => {
  console.log(req.body)

  let decoded = jwt.decode(req.body.token);
  console.log(decoded);

  db.one(`INSERT INTO diy_projects (creation_date, user_id, project_title, feature_image_file, project_description, publish_status) VALUES (CURRENT_TIMESTAMP, ${decoded.id}, '${req.body.title}', 'bulb.png', '${req.body.description}', 4) RETURNING id`)
  .then(response => {
    console.log(response);
    res.send({
      projectId: response.id,
      status: 'success'
    })
  })
  .catch(err => console.log(err));
  
}
module.exports = postProject;
