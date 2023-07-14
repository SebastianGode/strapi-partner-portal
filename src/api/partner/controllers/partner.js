'use strict';

/**
 * partner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::partner.partner', ({strapi}) => ({
    async findOne(context) {
        const partner_id = context.params.id

        const entity = await strapi.db.query('api::partner.partner').findOne({
            where: { partner_id }
        })

        const sanitizedEntity = await this.sanitizeOutput(entity)

        return this.transformResponse(sanitizedEntity)
    }
}));
