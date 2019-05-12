let soldier = {
    heilth: 200,
    armor: 300
}

let jonh = {
    heilth: 150
}

jonh.__proto__ = soldier;

console.log(jonh);
console.log(jonh.armor);