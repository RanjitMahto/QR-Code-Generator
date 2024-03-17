// let imgBox = document.getElementById("imgBox");
// let qrImage = document.getElementById("qrImage");
// let qrText = document.getElementById("qrText");
// let btn = document.getElementById("btn");

// document.addEventListener('DOMContentLoaded', () => {
//     btn.addEventListener('click', () => {
//         qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//     });
// });

// // console.log("hello")

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let btn = document.getElementById("btn");
    
    // Function to generate QR code
    function getqr() {
        if(qrText.value.length >0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
         imgBox.classList.add("show-img")    
    }
}

    // Attach click event listener to the button
    btn.addEventListener('click', getqr);
});

