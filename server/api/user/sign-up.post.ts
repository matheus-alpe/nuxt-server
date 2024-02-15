interface Body {
    name: string
    lastName: string
    email: string
    password: string
}

export default defineEventHandler<{ body: Body }>(async (event) => {
    const files = await readMultipartFormData(event)
    const formdata = await readFormData(event)
    console.log(formdata)
    return { files: files?.map(file => file.filename) }
})
