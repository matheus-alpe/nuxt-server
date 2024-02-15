export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        // console.log('render:html', html);
        html.bodyAppend.push('<hr>Appended by custom plugin');
    })

    nitroApp.hooks.hook('render:response', (response, { event }) => {
        console.log(event.node.req.headers['user-agent'])
    })
})
