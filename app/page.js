import React, { useState } from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for calculating price based on the date or other criteria
        const calculatedPrice = 100; // Example static price
        setPrice(calculatedPrice);
    };

    return (
        <div>
            <h1>Booking Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Book Now</button>
            </form>
            {price > 0 && <h2>Total Price: ${price}</h2>}
        </div>
    );
};

export default BookingForm;