let color = "#f4cccc"


// Run when the user first installs the extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color}) // Use sync to store persistent data
    console.log("Button Color Set")
})

window.addEventListener("load", function()
{
  document.getElementById("font-select")
          .addEventListener("click", update, false);
    document.getElementById("preset-select")
          .addEventListener("click", updatePreset, false);
}, false);


function update() {

        var select = document.getElementById('font-select');
        var option = select.options[select.selectedIndex];
    
        document.getElementById('value').value = option.value;

        // document.getElementById('text').value = option.text;

        var selectedFont = option.value; //grabbing new font 

        //Snag our button
        let choosefnt = document.getElementById("fontSelect") 

        // Set our button's color to the color that we stored
        chrome.storage.sync.get("color", ({color}) => {
            choosefnt.style.backgroundColor = color
        })


        // Run on click
        choosefnt.addEventListener("click", async () => {
        // resetFont(selectedFont);
        console.log("in the Function");
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: changeFont,
                args: [selectedFont]
            })
        })

        //change all elements to selected font
        function changeFont(newFont) {
            let elems = document.querySelectorAll("*"); // Grab every element in the dom
            for (var i = 0;i < elems.length; i++){ 
                elems[i].style.fontFamily = newFont;
            }
        }


        

}
update();


function updatePreset() {

    var select = document.getElementById('preset-select');
    var option = select.options[select.selectedIndex];

    document.getElementById('presetValue').value = option.value;

    // document.getElementById('text').value = option.text;

    var selectedPreset = option.value; //grabbing new font 

    //Snag our button
    let choosePreset = document.getElementById("presetSelect") ;

    // Set our button's color to the color that we stored
    chrome.storage.sync.get("color", ({color}) => {
        choosePreset.style.backgroundColor = color
    })

    if (selectedPreset === "dark-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#1f1f1f";
                        elems[i].style.color = "#def3fc";
                    }
                }
            })
        })

    } else if (selectedPreset === "princess-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#ebeae6";
                        elems[i].style.color = "#78235d";
                    }
                }
            })
        })

    } else if (selectedPreset === "vader-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#303030";
                        elems[i].style.color = "#bf1b2b";
                    }
                }
            })
        })

    } else if (selectedPreset === "pastel1-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#949494";
                        elems[i].style.color = "#BFE8DE";
                    }
                }
            })
        })

    } else if (selectedPreset === "pastel2-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#E1EfE1";
                        elems[i].style.color = "#b497b4";
                    }
                }
            })
        })

    } else if (selectedPreset === "blue-mode") {
        choosePreset.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({active: true, currentWindow:true}) // Find current tab
            
            chrome.scripting.executeScript({ // Run the following script on our tab
                target: {tabId: tab.id},
                function: () => {
                    let elems = document.querySelectorAll("*"); // Grab every element in the dom
                    for (var i = 0;i < elems.length; i++){ 
                        elems[i].style.backgroundColor = "#070831";
                        elems[i].style.color = "#aadad9";
                    }
                }
            })
        })

    }


}
updatePreset();

