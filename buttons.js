// get button from html file 
let pinkFontBtn = document.getElementById("changeColor")

chrome.storage.sync.get("color", ({color}) => {
    pinkFontBtn.style.backgroundColor = color
})

// Run on click
pinkFontBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab

    chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: () => {
            let elems = document.querySelectorAll("*"); // changing every element
            for (var i = 0;i < elems.length; i++){ 
                elems[i].style.color = "#932962";
            }
        }
    })
})

// Snag our button
let fontBtn = document.getElementById("changeFont")

// Set our button's color to the color that we stored
chrome.storage.sync.get("color", ({color}) => {
    fontBtn.style.backgroundColor = color
})

// Run on click
fontBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab

    chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: () => {
            let elems = document.querySelectorAll("*"); // Grab every element in the dom
            for (var i = 0;i < elems.length; i++){ 
                elems[i].style.fontFamily = "cursive";
            }
        }
    })
})


// Snag our button
let sizeBtn = document.getElementById("changeSize")

// Set our button's color to the color that we stored
chrome.storage.sync.get("color", ({color}) => {
    sizeBtn.style.backgroundColor = color
})

// Run on click
sizeBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab

    chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: () => {
            let elems = document.querySelectorAll("*"); // Grab every element in the dom
            for (var i = 0;i < elems.length; i++){ 
                elems[i].style.fontSize = "25px";
            }
        }
    })
})