import React from 'react';

function Card({name, email, id}) {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?set=set2&size=250x250`} alt="Test"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;