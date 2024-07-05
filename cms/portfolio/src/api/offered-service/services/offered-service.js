'use strict';

/**
 * offered-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offered-service.offered-service');
