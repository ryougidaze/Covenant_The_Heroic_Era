// @ts-nocheck — Service Worker context (compiled separately by serwist)
import { defaultCache } from "@serwist/next/worker";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.__SW_MANIFEST;

defaultCache();
