function button11() {
    try {
    alert("click OK to redirect")
    console.log("redirecting...")
    window.open("index1.html")
    console.log("done!")
    }
    catch {
        console.error("can't redirect")
    }
}
document.cookie = "Shave Cookie"
