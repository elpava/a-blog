const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "variables.scss" as v;@use "mixins.scss" as m;@use "utils.scss";`,
  },
};
