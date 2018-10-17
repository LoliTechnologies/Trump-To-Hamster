var picture = chrome.extension.getURL("images/hamster.jpg");
var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("src", picture);
};