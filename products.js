// Four categories with six unique products each (24 products total).
const image = {
  leafy: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85',
  snake: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=900&q=85',
  peace: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85',
  hanging: 'https://images.unsplash.com/photo-1616690249213-3e4a7e8c3b4d?auto=format&fit=crop&w=900&q=85',
  rubber: 'https://images.unsplash.com/photo-1600411832986-5a4476c1b3b3?auto=format&fit=crop&w=900&q=85',
  jade: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85',
};

export const products = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Indoor Plants', price: 599, image: image.leafy, description: 'A statement plant with iconic split leaves.' },
  { id: 2, name: 'Snake Plant', category: 'Indoor Plants', price: 399, image: image.snake, description: 'Low-maintenance greenery for any corner.' },
  { id: 3, name: 'Rubber Plant', category: 'Indoor Plants', price: 699, image: image.rubber, description: 'Glossy leaves with a bold, modern look.' },
  { id: 4, name: 'Areca Palm', category: 'Indoor Plants', price: 799, image: image.leafy, description: 'Soft tropical fronds for a calm atmosphere.' },
  { id: 5, name: 'ZZ Plant', category: 'Indoor Plants', price: 549, image: image.snake, description: 'A resilient favourite for busy plant parents.' },
  { id: 6, name: 'Parlour Palm', category: 'Indoor Plants', price: 449, image: image.rubber, description: 'A graceful palm for cosy indoor spaces.' },

  { id: 7, name: 'Peace Lily', category: 'Flowering Plants', price: 499, image: image.peace, description: 'Elegant leaves and beautiful white blooms.' },
  { id: 8, name: 'Anthurium', category: 'Flowering Plants', price: 649, image: image.peace, description: 'Bright glossy blooms add a tropical accent.' },
  { id: 9, name: 'African Violet', category: 'Flowering Plants', price: 299, image: image.jade, description: 'Compact flowering colour for a bright sill.' },
  { id: 10, name: 'Kalanchoe', category: 'Flowering Plants', price: 279, image: image.jade, description: 'Cheerful clusters of long-lasting flowers.' },
  { id: 11, name: 'Orchid', category: 'Flowering Plants', price: 899, image: image.peace, description: 'An elegant bloom for a thoughtful display.' },
  { id: 12, name: 'Bromeliad', category: 'Flowering Plants', price: 749, image: image.leafy, description: 'A sculptural tropical plant with vivid colour.' },

  { id: 13, name: 'Golden Pothos', category: 'Hanging Plants', price: 299, image: image.hanging, description: 'Trailing vines that bring life to shelves.' },
  { id: 14, name: 'Heartleaf Philodendron', category: 'Hanging Plants', price: 349, image: image.hanging, description: 'Heart-shaped leaves for a cascading display.' },
  { id: 15, name: 'String of Pearls', category: 'Hanging Plants', price: 399, image: image.jade, description: 'Bead-like foliage that spills over the pot.' },
  { id: 16, name: 'English Ivy', category: 'Hanging Plants', price: 279, image: image.hanging, description: 'Classic trailing greenery for hanging baskets.' },
  { id: 17, name: 'Spider Plant', category: 'Hanging Plants', price: 329, image: image.leafy, description: 'Arching leaves and baby plantlets.' },
  { id: 18, name: 'Dischidia', category: 'Hanging Plants', price: 429, image: image.hanging, description: 'A distinctive trailing plant for bright rooms.' },

  { id: 19, name: 'Jade Plant', category: 'Succulents', price: 249, image: image.jade, description: 'A compact succulent made for sunny spots.' },
  { id: 20, name: 'Aloe Vera', category: 'Succulents', price: 199, image: image.jade, description: 'A hardy, sculptural plant for bright rooms.' },
  { id: 21, name: 'Echeveria', category: 'Succulents', price: 229, image: image.jade, description: 'A rosette-shaped succulent with soft tones.' },
  { id: 22, name: 'Haworthia', category: 'Succulents', price: 219, image: image.snake, description: 'A compact textured succulent for a desk.' },
  { id: 23, name: 'Burro’s Tail', category: 'Succulents', price: 379, image: image.hanging, description: 'Plump leaves trail elegantly from a pot.' },
  { id: 24, name: 'Zebra Cactus', category: 'Succulents', price: 259, image: image.snake, description: 'Striking striped leaves in a small footprint.' },
];
