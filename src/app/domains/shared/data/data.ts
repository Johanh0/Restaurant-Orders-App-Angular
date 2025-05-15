import { Dish, DishCategories } from '../models/dish.model';

export const dishes: Dish[] = [
  {
    id: crypto.randomUUID(),
    title: 'test',
    description: 'this is a test',
    img: '',
    price: 5.0,
    category: 'dinner',
    amount: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'other test',
    description: 'this is another test',
    img: '',
    price: 5.0,
    category: 'dessers',
    amount: 0,
  },
  {
    id: crypto.randomUUID(),
    title: 'testing',
    description: 'yeah, testing',
    img: '',
    price: 5.0,
    category: 'drinks',
    amount: 0,
  },
];

export const dishesCategories: DishCategories[] = [
  'appetizer',
  'dinner',
  'salads',
  'dessers',
  'drinks',
];
