const myAge = prompt("Введите ваш возраст");

const friendAge = prompt("Введите возраст вашего соседа слева");

const myAge1 = Number.parseInt(myAge);
const friendAge1 = Number.parseInt(friendAge);


alert("Сумма ваших возрастов");
if (friendAge > 12) {
    alert(myAge1 + friendAge1);
}