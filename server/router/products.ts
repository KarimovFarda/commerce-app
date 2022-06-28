import Products from '../models/products'
import cors from 'cors';
import express, { Request, Response } from 'express';
import { IProducts } from '../Interface/types';
export const productsRouter = express.Router();
productsRouter.use(cors());
productsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

productsRouter.post("/", async (req: Request, res: Response) => {
    const productsPayload: IProducts = {
        ...req.body
    }
    const products = new Products(productsPayload);
    try {
        const newProducts = await products.save();
        res.status(200).json(newProducts);

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

productsRouter.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let products = await Products.findById(id);
        if (!products) {
            res.status(404).json({ message: "Not Found" })
        } else {
            await Products.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            products = await Products.findById(id);
            res.json(products);
        }

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})


productsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const products = await Products.findById(id);
        if (!products) {
            res.status(404).json({ message: "Not Tryed" });
        } else {
            await products.remove();
            res.json({ message: "Product Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

export default productsRouter