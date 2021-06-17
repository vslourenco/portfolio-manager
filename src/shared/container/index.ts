import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";
import { CategoriesRepositoy } from "../../modules/products/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepositoy
);
