'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('meals', [
            {
                id: 1,
                name: 'hamburger',
                category: 'burgers',
                price: 18
                
            },
            {
                id: 2,
                name: 'cheeseburger',
                category: 'burgers',
                price: 20
            },
              {
                id: 3,
                name: 'pulled pork',
                category: 'burgers',
                price: 25
            },
              {
                id: 4,
                name: 'double cheeseburger',
                category: 'burgers',
                price: 21.50
            },
              {
                id: 5,
                name: 'classic fries',
                category: 'fries',
                price: 12
            },
              {
                id: 6,
                name: 'bacon fries',
                category: 'fries',
                price: 16
            },
              {
                id: 7,
                name: 'water',
                category: 'drinks',
                price: 3
            },
              {
                id: 8,
                name: 'cola',
                category: 'drinks',
                price: 6
            },
              {
                id: 9,
                name: 'ice tea',
                category: 'drinks',
                price: 5
            },
              {
                id: 10,
                name: 'ice cream',
                category: 'desserts',
                price: 15
            },
              {
                id: 11,
                name: 'tiramisu',
                category: 'desserts',
                price: 20
            },
              {
                id: 12,
                name: 'cheesecake',
                category: 'desserts',
                price: 16.50
            }
            
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('meals', null, {});
    },
};