
let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
    productImg.src = "jerry/image1.png";

    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function () {
    productImg.src = "jerry/image2.png";

    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function () {
    productImg.src = "jerry/image3.png";

    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

