
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['vTyRkW8rMrACWYPmYeSnDb'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  