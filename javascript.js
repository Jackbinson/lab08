
let i = prompt("How many cats do you want")
console.log(i)

if (i <= 5) {
  for (i = 0; i <= 5; i++ ) {
    console.log(i);
    const myImage = new Image(500, 500);
    myImage.src = "https://i.pinimg.com/originals/62/1a/1e/621a1eea5c9f53b7dc6b7d6e03407674.png";
    document.body.appendChild(myImage);
    console.log(myImage)
}
} else {
  alert("Chỉ nhập từ số 1 tới số 5, vui lòng nhập lại.")
}
