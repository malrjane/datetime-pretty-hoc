import React from "react";
import DateTimePretty from './DateTimePretty';
import DateTime from './DateTime';
 

const PrettyDateTime = DateTimePretty(DateTime);


function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettyDateTime  date={props.date} />
        </div>
    )
}

export default Video;