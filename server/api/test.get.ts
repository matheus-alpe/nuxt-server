export default defineEventHandler((event) => {
    if (!event.context.authorized) {
        return createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }

    setCookie(event, 'name', 'Matt', { httpOnly: true })
    return { message: 'Hello world' }
})
