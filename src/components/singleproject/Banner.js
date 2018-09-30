import React from 'react';

let Banner = (props) =>
    <div style={{backgroundPositionY: '70%', backgroundImage: 'url(' + props.feature_image_url + ')'}} className="noDec flexC feature alignC justC banner">
        <div className="flexC">
            <div className="subText projectTitle">{props.project_title}</div>
        </div>
    </div>

export default Banner;