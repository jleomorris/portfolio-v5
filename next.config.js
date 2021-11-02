const path = require('path');

module.exports = {
  images: {
    domains: ['image.freepik.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
