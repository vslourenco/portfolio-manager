import { CategoriesRepositoy } from "../../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRespository = CategoriesRepositoy.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRespository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
