import { createUser } from '../database/repositories/userRepository';
export default defineEventHandler(async (e) => {
  const {email, name} = await readBody(e);
  if (!email || !name) {
    return sendError(e, createError('Email is required'));
  }
  try {
    await createUser({email, name});
  } catch (e) {
    console.log(e);
    return sendError(e, createError('Failed to retrieve data!'))
  }
})