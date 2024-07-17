function loggin() {
    let password = document.getElementById("password").value;
    const correctPassword = "meme";

    if (password == correctPassword) {
        window.location = "album.html";
    } else {
        alert('Nuestro apodo');
    }
}

