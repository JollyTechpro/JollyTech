'use client';

import React, { useState } from 'react';

const BookingPage = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [estimatedTime, setEstimatedTime] = useState(0);

    const basePrice = 20;
    const pricePerMinute = 0.85;

    const calculateTotal = () => {
        return basePrice + (estimatedTime * pricePerMinute);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking form submission logic here
    };

    return (
        <div style={{ display: 'flex' }}>
            <form onSubmit={handleSubmit} style={{ flex: 1, marginRight: '20px' }}>
                <h1>Booking Form</h1>
                <label>
                    Pickup Location:
                    <input type='text' value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
                </label>
                <label>
                    Dropoff Location:
                    <input type='text' value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} required />
                </label>
                <label>
                    Date and Time:
                    <input type='datetime-local' value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
                </label>
                <label>
                    Passengers:
                    <input type='number' value={passengers} onChange={(e) => setPassengers(e.target.value)} min='1' required />
                </label>
                <label>
                    Phone:
                    <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <button type='submit'>Book Now</button>
            </form>
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }}>
                <h2>Price Calculator</h2>
                <p>Base Price: €{basePrice}</p>
                <p>Estimated Time: {estimatedTime} minutes</p>
                <p>Total: €{calculateTotal().toFixed(2)}</p>
            </div>
        </div>
    );
};

export default BookingPage;
