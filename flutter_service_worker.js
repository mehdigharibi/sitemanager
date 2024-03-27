'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e2912798633ac6f990f7952cb05b6185",
"assets/AssetManifest.bin.json": "fe4209fbcbbc2f945d4d48f02a788e7c",
"assets/AssetManifest.json": "bd73d0064368e7b2b43174bf93e6005d",
"assets/assets/28267842_7.svg": "c3fe5198ad95f08cee7da6f6f06f3a41",
"assets/assets/atinad1493.zip": "1908479a2d5c33bb90d1a6dd07ba8d22",
"assets/assets/Code.GPT-Chat.&.AI.Agents.2.1.23_YasDL.com.rar": "4456158b8135e9140a1d6bb2ce7f0290",
"assets/assets/Contra.Operation.Galuga-ElAmigos_VGdl.ir.part1.rar": "3cb2e90087f79b6e36cd501339ece3d4",
"assets/assets/Contra.Operation.Galuga-ElAmigos_VGdl.ir.part2.rar": "0f9c3447d03fe727155e4c013bde82c6",
"assets/assets/Counter.Strike_1.6_SarzaminDownload.Servers.zip": "d53f4aef3b3be347515e0012397c1a0b",
"assets/assets/DiscordSetup.exe": "13a353f387115f4c2ddc79be7b41caab",
"assets/assets/fonts/Iranian%2520Sans.ttf": "e59513c82578df5dafb6b8da951be9b6",
"assets/assets/fonts/YekanBakh-Bold.woff": "5af1b7227c26e1c11be2ba90eb7de175",
"assets/assets/fonts/YekanBakh-Fat.woff": "d754d3ac3c749af4f320020e572d87e0",
"assets/assets/fonts/YekanBakh-Heavy.woff": "8a134330de8adfcda8af77ce085e8e3e",
"assets/assets/fonts/YekanBakh-Medium.woff": "c3ba42b16afab2085abc820e4c2f4ffb",
"assets/assets/image1.jfif": "a2084158623e8106044b3a56ed50b772",
"assets/assets/image2.jpg": "5492b4773b4fe351a792f6665b6e60f4",
"assets/assets/KMS.Activator.v3.rar": "4c841d2bfc6aef1ea69668c44141abd6",
"assets/assets/logo.svg": "f781babc65db3468fa0141cd6982a6c0",
"assets/assets/Microsoft.Activation.Scripts.v1.5_AsanDl.com.zip": "c8fc9256839233b6cf25c3fa7348c662",
"assets/assets/sXe.Injected_17.2.rar": "2ab543d076d0808ac3ced1b350751694",
"assets/assets/Update.Fixer.1.0.0.10_YasDL.com.rar": "d8a32ea31b6ef23d84ecbdf215a44ee2",
"assets/assets/UpdateFixer_Portable.exe": "3400f4f07c452659304e1ed284a4e001",
"assets/assets/windows10.0-kb5031358-x64_9a39c804178839969adb3511e753a94380227ebd.msu": "1cf484f177e9c6135277107afb7558db",
"assets/assets/Windows11.KB5035853.x64_p30download.com.rar": "abddcc103da198b5b07a5da4b76c0a08",
"assets/assets/wsl_update_x64.msi": "655e917f1182d65ae42a70eadaed8b88",
"assets/FontManifest.json": "3a934bcacfe20e14f1b695bde640a938",
"assets/fonts/MaterialIcons-Regular.otf": "209a80131a45f7982a22acd46a645cca",
"assets/NOTICES": "a37426446bb4e3981b5c20ab34d8d77b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6dc9a44939a6bc09124e6b3e64b31d23",
"/": "6dc9a44939a6bc09124e6b3e64b31d23",
"main.dart.js": "f0cee7384707fb1e82191c9069b8b055",
"manifest.json": "bc285c7f9ad95104a4ecbc34625222ce",
"version.json": "c4963cd4b439c1f024f79902555293ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
