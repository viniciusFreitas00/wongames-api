"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: (ctx) => {
    console.log("Start to populate...");

    console.log(ctx.query);

    ctx.send("Finished populate!");
  },
};
