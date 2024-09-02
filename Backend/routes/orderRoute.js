import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder, getAllOrders, userOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.get("/orders", authMiddleware, getAllOrders);
orderRouter.post("/userorders", authMiddleware, userOrders);

export default orderRouter;