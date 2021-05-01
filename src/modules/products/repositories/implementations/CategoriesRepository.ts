import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoy implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepositoy;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepositoy {
    if (!CategoriesRepositoy.INSTANCE) {
      CategoriesRepositoy.INSTANCE = new CategoriesRepositoy();
    }

    return CategoriesRepositoy.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(
      (category) => category.name.toUpperCase() === name.toUpperCase()
    );

    return category;
  }
}

export { CategoriesRepositoy };
