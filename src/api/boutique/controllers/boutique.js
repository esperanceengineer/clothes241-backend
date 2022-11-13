'use strict';

/**
 * boutique controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::boutique.boutique',({strapi}) => ({
    async find(ctx) {
        try {
            const entries = await strapi.entityService.findMany('api::boutique.boutique', {
                populate: ['logo']
            });
            return entries;
            
        } catch (err) {
            ctx.body = err;
        }
      },
    async findOne(ctx) {
      try {
          const { id } = ctx.params;
          const entry = await strapi.entityService.findOne('api::boutique.boutique', id, {
              populate: ['logo','produits'],
            });
          // some more logic
        
          return entry;
          
      } catch (err) {
          ctx.body = err;
      }
    } 
}));

