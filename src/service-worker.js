/* globals workbox */
/* eslint-disable no-restricted-globals */
workbox.core.setCacheNameDetails({
  prefix: 'teacher-landi',
  suffix: 'v1',
});

// Control all opened tabs ASAP
workbox.clientsClaim();
workbox.navigationPreload.enable();
// Swap in networkOnly, cacheFirst, or staleWhileRevalidate as needed.
const strategy = workbox.strategies.networkFirst({
  cacheName: 'cached-navigations',
  plugins: [
    // Any plugins, like workbox.expiration, etc.
  ],
});
const navigationRoute = new workbox.routing.NavigationRoute(strategy, {
  // Optionally, provide a white/blacklist of RegExps to determine
  // which paths will match this route.
  // whitelist: [],
  // blacklist: [],
});
workbox.routing.registerRoute(navigationRoute);

/**
 * Use precaching list generated by workbox in build process.
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.precaching
 */
/* eslint-disable no-underscore-dangle */
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

/**
 * Register a navigation route.
 * https://developers.google.com/web/tools/workbox/modules/workbox-routing#how_to_register_a_navigation_route
 */
workbox.routing.registerNavigationRoute('/index.html');

/**
 * Use runtime cache:
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.routing#.registerRoute
 *
 * Workbox provides all common caching strategies including CacheFirst, NetworkFirst etc.
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies
 */

// static cache
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-cache',
  })
);

// image cache
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 200, // 容量
        maxAgeSeconds: 7 * 24 * 60 * 60, // 一周
        purgeOnQuotaError: true,
      }),
    ],
  })
);

/**
 * Handle API requests
 */
workbox.routing.registerRoute(
  /\/api\//,
  workbox.strategies.networkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'api-cache',
    plugins: [
      new workbox.backgroundSync.Plugin(),
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);

/**
 *  API
 *  接口缓存策略
 */
workbox.routing.registerRoute(
  ({ url, event }) => {
    return url.host === 'www.easy-mock.com';
  },
  workbox.strategies.networkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'api-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);

/**
 * CDN . manifest 等其他文件
 */
workbox.routing.registerRoute(
  ({ url, event }) => {
    if (url.protocol === 'https') {
      return url.href.includes('alicdn') || url.href.includes('manifest.json');
    } else {
      return false;
    }
  },
  workbox.strategies.cacheFirst({
    cacheName: 'resource-cache',
  })
);
/**
 * Handle third party requests
 */
// workbox.routing.registerRoute(
//   /^https:\/\/gw.alipayobjects.com\//,
//   workbox.strategies.networkFirst()
// );
// workbox.routing.registerRoute(/\/color.less/, workbox.strategies.networkFirst());

/**
 * Response to client after skipping waiting with MessageChannel
 */
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self
        .skipWaiting()
        .then(
          () => replyPort.postMessage({ error: null }),
          error => replyPort.postMessage({ error })
        )
    );
  }
});
