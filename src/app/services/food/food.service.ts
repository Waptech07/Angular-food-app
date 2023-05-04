import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[] {
    return [
      {name: 'All', count: 12},
      {name: 'FastFood', count: 7},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 7},
      {name: 'SlowFood', count: 5},
      {name: 'Hamburger', count: 2},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 2},
      {name: 'Spaghetti', count: 2},
      {name: 'Chicken', count:2}
    ];
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Hamburger',
        cookTime: "10-15",
        price: 5,
        favorite : false,
        origins: ['germany','us'],
        star: 3.5,
        imageUrl: '/assets/Food-1.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch']
      },

      {
        id: 2,
        name: 'Spaghetti with Meatball',
        cookTime: "20-40",
        price: 15,
        favorite : true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/Food-2.jpg',
        tags: ['SlowFood', 'Spaghetti']
      },

      {
        id: 3,
        name: 'Meatball',
        cookTime: "20-30",
        price: 20,
        favorite : true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.5,
        imageUrl: '/assets/Food-3.jpg',
        tags: ['SlowFood']
      },

      {
        id: 4,
        name: 'Cheesy Pizza',
        cookTime: "15-20",
        price: 10,
        favorite : false,
        origins: ['italy', 'Hawaiian'],
        star: 4.0,
        imageUrl: '/assets/Food-4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },

      {
        id: 5,
        name: 'Cheesy Pizza Pepperoni',
        cookTime: "10-25",
        price: 11,
        favorite : false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/Food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },

      {
        id: 6,
        name: 'Fried Potatoes with Soup',
        cookTime: "15-20",
        price: 2,
        favorite : true,
        origins: ['belgium', 'france'],
        star: 3.5,
        imageUrl: '/assets/Food-6.jpg',
        tags: ['FastFood', 'Fry', 'Lunch']
      },

      {
        id: 7,
        name: 'Burger',
        cookTime: "10-15",
        price: 5,
        favorite : false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/Food-7.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch']
      },

      {
        id: 8,
        name: 'Vegetable Soup',
        cookTime: "40-50",
        price: 11,
        favorite : false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/Food-8.jpg',
        tags: ['SlowFood', 'Soup']
      },

      {
        id: 9,
        name: 'Chicken Soup',
        cookTime: "30-50",
        price: 12,
        favorite : false,
        origins: ['asia'],
        star: 3.5,
        imageUrl: '/assets/Food-9.jpg',
        tags: ['SlowFood', 'Soup']
      },

      {
        id: 10,
        name: 'Roasted Chicken',
        cookTime: "20-30",
        price: 10,
        favorite : true,
        origins: ['England', 'us'],
        star: 4.5,
        imageUrl: '/assets/Food-10.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch']
      },

      {
        id: 11,
        name: 'Fried Chicken',
        cookTime: "10-20",
        price: 10,
        favorite : false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/Food-11.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch']
      },

      {
        id: 12,
        name: 'Spaghetti with Garlic Sauce',
        cookTime: "30-50",
        price: 20,
        favorite : true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/Food-12.jpg',
        tags: ['SlowFood', 'Spaghetti']
      }
    ];
  }
}
