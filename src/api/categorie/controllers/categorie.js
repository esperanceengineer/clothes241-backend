'use strict';

/**
 * categorie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::categorie.categorie',({strapi}) => ({
  async find(ctx) {
    try {
        const entries = await strapi.entityService.findMany('api::categorie.categorie', {
            populate: []
        });
        return entries;
        
    } catch (err) {
        ctx.body = err;
    }
  },
      async findOne(ctx) {
        try {
            const { id } = ctx.params;
            const entry = await strapi.entityService.findOne('api::categorie.categorie', id, {
                populate: ['produits'],
              });
            // some more logic
          
            return entry;
            
        } catch (err) {
            ctx.body = err;
        }
      } 
}));
