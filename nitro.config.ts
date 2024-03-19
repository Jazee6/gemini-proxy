//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'vercel_edge',
    vercel: {
        regions: ["cle1", "iad1", "pdx1", "sfo1", "sin1", "syd1", "hnd1", "kix1"]
    },
    // routeRules: {
    //     '/**': {
    //         proxy: 'https://generativelanguage.googleapis.com/**'
    //     }
    // }
})
