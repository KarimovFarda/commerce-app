import Favourites from '../models/favourites'
import cors from 'cors';
import express, { Request, Response } from 'express';
import { IFavouriteProducts } from '../Interface/types';
export const favouritesRouter = express.Router();
favouritesRouter.use(cors());
favouritesRouter.get("/", async (req: Request, res: Response) => {
    try {
        const favourites = await Favourites.find();
        res.status(200).json(favourites);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

favouritesRouter.post("/", async (req: Request, res: Response) => {
    const favouritesPayload: IFavouriteProducts = {
        ...req.body
    }
    const favourites = new Favourites(favouritesPayload);
    try {
        const newFavourites = await favourites.save();
        res.status(200).json(newFavourites);

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

favouritesRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const favourites = await Favourites.findById(id);
        if (!favourites) {
            res.status(404).json({ message: "Not Tryed" });
        } else {
            await favourites.remove();
            res.json({ message: "Favourite Product Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

export default favouritesRouter