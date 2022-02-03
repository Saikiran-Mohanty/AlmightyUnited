
// -------------Whatsapp Integration--------------
function textencode(title){
    let str="Hello, I would like to buy "+title+" from you";
    let url="https://wa.me/9876543210?text=";
    let encoded =url + encodeURIComponent(str);
    return encoded;
}


// -------------Share Icon using modal Alert-------------------

function getURL() {
    var ALERT_TITLE = "Thank You For Sharing";
var ALERT_BUTTON_TEXT = "Done";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}
alert("Please copy and share this URL: " + window.location.href);
}
// -------------------Share Icon Ends--------------------

// -------------product-1-------------------
// ==================Icons==================
$(".p-1 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-1 a:last-child").click(()=>{
   let title= $(".p-1 h3").text();
   $(".p-1 a:last-child").attr("href" , textencode(title))

})
// -------------product-2-------------------
$(".p-2 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-2 a:last-child").click(()=>{
   let title= $(".p-2 h3").text();
   $(".p-2 a:last-child").attr("href" , textencode(title))
})
// -------------product-3-------------------
$(".p-3 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-3 a:last-child").click(()=>{
   let title= $(".p-3 h3").text();
   $(".p-3 a:last-child").attr("href" , textencode(title))
})
// -------------product-4-------------------
$(".p-4 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-4 a:last-child").click(()=>{
   let title= $(".p-4 h3").text();
   $(".p-4 a:last-child").attr("href" , textencode(title))
})
// -------------product-5-------------------
$(".p-5 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-5 a:last-child").click(()=>{
   let title= $(".p-5 h3").text();
   $(".p-5 a:last-child").attr("href" , textencode(title))
})
// -------------product-6-------------------
$(".p-6 .icons a:first-child").on("click",function() {
    var style = $(this).attr("style")+"";
    if(style=="undefined"){
        $(this).css("color", "red"); 
    }
    else
    $(this).removeAttr("style");
    });
// =========================================
$(".p-6 a:last-child").click(()=>{
   let title= $(".p-6 h3").text();
   $(".p-6 a:last-child").attr("href" , textencode(title))
})



    


