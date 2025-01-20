import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/daily-peace-tips/id/:id',
      handler: 'api::daily-peace-tip.daily-peace-tip.findById',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/daily-peace-tips/total',
      handler: 'api::daily-peace-tip.daily-peace-tip.getTotal',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/daily-peace-tips/fields',
      handler: 'api::daily-peace-tip.daily-peace-tip.getFields',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/daily-peace-tips/:id/fields',
      handler: 'api::daily-peace-tip.daily-peace-tip.findOneWithFields',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
