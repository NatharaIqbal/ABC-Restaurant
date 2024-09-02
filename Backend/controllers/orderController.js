import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Controller to get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find(); // Use orderModel instead of Order
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};

// Controller to place an order
export const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      dineInInfo: req.body.dineInInfo,
      reservationInfo: req.body.reservationInfo,
      orderType: req.body.orderType
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({
      success: true,
      message: "Order placed successfully"
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place the order" });
  }
};

// Controller to verify an order
export const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      // Update order status or perform any action on successful verification
      const order = await orderModel.findByIdAndUpdate(orderId, { status: "Verified" });
      res.json({ success: true, message: "Order verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Verification failed" });
    }
  } catch (error) {
    console.error("Error verifying order:", error);
    res.status(500).json({ error: "Failed to verify the order" });
  }
};

// Controller to get orders specific to a user
export const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log('Fetching orders for userId:', userId); // Log the userId

    if (!userId) {
      console.log('No userId provided');
      return res.status(400).json({ success: false, message: "UserId is required" });
    }

    const orders = await orderModel.find({ userId });
    console.log('Orders found:', orders); // Log the retrieved orders
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error('Error fetching user orders:', error.message); // Log the error message
    res.status(500).json({ success: false, message: "Error fetching user orders" });
  }
};