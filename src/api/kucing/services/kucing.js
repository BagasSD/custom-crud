'use strict';

/**
 * kucing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kucing.kucing');
