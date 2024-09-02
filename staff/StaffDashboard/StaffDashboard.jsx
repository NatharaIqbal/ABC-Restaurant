import React from 'react';
import './StaffDashboard.css';
import { dummyOrders } from './staffData';

const StaffDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Staff Dashboard</h1>
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
                            <td className={`status ${order.status.toLowerCase().replace(/ /g, '-')}`}>{order.status}</td>
                            <td className={`payment ${order.paymentStatus.toLowerCase().replace(/ /g, '-')}`}>{order.paymentStatus}</td>
                            <td>Rs {order.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffDashboard;
