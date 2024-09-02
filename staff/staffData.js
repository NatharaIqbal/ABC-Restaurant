export const dummyOrders = [
    {
        id: '1',
        type: 'Dine-In',
        address: '123 Main St, City, Country',
        name: 'John Doe',
        orderTime: '2024-09-01T12:30:00Z',
        status: 'Completed',
        paymentStatus: 'Paid',
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
