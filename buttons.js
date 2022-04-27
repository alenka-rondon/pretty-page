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


let bgBtn = document.getElementById("bgColor");

chrome.storage.sync.get("color", ({color}) => {
    bgBtn.style.backgroundColor = color
})

bgBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}); // Find current tab
    const color = document.getElementById("colorChoice").value;

    chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: changeBackgroundColor,
        args: [color]
        
    })
})

function changeBackgroundColor (color) {
    let elems = document.querySelectorAll("*"); // Grab every element in the dom
        for (var i = 0;i < elems.length; i++){ 
            elems[i].style.backgroundColor = color;
        }
}


let fontColorBtn = document.getElementById("fontColor");

chrome.storage.sync.get("color", ({color}) => {
    fontColorBtn.style.backgroundColor = color
})

fontColorBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true}); // Find current tab
    const color = document.getElementById("fontColorChoice").value;

    chrome.scripting.executeScript({ // Run the following script on our tab
        target: {tabId: tab.id},
        function: changeFontColor,
        args: [color]
        
    })
})

function changeFontColor (color) {
    let elems = document.querySelectorAll("*"); // Grab every element in the dom
        for (var i = 0;i < elems.length; i++){ 
            elems[i].style.color = color;
        }
}