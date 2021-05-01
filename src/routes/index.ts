import { Router } from "express";

import { categoriesRoutes } from "./categoriesRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);

export { router };
