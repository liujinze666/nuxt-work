import type {H3Event} from 'h3'
export default defineEventHandler((event) => {
  console.log('服务中间件', protectAuthRoute(event), event.path);
  if (!protectAuthRoute(event)) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    }))
  }
})

function protectAuthRoute(event: H3Event) {
  let protectRoute = ["/api/detail"]
  // startsWith 判断字符开头
  if (!event?.path || !protectRoute.some(route => event.path?.startsWith(route))) {
    return true
  }
  
  return authCheck(event);
}

function authCheck(event: H3Event) {
  const token = getHeader(event, 'token');
  if (!token) {
    return false;
  }
  return true;
}