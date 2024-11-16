import { FoodGroup } from './food-group';

export interface Food {
  id: string;
  name: string;
  foodGroup: FoodGroup;
}
