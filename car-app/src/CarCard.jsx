import React from "react";

const CarCard = (props) => {
    return (

        <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 item-container rounded p-2" id="item-card">
            <div className="m-1 item-card rounded-2 p-2" key={props.key}>
                <img class="item-img img img-fluid" id="item-img" src={props.image} />
                <h3 id="item title" className='item-title'>{props.name}</h3>
                <h5 className="item-price">{props.price}</h5>
                <p className='desc'>{props.desc}</p>
                <button className="btn btn-info purchace-btn" id="purchase-btn">Rent</button>
            </div>
        </div>
    );
}

export default CarCard;