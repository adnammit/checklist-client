// TODO why is any string still allowed?
// also get this from the db

export type Category =
    | 'Produce'
    | 'Frozen'
    | 'Dairy'
    | 'Deli'
    | 'Canned Goods'
    | 'Breakfast'
    | 'Beverage'
    | 'Bakery'
    | 'Snacks'
    | 'Condiments'
    | 'Nuts and Grains'
    | 'Other' // TODO or undefined?
// | string; // custom strings

export const categories: Category[] = [
    'Produce',
    'Frozen',
    'Dairy',
    'Deli',
    'Canned Goods',
    'Breakfast',
    'Beverage',
    'Bakery',
    'Snacks',
    'Condiments',
    'Nuts and Grains',
    'Other',
]
