'use strict';

/**
 * marque controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::marque.marque',({strapi}) => ({
    async find(ctx) {
      try {
          const entries = await strapi.entityService.findMany('api::marque.marque', {
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
              const entry = await strapi.entityService.findOne('api::marque.marque', id, {
                  populate: ['boutiques'],
                });
              // some more logic
            
              return entry;
              
          } catch (err) {
              ctx.body = err;
          }
        } 
  }));
