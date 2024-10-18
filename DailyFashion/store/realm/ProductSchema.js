export const ProductSchema = {
  name: 'Product',
  properties: {
    id: 'int',
    productName: 'string',
    imagePath: 'string',
    category: 'int',
    description: 'string',
    price: 'int',
    link: 'string',
    facebook: 'string',
    phoneNumber: 'string',
  },
  primaryKey: 'id',
};
