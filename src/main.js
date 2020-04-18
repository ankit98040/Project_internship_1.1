function add_google_logo() {
        var src = "https://dog.ceo/api/breeds/image/random";
        show_image("https://dog.ceo/api/breeds/image/random", 276,110, "Google Logo");
    }


    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.body.appendChild(img);
    }