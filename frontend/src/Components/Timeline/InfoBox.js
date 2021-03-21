import React from 'react';
import  './Timeline.css'

const InfoBox = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.color }}>
                {data.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.body}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);
export default InfoBox




