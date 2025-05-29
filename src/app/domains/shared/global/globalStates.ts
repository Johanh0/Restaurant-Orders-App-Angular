import { signal } from '@angular/core';
import { DishCategories, Dish } from '../models/dish.model';
import { dishes } from '../data/data';

export const currentCategoryState = signal<DishCategories>('dinner');

export const currentDishesState = signal<Dish[]>(dishes);

export const cartList = signal<Dish[]>([]);

export const cartTotal = signal<number>(0);

export const modalStatus = signal<boolean>(false);
