importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03474536ae870a4656b3.js",
    "revision": "4f3f6b2e5642f22e679bbcef5e8549f4"
  },
  {
    "url": "/_nuxt/2c180fd45a66911208c1.js",
    "revision": "413769e19898cdd483023b370d7fe79e"
  },
  {
    "url": "/_nuxt/3a1f78ebb74a7aed9190.css",
    "revision": "c2e32f78737bc3489b1c67bd2e108635"
  },
  {
    "url": "/_nuxt/4828777bc4cf347c1c8c.js",
    "revision": "080d51d04acb70b1d2f640fe72052ecd"
  },
  {
    "url": "/_nuxt/53c8e37af2d78b5d96f7.js",
    "revision": "703e294fcefe579f77c11bcbb2e3683c"
  },
  {
    "url": "/_nuxt/578d907bbf5634eac4a8.js",
    "revision": "d88dce3269969a613d0b7ec1624aafbb"
  },
  {
    "url": "/_nuxt/6313669084332f1980c6.css",
    "revision": "fe12e3c14f616a65b800ba30141b3bf2"
  },
  {
    "url": "/_nuxt/74f323ae57f2ff6a810f.js",
    "revision": "43422083f3579489d1ecb949dba5af74"
  },
  {
    "url": "/_nuxt/77ba28436465c6a1c28b.css",
    "revision": "3e48d2367a607ce522a1557872b46c64"
  },
  {
    "url": "/_nuxt/7e03a2e5c6a29e094325.js",
    "revision": "03d7109e6f237419da9e0b8b5eaa76f0"
  },
  {
    "url": "/_nuxt/88ae573cde35ac7ed9f3.js",
    "revision": "ebf6fcae30bb33b09d6a98d5e5c27986"
  },
  {
    "url": "/_nuxt/a6e339de463517a62ec1.js",
    "revision": "84a3cc4162029212c2ec1150b7cf7888"
  },
  {
    "url": "/_nuxt/af172460a17f25e0dcbb.js",
    "revision": "5896f5b9e92995b902be04112802dc11"
  },
  {
    "url": "/_nuxt/b0e631dcb34cff0daf23.js",
    "revision": "e7446ae4f079ac4caa66298bf76659a4"
  },
  {
    "url": "/_nuxt/b3a08626133ae5ab139c.js",
    "revision": "5b22b2516fe0ad3dcd784da66610910c"
  },
  {
    "url": "/_nuxt/b5bfa412db1672394390.js",
    "revision": "a8cd949a7ad022744a5c5ef182dde0c7"
  },
  {
    "url": "/_nuxt/b95c722bd0b47156efad.js",
    "revision": "d8cbf1ce8b611d562bae25359e4d5ab1"
  },
  {
    "url": "/_nuxt/c2a4feb6dc95ecb68aca.js",
    "revision": "e1b70c40d46ed9bd295ee0a65229e7ba"
  },
  {
    "url": "/_nuxt/cbea078b77a6d484bfe8.js",
    "revision": "c479b37648e78497ad45907abaf6a1e6"
  },
  {
    "url": "/_nuxt/d461e21905e95270b4ba.js",
    "revision": "5bb98e120b2a4667ad76b608311d02b5"
  },
  {
    "url": "/_nuxt/e4f245b2baabd1da6aec.js",
    "revision": "f52ed5edff0597ac89e7c505f0f36925"
  },
  {
    "url": "/_nuxt/e6a1bcf2b2fd31f7f705.css",
    "revision": "a054d70519ebf3b5f3667d31e0344677"
  },
  {
    "url": "/_nuxt/e963a28732e3a744d677.js",
    "revision": "90637723460c89b7dca35cfafee8f2b7"
  },
  {
    "url": "/_nuxt/eab30138cd0deaae6072.js",
    "revision": "05f7b24fcdfe7aac2c734613f0340131"
  },
  {
    "url": "/_nuxt/f927bce6e97e6ca230e2.js",
    "revision": "e3caea8da157ccbdcdfd9bfd8cae20a5"
  }
], {
  "cacheId": "shiminger.com",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





