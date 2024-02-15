export default defineEventHandler((event) => {
    const authorization = getRequestHeader(event, 'authorization')
    event.context.authorized = Boolean(authorization)
})
