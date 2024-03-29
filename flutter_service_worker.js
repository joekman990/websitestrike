'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "33f4058c44d2d5cd2e7c9abaf7d98bc9",
"index.html": "58c3ec4d055fa2d24feee273421967b2",
"/": "58c3ec4d055fa2d24feee273421967b2",
"main.dart.js": "f6db3b5465c120ff11976a5d4604dfa7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "586ca9a390f92e0b69f5cadc290fccf1",
".git/config": "a0e8d5baf95eadbfec279970b930ada5",
".git/objects/57/2457f8a077c02277bc6f12192a0787ef6e2164": "e6aa77bbd5fef7c67e4866e5fca12ba2",
".git/objects/6f/19df8bf853f125aa6fe638a49117aa19f10450": "2090a8fc9b96c823db42a8d9e24e1088",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/da76c432f61a523f065a72bcf3684adc9769ab": "0aa980bda5dad85178ef8a8eecf4c078",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c43866d541be5db4611ce311a68ffe8199ead9": "fcf8198362233f95b36c64b3c4eabb91",
".git/objects/69/4504adc1d61f73318b4be9ed1e7f87bac75dd0": "04ce4fbd340b9548d4a8220ea335a702",
".git/objects/94/5fc4c2f9953849e9f9faffc39e3e332b9269af": "83b3e6215d4ac453ea483f5d0555b806",
".git/objects/60/a2f1f6033e1d387f180835dae25477ddb11321": "0046cf2cc240f457fb27de7159d9dfce",
".git/objects/34/9366e0c0b5c24bd71385875251b4f06b6c64bf": "1d384213413a2e3290634127c1bda97f",
".git/objects/5a/a8315c97b6bb1df8571dce3482231599dd03c1": "b1420ade7e6829e2e50695013d464dd2",
".git/objects/9c/b9ee282e100518131ec957a9730052e93381c8": "be394a679e550fbaca0800700fd99d35",
".git/objects/ad/0fede17c0404bcf68b71f3963c007849574b61": "9dc40e5c1d566037566a448b3968ded1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/e07909444a62dd7b55bcda44b33ecf4c193b1c": "f9a32e3f22b75471de3cd21cff79c83d",
".git/objects/e3/51ea8428ae6b016128130d5b5f642ea599ef25": "b082e88fd66c2ccc83a2171a09b8e663",
".git/objects/c8/16983f18230f1fdecb261149a7d211e910db15": "e91043fe5f8f41318c61912c6d26ea7f",
".git/objects/fb/77356b3f64cf3b13bfe81ca50740cda96b0b58": "4db83e2cbf0cfb13cd838a5b889b35b3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/05fbbc0243eccc37686c6a451435d04bce3d3b": "60e75f487491f5927be34197ac439d2b",
".git/objects/87/829ace650ac79f023279a4170eba1cd64113fa": "ced427f225b9dab0d5157757b55944b2",
".git/objects/1a/45276c920c67a4b626d0e3ce5908e924f3e746": "7dfbc3376849c67cedd2d28e4cd5d565",
".git/objects/7b/482c30f237471f5f3db308027a7e58910bc707": "89f30a1d988e922cc7cf3d819155ba5e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/2fdb1a31b36ce990ae1ca0dd90075ae0db109c": "a2ba53473540df22358698060022fa11",
".git/objects/7e/2185ca7cef79baceb9514992fb159fbe27fbac": "a103b893a13500b1c3ace4ad2c4bd305",
".git/objects/7e/d398cceeaffc1877dfb827b44cbfbd19343902": "80b275b896b0b3104904432cad15246e",
".git/objects/21/7202968245bdc4ee27c453ea32b0ac2068482f": "2dbb15f61a3a0dcc7ad22ebe7c94e16f",
".git/objects/4d/318bc6084bf9438bcad3fe784d31b42f61ca42": "207aaf5c9599c58f139668436fd1e594",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/be55279939639a9a5eb408db3b3b7b1a3ee5be": "78ffb34379afab2bb221a2acf854b64e",
".git/objects/6e/9e10d782607d2a3e3dfc9a9a9e05b518a9342d": "01b60726190e8fefec18716a594c4899",
".git/objects/9a/95812e33696ba4991fbe2bc51bfa02207c95ca": "0da50ff39536e50689eb472023164ae5",
".git/objects/5b/1f175747964098e13810c2ae48669da32e323f": "751a1298b5d9b4aacf957a1a33d76224",
".git/objects/b6/23da2d29622f47d42f5d69507b4e2f1f99d9ba": "d9b105c6bd46d7f701f19ba4e30f899c",
".git/objects/b7/6f734e145b3e1d8521ee96bc03a996b1a3a83c": "6c49f56e99baf4703c7f49a7c6a445de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/4ffd8477ce13f4ffa48e8af40a7a28dd6da42c": "944ea12e5eca1658ff2eefe5c5980a5e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/16fa8a9233c791265a6f6024fb4cc9b972d552": "34aab0a794094bc1a2f833f811fbe6e9",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/fa/cb70670a51c87e5cfb02af956c3cd31ffaaf1d": "0581d6562d192749fe72da29b36a3355",
".git/objects/cb/20514b1922f5208c393a9e06dae711406641e5": "9005766b3ebdc78082596df0ffd575cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/6ebf87353e3e7d13eb66d09e3acb6717350867": "9164283333fcb9fdaa45e8408c21748b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/de1d6599d552910315c33626251dd787f07ec7": "1d6f7de27fd52d30dee2d748b9c7b6ae",
".git/objects/77/3b323b8cbcfbffaefd0906ddf00bd8cdf5a2d8": "886c7bd4799c5b2be28ff6f1d20b5030",
".git/objects/48/aef5f8915bf0c750f6cc435939278a922f5313": "20bfa74d24069a851f094fc5c0c095f1",
".git/objects/1e/4aa4e79c1c7a84fa989a8d6883d45f5ddd9587": "4189ba92ba64d01ca1be2422876bd9b7",
".git/objects/84/841ef8483830db433b68a39beaec071221d032": "fa8320ddfcfc28372860951f4ce5ddb8",
".git/objects/23/5bafa3943eaabc91badf778a86b916bdc5e13c": "36cb16d6ccb37b33cb262b226ce84e0f",
".git/objects/15/0b1d504239c7bc04811b11d527e359d62ec7c9": "2cadc0cb705f2519b304ebde18631d02",
".git/objects/15/1fae8cc8ab3daef5cc689b81ab87ffca21ebbc": "2e07bf41ed101bee7369a6af25220007",
".git/objects/8c/32abb38fac517b1aa2007a73074e5bcf45e98f": "ba3b00707364cc20f720738cfd5ba63b",
".git/objects/85/efc075470e15361ce9abb6cb921637a0b1ff49": "4420d0a739824368c33ba8ce44e52434",
".git/objects/1d/da1035021a8a0bb3fd2945df177ed52f48989c": "6d14c7e96a9d3979d7b45e598d402988",
".git/objects/71/a21a9a5d278c0f6795531321d17800f8158f04": "64821b60a2f27315b767e8a8ba2c696a",
".git/objects/1c/88e9f33d2a7fdbedae17998cfc5ebece4085b4": "b92d94f44a66320913cc37a511e201d1",
".git/objects/8b/f0e8b118b316d7dd092d37fa0b42cfffbb148a": "f4e09113d3819c29e14c8b04fe50938c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "98cd2aaf5a339f04b3bcf93ebd34464f",
".git/logs/refs/heads/master": "98cd2aaf5a339f04b3bcf93ebd34464f",
".git/logs/refs/remotes/origin/master": "5690099fab3124e31681d1906e8d933c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "31eb7f7212846868406ac0b173a6a7fe",
".git/refs/remotes/origin/master": "31eb7f7212846868406ac0b173a6a7fe",
".git/index": "c07dc642186be3de68ff6661bf4f80fb",
".git/COMMIT_EDITMSG": "2f22afe78434b16dfbfd2c8f35e328b8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "d082c327e955e65c1870800dcaf71a67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
