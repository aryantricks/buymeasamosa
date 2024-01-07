function showcode() {
    username = document.getElementById("username").value.trim();
    userupiid = document.getElementById("upiid").value.trim().toLowerCase();
    confirmeduserupid = document.getElementById("confirmupiid").value.trim().toLowerCase();
    usermsg = document.getElementById("usermessage").value.trim();

    if (userupiid !== null && userupiid !== undefined && userupiid !== "" && userupiid === confirmeduserupid) {
        document.getElementById("codecontainer").innerHTML = `<script src="https://cdn.arycodes.in/libraries/buymeasamosa/buymeasamosa.js" data-upi="${userupiid}" data-name="${username}"
    data-msg="${usermsg}" type="text/javascript"></script>`;

    }

    else {
        document.getElementById("codecontainer").innerHTML = "Check UPI please";
    }
}

document.getElementById("showcodebutton").addEventListener("click", showcode);