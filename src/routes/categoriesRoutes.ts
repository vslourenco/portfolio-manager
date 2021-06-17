import { Router } from "express";

import { CreateCategoryController } from "../modules/products/useCases/category/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/products/useCases/category/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategories = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategories.handle);

export { categoriesRoutes };
