//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'vercel_edge',
    vercel: {
        regions: ["syd1" ,"sfo1", "iad1", "pdx1", "cle1"]
    },
    // routeRules: {
    //     '/**': {
    //         proxy: 'https://generativelanguage.googleapis.com/**'
    //     }
    // }
})
