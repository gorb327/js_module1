
const personeName = prompt("Введите свое имя");
const secondName = prompt("Введите свою фамилию");


const lengthPersoneName = (personeName.length);
const lengthSecondName = (secondName.length);


if (lengthPersoneName >= 4 && lengthSecondName >= 5) {
    alert(lengthPersoneName);
    alert(lengthSecondName)
} else {
    alert("УПС");
}