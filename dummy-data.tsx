// Dummy Datas

import {icons, images} from './constants';
import {CategoryData, CurrentLocation, Restaurant} from './types';

export const initialCurrentLocation: CurrentLocation = {
  streetName: 'Mile End Rd, London',
  gps: {
    latitude: 51.5218702,
    longitude: -0.04962302,
  },
};

export const categoryData: CategoryData[] = [
  {
    id: 1,
    name: 'All',
    icon: icons.all,
  },
  {
    id: 2,
    name: 'Rice',
    icon: icons.rice_bowl,
  },
  {
    id: 3,
    name: 'Noodles',
    icon: icons.noodle,
  },
  {
    id: 4,
    name: 'Hot Dogs',
    icon: icons.hotdog,
  },
  {
    id: 5,
    name: 'Salads',
    icon: icons.salad,
  },
  {
    id: 6,
    name: 'Burgers',
    icon: icons.hamburger,
  },
  {
    id: 7,
    name: 'Pizza',
    icon: icons.pizza,
  },
  {
    id: 8,
    name: 'Snacks',
    icon: icons.fries,
  },
  {
    id: 9,
    name: 'Sushi',
    icon: icons.sushi,
  },
  {
    id: 10,
    name: 'Desserts',
    icon: icons.donut,
  },
  {
    id: 11,
    name: 'Drinks',
    icon: icons.drink,
  },
];

// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;

export const restaurantData: Restaurant[] = [
  {
    id: 1,
    name: 'Burger',
    isLiked: false,
    rating: 4.8,
    categories: [1, 5, 7],
    priceRating: affordable,
    photo: images.burger_restaurant_1,
    duration: '30 - 45 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
    chefDetail: {
      avatar: images.chef_1,
      name: 'Chef-Joel-Robuchon',
      address: '424 E. 2nd St., Los Angeles, (213) 229-8200',
      review: 'Medium',
      time: '40 MIN',
    },
    menu: [
      {
        menuId: 1,
        name: 'Crispy Chicken Burger',
        photo: images.crispy_chicken_burger,
        description: 'Burger with crispy chicken, cheese and lettuce',
        calories: 200,
        price: 10,
      },
      {
        menuId: 2,
        name: 'Crispy Chicken Burger with Honey Mustard',
        photo: images.honey_mustard_chicken_burger,
        description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
        calories: 250,
        price: 15,
      },
      {
        menuId: 3,
        name: 'Crispy Baked French Fries',
        photo: images.baked_fries,
        description: 'Crispy Baked French Fries',
        calories: 194,
        price: 8,
      },
    ],
  },
  {
    id: 2,
    name: 'Pizza',
    isLiked: false,
    rating: 4.8,
    categories: [1, 2, 4],
    priceRating: expensive,
    photo: images.pizza_restaurant,
    duration: '15 - 20 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Jackson',
    },
    chefDetail: {
      avatar: images.chef_2,
      name: 'Chef-Alain-Ducasse',
      address: '340 Pleasant Valley Road, Port Hueneme, CA 93041-2746',
      review: 'Low',
      time: '30 MIN',
    },
    menu: [
      {
        menuId: 4,
        name: 'Hawaiian Pizza',
        photo: images.hawaiian_pizza,
        description: 'Canadian bacon, homemade pizza crust, pizza sauce',
        calories: 250,
        price: 15,
      },
      {
        menuId: 5,
        name: 'Tomato & Basil Pizza',
        photo: images.pizza,
        description:
          'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
        calories: 250,
        price: 20,
      },
      {
        menuId: 6,
        name: 'Tomato Pasta',
        photo: images.tomato_pasta,
        description: 'Pasta with fresh tomatoes',
        calories: 100,
        price: 10,
      },
      {
        menuId: 7,
        name: 'Mediterranean Chopped Salad ',
        photo: images.salad,
        description: 'Finely chopped lettuce, tomatoes, cucumbers',
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'Hotdogs',
    isLiked: false,
    rating: 4.8,
    categories: [1, 2, 3],
    priceRating: expensive,
    photo: images.hot_dog_restaurant,
    duration: '20 - 25 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    chefDetail: {
      avatar: images.chef_3,
      name: 'Chef-Gordon-Ramsay',
      address: '1500 S Oxnard Blvd, Oxnard, Port Hueneme, CA 93041-2746',
      review: 'High',
      time: '20 MIN',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicago_hot_dog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Sushi',
    isLiked: false,
    rating: 4.8,
    categories: [1, 8, 6],
    priceRating: expensive,
    photo: images.japanese_restaurant,
    duration: '10 - 15 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    chefDetail: {
      avatar: images.chef_4,
      name: 'Chef-Pierre-Gagnaire',
      address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
      review: 'High',
      time: '15 MIN',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: images.sushi,
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    id: 5,
    name: 'Cuisine',
    isLiked: false,
    rating: 4.8,
    categories: [1, 2, 5],
    priceRating: affordable,
    photo: images.noodle_shop,
    duration: '15 - 20 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Muthu',
    },
    chefDetail: {
      avatar: images.chef_5,
      name: 'Chef-Martin-Berasategui',
      address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
      review: 'Low',
      time: '35 MIN',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: images.kolo_mee,
        description: 'Noodles with char siu',
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: images.sarawak_laksa,
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: images.nasi_lemak,
        description: 'A traditional Malay rice dish',
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: 'Nasi Briyani with Mutton',
        photo: images.nasi_briyani_mutton,
        description: 'A traditional Indian rice dish with mutton',
        calories: 300,
        price: 8,
      },
    ],
  },
  {
    id: 6,
    name: 'Desert',
    isLiked: false,
    rating: 4.9,
    categories: [1, 9, 10],
    priceRating: affordable,
    photo: images.kek_lapis_shop,
    duration: '35 - 40 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Jessie',
    },
    chefDetail: {
      avatar: images.chef_6,
      name: 'Chef-Yannick-Alleno',
      address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
      review: 'Medium',
      time: '22 MIN',
    },
    menu: [
      {
        menuId: 12,
        name: 'Teh C Peng',
        photo: images.teh_c_peng,
        description: 'Three Layer Teh C Peng',
        calories: 100,
        price: 2,
      },
      {
        menuId: 13,
        name: 'ABC Ice Kacang',
        photo: images.ice_kacang,
        description: 'Shaved Ice with red beans',
        calories: 100,
        price: 3,
      },
      {
        menuId: 14,
        name: 'Kek Lapis',
        photo: images.kek_lapis,
        description: 'Layer cakes',
        calories: 300,
        price: 20,
      },
    ],
  },
  {
    id: 7,
    name: 'Hotdogs',
    isLiked: false,
    rating: 4.8,
    categories: [1, 3, 7],
    priceRating: expensive,
    photo: images.hot_dog_restaurant,
    duration: '20 - 25 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    chefDetail: {
      avatar: images.chef_7,
      name: 'Chef-Yannick-Alleno',
      address: '1500 S Bilvard Blvd, Oxnard, Port Hueneme, CA 25874-28471',
      review: 'Low',
      time: '32 MIN',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicago_hot_dog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 8,
    name: 'Sushi',
    isLiked: false,
    rating: 4.8,
    categories: [1, 9, 10],
    priceRating: expensive,
    photo: images.japanese_restaurant,
    duration: '10 - 15 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    chefDetail: {
      avatar: images.chef_8,
      name: 'Chef-Yannick-Alleno',
      address: '147 WA Yelboard , Port Yard, Port Hueneme, CA 93041-28471',
      review: 'Medium',
      time: '17 MIN',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: images.sushi,
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    id: 9,
    name: 'Hotdogs',
    isLiked: false,
    rating: 4.8,
    categories: [1, 2, 3],
    priceRating: expensive,
    photo: images.hot_dog_restaurant,
    duration: '20 - 25 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    chefDetail: {
      avatar: images.chef_9,
      name: 'Chef-Yannick-Alleno',
      address:
        '147 West Irland Blvd, Main City, Port Hueneme, California 87452-28471',
      review: 'Low',
      time: '41 MIN',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicago_hot_dog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 10,
    name: 'Cuisine',
    isLiked: false,
    rating: 4.8,
    categories: [6, 11],
    priceRating: affordable,
    photo: images.noodle_shop,
    duration: '15 - 20 min',
    location: {
      latitude: 51.55337,
      longitude: -0.04927,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Muthu',
    },
    chefDetail: {
      avatar: images.chef_6,
      name: 'Chef-Yannick-Alleno',
      address: '254 East Irland Blvd, Main City, Washington, W.C 65418-57899',
      review: 'Good',
      time: '26 MIN',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: images.kolo_mee,
        description: 'Noodles with char siu',
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: images.sarawak_laksa,
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: images.nasi_lemak,
        description: 'A traditional Malay rice dish',
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: 'Nasi Briyani with Mutton',
        photo: images.nasi_briyani_mutton,
        description: 'A traditional Indian rice dish with mutton',
        calories: 300,
        price: 8,
      },
    ],
  },
];

export const categoriesMap: {[key: number]: string} = categoryData.reduce(
  (categoryMap, category: CategoryData) =>
    (categoryMap = {...categoryMap, [category.id]: category.name}),
  {},
);

export const restaurantsWithCategories: Restaurant[] = restaurantData.map(
  (restaurant) => ({
    ...restaurant,
    categoryNames: restaurant.categories.map(
      (category: number) => categoriesMap[category],
    ),
  }),
);
