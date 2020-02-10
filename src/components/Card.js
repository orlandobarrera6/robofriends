import React from 'react';

const Card = (props) => {
    return(
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5'> 
        {/* the above are tachyons css classes that make the dev much much faster */}
            <img src={`https://robohash.org/${props.name}?200x200`} alt='robots' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;