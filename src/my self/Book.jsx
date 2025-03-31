import React from 'react';
import './Book.css';

function Book({ title, author, description, price }) {
    return (
        <div className="book">
            <h2>{title}</h2>
            <h3>by {author}</h3>
            <p>{description}</p>
            <p className="price">{price}</p>
        </div>
    );
}

export default Book;
