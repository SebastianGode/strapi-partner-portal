'use strict';

/**
 * website-asset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-asset.website-asset');
