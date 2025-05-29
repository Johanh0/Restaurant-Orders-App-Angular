export type DishCategories =
  | 'appetizer'
  | 'dinner'
  | 'salad'
  | 'dessert'
  | 'drink';

export interface Dish {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  img: string;
  price: number;
  category: DishCategories;
  amount: number;
}
