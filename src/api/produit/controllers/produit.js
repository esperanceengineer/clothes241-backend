'use strict';

/**
 * produit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::produit.produit',({strapi}) => ({
    async find(ctx) {
        try {
            const entries = await strapi.entityService.findMany('api::produit.produit', {
                populate: ['images','category','boutique'],
                start: 0,
                limit: 3,
            });
            return entries;
            
        } catch (err) {
            ctx.body = err;
        }
      },
      async findOne(ctx) {
        try {
            const { id } = ctx.params;
            const entry = await strapi.entityService.findOne('api::produit.produit', id, {
                populate: ['images','category','boutique','comments'],
              });
            // some more logic
          
            return entry;
            
        } catch (err) {
            ctx.body = err;
        }
      } 
}));
