'use strict';

/**
 * client-company service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-company.client-company');
