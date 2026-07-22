self.addEventListener("install", e=>{
	e.waitUntill(
		caches.open("static").then(cache=>{
			cache.addAll(["index.html", "images/icon-192.png"])
		})
	)
})

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response=>{
			return response || fetch(e.request)
		})
	)
})
