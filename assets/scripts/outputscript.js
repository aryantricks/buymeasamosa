const links = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=Comic+Neue:wght@700&family=Pacifico&family=Teko&display=swap'
];

links.forEach(link => {
    const linkElement = document.createElement('link');
    linkElement.rel = link.includes('css') ? 'stylesheet' : 'preconnect';
    linkElement.href = link;
    link.includes('css') && (linkElement.crossOrigin = 'anonymous');
    document.head.appendChild(linkElement);
});




function bms_createqrcode() {
    const qrcodeDiv = document.getElementById("bms-qrcode-container");
    qrcodeDiv.innerHTML = ""; // Clear previous QR code if any
    text = `upi://pay?pa=${bms_userupiid}&pn=${bms_username}&am=${bms_usermessage}`
    document.getElementById("userupiid").innerText = bms_userupiid;
    const qr = new QRCode(qrcodeDiv, {

        text: `upi://pay?pa=${bms_userupiid}&pn=${bms_username}&am=${"amount"}`,
        height: 286,
        width: 286
    });



}


function updateoutput() {

    bms_userupiid = document.getElementById("upiid").value.trim().toLowerCase();
    bms_username = document.getElementById("username").value.trim();
    bms_usermessage = document.getElementById("usermessage").value.trim();
    document.getElementById("usermsg").innerText = bms_usermessage

    bms_createqrcode()
    closecodeview()

}


document.getElementById("submitbutton").addEventListener('click' , updateoutput)