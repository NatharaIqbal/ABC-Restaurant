import React from 'react';
import './Orders.css';

// Dummy food items
const foodItems = {
    "1": { name: "Greek Salad", price: 1200.00, description: "Crisp cucumbers, juicy tomatoes, olives, and feta cheese." },
    "2": { name: "Lasagna Rolls", price: 1480.00, description: "Savory lasagna rolls layered with rich marinara and gooey cheese." },
    "3": { name: "Chicken Rolls", price: 1100.00, description: "Juicy chicken wrapped in savory rolls." },
    "4": { name: "Vanilla Ice Cream", price: 1125.00, description: "Classic Vanilla Ice Cream, creamy and smooth." },
    "5": { name: "Fruit Ice Cream", price: 1220.00, description: "Bursting with fruity flavors, refreshing dessert." },
    "6": { name: "Fried Cauliflower", price: 1220.00, description: "Crispy and golden, seasoned with a blend of spices." }
};

// Dummy orders
const dummyOrders = [
    {
        id: '1',
        type: 'Dine-In',
        address: '123 Main St, City, Country',
        name: 'John Doe',
        orderTime: '2024-09-01T12:30:00Z',
        status: 'Completed',
        paymentStatus: 'Paid',
        numPeople: 4,
        foodItems: [
            { id: "1", quantity: 2 },
            { id: "2", quantity: 1 }
        ],
        total: (1200.00 * 2) + 1480.00
    },
    {
        id: '2',
        type: 'Table Reservation',
        address: '456 Elm St, City, Country',
        name: 'Jane Smith',
        orderTime: '2024-09-01T14:00:00Z',
        status: 'Out for Delivery',
        paymentStatus: 'Pending',
        numPeople: 2,
        foodItems: [
            { id: "3", quantity: 3 },
            { id: "4", quantity: 1 }
        ],
        total: (1100.00 * 3) + 1125.00
    },
    {
        id: '3',
        type: 'Delivery',
        address: '789 Oak St, City, Country',
        name: 'Alice Johnson',
        orderTime: '2024-09-01T16:45:00Z',
        status: 'In Transit',
        paymentStatus: 'Paid',
        foodItems: [
            { id: "5", quantity: 2 },
            { id: "6", quantity: 1 }
        ],
        total: (1220.00 * 2) + 1220.00
    }
];

const Order = () => {
    return (
        <div className="orders-container">
            <h1>Order Details</h1>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Order Time</th>
                        <th>Status</th>
                        <th>Payment Status</th>
                        <th>Number of People</th>
                        <th>Food Items</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.type}</td>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{new Date(order.orderTime).toLocaleString()}</td>
                            <td className={`order-status ${order.status.toLowerCase().replace(/ /g, '-')}`}>{order.status}</td>
                            <td className={`payment-status ${order.paymentStatus.toLowerCase().replace(/ /g, '-')}`}>{order.paymentStatus}</td>
                            <td>{order.type === 'Dine-In' || order.type === 'Table Reservation' ? order.numPeople : '-'}</td>
                            <td>
                                <ul>
                                    {order.foodItems.map(item => (
                                        <li key={item.id}>
                                            {foodItems[item.id].name} x{item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>Rs {order.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;
