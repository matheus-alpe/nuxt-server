const router = createRouter()

router.get('/test', defineEventHandler((event) => {
    return { message: 'GET: test nested route' }
}))

router.post('/test', defineEventHandler((event) => {
    return { message: 'POST: test nested route' }
}))

router.put('/test', defineEventHandler((event) => {
    return { message: 'PUT: test nested route' }
}))

router.delete('/test', defineEventHandler((event) => {
    return { message: 'DELETE: test nested route' }
}))

router.get('/test/category', defineEventHandler((event) => {
    return { message: 'GET: test category nested route' }
}))

export default useBase('/api/nested', router.handler)
