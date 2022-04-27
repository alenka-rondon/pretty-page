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

