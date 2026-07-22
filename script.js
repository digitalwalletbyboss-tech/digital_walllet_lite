if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(registration => {
		console.log("Servis Worker Registered")
		console.log(registration)
	}).catch(error=>{
		console.log("Failed to register sw.js")
		console.log(error)
	})
}