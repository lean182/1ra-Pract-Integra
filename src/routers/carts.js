import { Router } from "express";
import {
  addProductInCart,
  createCart,
  getCartById,
} from "../dao/controllers/carts.js";

const router = Router();

router.get("/:cid", getCartById);
router.post("/", createCart);
router.post("/:cid/product/:pid", addProductInCart);

export default router;
