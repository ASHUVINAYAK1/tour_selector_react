import { useState } from "react";


function Card({id, name, info, image, price, removeHandler}) {

    const [readmore, setReadmore] = useState(false);
    const description = readmore? info: `${info.substring(0, 200)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image" alt="error"></img>

            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name} </h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
            <button className="btn-red" onClick={()=>removeHandler(id)}>Not Intrested</button>

        </div>
    );
}

export default Card;