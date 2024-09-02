import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [itemSchema],
    amount: { type: Number, required: true },
    address: { type: Object },
    orderType: { type: String, required: true },
    dineInInfo: { type: Object },
    reservationInfo: { type: Object },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now },
    payment: { type: Boolean, default: false }
}, { timestamps: true }); // Adding timestamps for createdAt and updatedAt

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;

