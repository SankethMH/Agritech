import React, { useEffect, useState } from 'react';

const Account = () => {
    const [userdata, setUserdata] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:4001/orders', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('auth-token')
                    }
                });
                const data = await response.json();
                console.log(data)
                setOrders(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setLoading(false);
            }
        };

        fetchOrders();

        const userDataString = localStorage.getItem("userData");

        if (userDataString && userDataString !== "undefined") {
            setUserdata(JSON.parse(userDataString));
        }
    }, []);

    return (
        <div>
            <h1>Account Details</h1>
            <div className='account-details'>
                <p><strong>Name:</strong> {userdata?.name}</p>
                <p><strong>Email:</strong> {userdata?.email}</p>
                <p><strong>Phone Number:</strong> {userdata?.phone}</p>
                <p><strong>Address:</strong> {userdata?.address}</p>
            </div>
            <h2>Order History</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {(orders.length) > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{new Date(order.date).toLocaleString()}</td>
                                        <td>{order.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No orders found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Account;
