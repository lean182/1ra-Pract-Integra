import { Router } from 'express';
import { productModel } from '../dao/models/products.js';

const router = Router();

router.get('/', async (req, res) => {
   const productos = await productModel.find().lean();
   return res.render('home', { productos, style: 'style.css', title: 'Home' });
});

router.get('/realtimeproducts', (req, res) => {
   return res.render('realTimeProducts', { style: 'style.css', title: 'Real Time' });
});

router.get('/chat', (req, res) => {
   return res.render('chat', { style: 'chat.css', title: 'Chat' });
});

export default router;
