'use strict';

/**
 * payement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payement.payement');
