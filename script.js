function button11() {
    try {
    confirm1 = confirm("Click OK to redirect")
    if (confirm1 == true) {
        console.log("redirecting...")
        window.open("index1.html")
        console.log("done!")
    }
        
    else {
        console.log("redirect canceled")
    }
    
    }
    catch {
        console.error("can't redirect")
    }
}
document.cookie = "Shave Cookie"
