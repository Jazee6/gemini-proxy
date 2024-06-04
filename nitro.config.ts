//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'vercel_edge',
    vercel: {
        regions: ["hkg1", "sin1", "syd1"]
    },
    // routeRules: {
    //     '/**': {
    //         proxy: 'https://generativelanguage.googleapis.com/**'
    //     }
    // }
})
