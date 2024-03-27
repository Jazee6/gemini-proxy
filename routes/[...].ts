const PROXY_URL = 'https://generativelanguage.googleapis.com'

export default defineEventHandler(async event => {
    const url = getRequestURL(event)
    const headers = getRequestHeaders(event)
    const body = await readRawBody(event)
    const res = await fetch(PROXY_URL + url.pathname + url.search, {
        method: event.method,
        headers: headers,
        body,
    })
    return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
    })
})
