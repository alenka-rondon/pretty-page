let color = "#f4cccc"


// Run when the user first installs the extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color}) // Use sync to store persistent data
    console.log("Button Color Set")
})