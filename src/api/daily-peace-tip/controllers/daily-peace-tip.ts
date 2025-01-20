/**
 * daily-peace-tip controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::daily-peace-tip.daily-peace-tip', ({strapi}) => ({
  async findById(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::daily-peace-tip.daily-peace-tip').findOne({
      where: { id },
    });
    
    if (!entity) {
      return ctx.notFound('Daily peace tip not found');
    }
    
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async getTotal(ctx) {
    const count = await strapi.db.query('api::daily-peace-tip.daily-peace-tip').count();
    return {
      data: {
        total: count
      }
    };
  },

  async getFields(ctx) {
    console.log('Query parameters:', ctx.query);
    const { fields } = ctx.query;
    
    // Validate if fields parameter exists
    if (!fields || typeof fields !== 'string') {
      return ctx.badRequest('Fields parameter is required and must be a string (e.g. ?fields=title,content)');
    }

    // Convert fields string to array and ensure we always include id
    const selectedFields = ['id', ...fields.split(',').map(field => field.trim())];
    
    console.log('Selected fields:', selectedFields);

    try {
      const entities = await strapi.db.query('api::daily-peace-tip.daily-peace-tip').findMany({
        select: selectedFields,
      });

      console.log('Found entities:', entities);

      if (!entities || entities.length === 0) {
        return ctx.notFound('No records found');
      }

      const sanitizedEntities = await Promise.all(
        entities.map(entity => this.sanitizeOutput(entity, ctx))
      );

      return this.transformResponse(sanitizedEntities);
    } catch (error) {
      console.error('Error in getFields:', error);
      return ctx.badRequest(`Error fetching fields: ${error.message}`);
    }
  },

  async findOneWithFields(ctx) {
    const { id } = ctx.params;
    const { fields } = ctx.query;

    // Validate parameters
    if (!id) {
      return ctx.badRequest('ID parameter is required');
    }

    if (!fields || typeof fields !== 'string') {
      return ctx.badRequest('Fields parameter is required and must be a string (e.g. ?fields=title,content)');
    }

    // Convert fields string to array and ensure we always include id
    const selectedFields = ['id', ...fields.split(',').map(field => field.trim())];

    try {
      const entity = await strapi.db.query('api::daily-peace-tip.daily-peace-tip').findOne({
        select: selectedFields,
        where: { id },
      });

      if (!entity) {
        return ctx.notFound('Record not found');
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      console.error('Error in findOneWithFields:', error);
      return ctx.badRequest(`Error fetching record: ${error.message}`);
    }
  }
}));
