export default defineEventHandler((event) => {
    console.log('cookie', getCookie(event, 'name'))
    return getRouterParams(event)
})
