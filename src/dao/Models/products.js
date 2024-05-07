import { Schema, model } from "mongoose";

const nameCollection = "Products";

const ProductoSchema = new Schema({
  title: {
    type: String,
    required: [true, "El title del producto es obligatorio"],
  },

  description: {
    type: String,
    required: [true, "El description del producto es obligatorio"],
  },

  code: {
    type: String,
    required: [true, "El code del producto es obligatorio"],
    unique: true,
  },

  category: {
    type: String,
    required: [true, "El category del producto es obligatorio"],
  },

  price: {
    type: Number,
    required: [true, "El price del producto es obligatorio"],
  },

  stock: {
    type: Number,
    required: [true, "El stock del producto es obligatorio"],
  },

  status: {
    type: Boolean,
    default: [true, "El status del producto es obligatorio"],
  },

  thumbnails: [{ type: String }],
});

ProductoSchema.set('toJSON', {
  transform: function(doc,ret){
    delete ret.__v;
    return ret;
  }
})

export const productModel = model(nameCollection, ProductoSchema);
