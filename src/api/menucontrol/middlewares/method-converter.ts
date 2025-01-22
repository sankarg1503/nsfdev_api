/**
 * Method converter middleware
 * Allows both GET and POST methods to access the same controller actions
 */

export default () => {
  return async (ctx, next) => {
    // If it's a POST request, merge body into query
    if (ctx.request.method === 'POST') {
      ctx.query = {
        ...ctx.query,
        ...ctx.request.body
      };
    }
    await next();
  };
};
