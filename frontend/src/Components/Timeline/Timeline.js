import React, {useState, useEffect} from 'react';
import './Timeline.css';
import InfoBox from './InfoBox';
import Axios from 'axios';
 

const Timeline = () => {

const [data, setData] = useState(0);

const fetchDataAPI = () => {
    Axios.get("/timeline")
    .then((response) => setData(response.data))
    .catch((error) => console.log(error))
}
useEffect(() => {
    fetchDataAPI();
}, [])

return (
    data.length > 0 && (
        <div className="timeline-container">
            {data.map((data, idx) => (
                <InfoBox data={data} key={idx} />
            ))}
        </div>
    ));
            };
        

export default Timeline