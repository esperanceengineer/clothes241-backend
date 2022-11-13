'use strict';

/**
 * profil controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::profil.profil',({strapi}) => ({
    async find(ctx) {
      try {
          const entries = await strapi.entityService.findMany('api::profil.profil', {
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
              const entry = await strapi.entityService.findOne('api::profil.profil', id, {
                  populate: [],
                });
              // some more logic
            
              return entry;
              
          } catch (err) {
              ctx.body = err;
          }
        } 
  }));
