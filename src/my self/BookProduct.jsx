import React from 'react';
import Book from './Book';

function BookProduct() {
    const bookDetails = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's love for Daisy Buchanan.",
            price: "₹10.99"

        },
        {
            title: "The God of Small Things",
            author: "Arundhati Roy",
            description: "A story about the childhood experiences of fraternal twins in Kerala.",
            price: "₹12.99"

        },
        {
            title: "Midnight's Children",
            author: "Salman Rushdie",
            description: "A novel that tells the story of India's transition from British colonialism to independence.",
            price: "₹15.99"

        },
        {
            title: "The White Tiger",
            author: "Aravind Adiga",
            description: "A darkly humorous tale of a poor Indian villager's rise to success.",
            price: "₹9.99"

        },
        {
            title: "Train to Pakistan",
            author: "Khushwant Singh",
            description: "A poignant story set during the partition of India.",
            price: "₹11.99"

        }
    ];


    return (
        <div>
            {bookDetails.map((book, index) => (
                <Book 
                    key={index}
                    title={book.title} 
                    author={book.author} 
                    description={book.description} 
                    price={book.price} 
                />
            ))}

        </div>
    );
}

export default BookProduct;
