export type DishCategories =
  | 'appetizer'
  | 'dinner'
  | 'salads'
  | 'dessers'
  | 'drinks';

export interface Dish {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  img: string;
  price: number;
  category: DishCategories;
  amount: number;
}
