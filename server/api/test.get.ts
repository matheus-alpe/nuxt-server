export default defineEventHandler((event) => {
    if (!event.context.authorized) {
        return createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }
    return { message: 'Hello world' }
})
