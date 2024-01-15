export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id) as number;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      message: 'ID 应该是一个整数'
    })
  }
  return 'ok'
})