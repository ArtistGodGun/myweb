'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4cfa4578a54ba22fc8b09540f595d2a8",
"index.html": "65910f8992aaa23871613dbb6fd2f15e",
"/": "65910f8992aaa23871613dbb6fd2f15e",
"main.dart.js": "ec8b918dfb0a0be02ee6e8bdde5f8866",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"readme.md": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a2aa2d73ba288c1a0d875026fb596f3",
".git/config": "2c8f0e5665bf64f6433f3b101a80c15f",
".git/objects/61/2b7b2dd5652441e215f5779202f0deda23d0a4": "40be14f33098812a2373cbd7f4f8e1a2",
".git/objects/9e/65f6f584e1673b8e44031b3572706cd7b64055": "2251a855156a4503c972f48db8f11c03",
".git/objects/69/af057f29188977a6e854e0b643e410d0d44588": "5fa924a3109137152e38b1743c5523ea",
".git/objects/5a/bbf5c3244f66451f40fd44be2b3eebc53a6dec": "cef45271cae84824a128baa7815dfef4",
".git/objects/05/4b3bdd8273790c5d69b4c0e835c9600efefcc4": "34072114ccc7fa18f97d557496588076",
".git/objects/9d/5bb21618e51f0d5c028b54317531edd3dd21a6": "eec2c89219880f18c0c32ce25563893d",
".git/objects/b5/9205d07b528735ca9aa6833a0a0a36dca029fb": "b2aa56ff9403aed19af373e8fc76843e",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/da/7b5acbed32c2c05409dfc4bacec1902d96462d": "0e5ea0eee2490b5cec87bcb4b556b426",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0188a2c01ff99e6d09a474990dc06981e9ad64": "788a8db84669793e87097b6cd16df5e8",
".git/objects/d8/5b66c54e737e66aad53a6a1670c1bd57ef97bb": "3a387cc4ab86cec5e6a5ed4ccdba45ff",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/09d765d86ef23c11209e1a430464011b2e55ca": "875c06d823f1e3a086c603ed56f29950",
".git/objects/e4/219c90fee1e01c81aa996e7b4620ef450dfb2d": "1ca90212b31d86225080efa8749d72b6",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/73/7b05dfbc88f6dd5f66ed09b27dcc7b7c9a978a": "418b643dd68860a2f8785907a8b0a3bc",
".git/objects/80/052bb67004d32cd5fbea8e0b0db0f58ff6d03e": "034e5ab9f3cb1812c7424126beaec9ae",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/baa8949a7e6482b0e12e67d98585e798b6859d": "a9d4b08d338ddef104b0bf25e5653870",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/958d103dc8b7878f3ec430d555edd9254d6c2f": "cad5b2f7316838f79f8a162ae5ccf4f1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/06/4cd91e425453c48dec1d01f93479994066edef": "27db567f7c719141aa617315c52ad96d",
".git/objects/39/06003a10ba77843430ebbf5ddee3a3d6319ab8": "65c11ed299220d21fdc0435b8480fe55",
".git/objects/39/4d59b2de89c48d49e66e353e9fa2fe69aa68a4": "92049a91eea88f67aa6667cebc4a4175",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/d5c20f124c9169c5222d044a2957e6fdb0deab": "0d11683ab53e01a4176eb100f631dec5",
".git/objects/90/32bffff46004eaf0db8cb8b99cb06da27c75d2": "af20897f10eb6b42f20871c55608b3ac",
".git/objects/aa/163f8e0d2de504d99d86272673a388aedac646": "5a18a34fc9baddbde8966f691e210e42",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ce/b769ab75629221fde617fea3b75d8690d115a3": "3f0ebc8fdcc2c80ecaf39e4580a504ea",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/ff378d333b0481959710e1007c4fb906a1950c": "3f37625cb07a81e01945442082dc2df5",
".git/objects/1d/7d53ff2d730db47f7452f05e8de1a9659eb62e": "908f0b30dd18c03cd73865b9213134ac",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca7ea9953ff1d3103d6a16c57436f34d",
".git/logs/refs/heads/main": "ca7ea9953ff1d3103d6a16c57436f34d",
".git/logs/refs/remotes/origin/HEAD": "a0bd99c07cbc5e058aa008982272a887",
".git/logs/refs/remotes/origin/main": "e35431b068b5b23e66925d86d5b3d187",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "24892a9fef1c794153d0bcba9caa33d2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "24892a9fef1c794153d0bcba9caa33d2",
".git/index": "b090a3bc57e8b443bb09e86e8c3f7f69",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "ec455c22139cd9dec520d9ee5445df2a",
"assets/AssetManifest.json": "0716fef2972456270f06cda310a192e4",
"assets/NOTICES": "60bbe319fbf0fb12d7f779fc2b927d6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7dbd402766338f06661aa2f65d1647c4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Shaker.png": "461410784ca144b71d9ea1ce8bb65b99",
"assets/assets/ChordFinder.png": "e9c8101ddc530ae132611577d82e69e0",
"assets/assets/popix1.jpg": "2b34b31fd0cf498ce6a24fd703f97339",
"assets/assets/popix2.jpg": "af51f28239081b4c381660ba356e1276",
"assets/assets/popix3.jpg": "b54cb5f7dc0044b318bb352ea4e3195d",
"assets/assets/doctor1.jpg": "cbd1784d6004a34339135b547219afe7",
"assets/assets/doctor2.jpg": "2b98f0a714333a4f934c2411c12899aa",
"assets/assets/wave.png": "41f45c61affe6ccf5230d83dc782d222",
"assets/assets/doctor3.jpg": "5b09dcfc83e1d4dfa47110b822e0deea",
"assets/assets/DS.png": "df6d9e93d0d7dd102146e95a6d7e8940",
"assets/assets/midi.png": "5e352584e27f1988816a536b84d5f145",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
