'use strict';
const { sanitize } = require('@strapi/utils');
//const {sanitizeEntity} = require('starpi-utils/lib');
//const finder = require('strapi-utils/lib/finder')
/**
 *  announcement controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::announcement.announcement');

/*
module.exports = {
    async find(ctx){
        const user = ctx.state
        let entities
        if(ctx.query._q){
            entities= await starpi.services.announcement.search({...ctx.query, user: user.id})
        }else{
            entities=await strapi.services.announcement.find({...ctx.query,user:user.id})
        }
          return entities.map(entity=> sanitizeEntity(entity,{model:strapi.models.announcement}))
    },
    async findOne(ctx){
        const {id} =ctx.params
        const {user}= ctx.state

        const entity = await strapi.services.announcement.findOne({id,user:user.id})
        return sanitizeEntity(entity,{model:strapi.models.announcement})
    }
}

*/
