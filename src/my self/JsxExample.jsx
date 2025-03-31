import React from 'react';

const JsxExample = () => {
    const x = 111; // You can change this number to test other values

    const isPositive = x > 0 ? "positive" : "negative";
    const isEven = x % 2 === 0;

    const isPrime = (num) => {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true; 
    };

    const isPalindrome = (num) => {
        const strNum = num.toString();
        return strNum === strNum.split('').reverse().join('');
    };

    const primeStatus = isPrime(x) ? "is a prime number" : "is not a prime number";
    const palindromeStatus = isPalindrome(x) ? "is a palindrome" : "is not a palindrome";

    const subjects = ["React", "Angular", "MongoDB", "Express", "Node"];

    const colors = ["red", "blue", "green", "orange", "purple"]; // Unique colors for each item

    return (
        <div>
            <h1>The value of x is: {x}</h1>
            <h2 style={{ color: isEven ? 'blue' : 'red' }}>
                x is {isPositive} and {isEven ? "even" : "odd"}.
            </h2>
            <h2 style={{ color: isPrime(x) ? 'green' : 'yellow' }}>
                x {primeStatus}.
            </h2>
            <h2 style={{ color: isPalindrome(x) ? 'orange' : 'pink' }}>
                x {palindromeStatus}.
            </h2>

            <h2>Subjects:</h2>
            {subjects.map((item, index) => (
                <p key={index} style={{ color: colors[index % colors.length] }}>
                    {index + 1}. {item}
                </p>
            ))}
        </div>
    );
};

export default JsxExample;
