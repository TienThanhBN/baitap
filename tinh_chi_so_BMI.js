let weight = prompt("Nhập vào cân nặng của bạn.VD: 50kg");
let height = prompt("Nhập chiều cao của bạn.VD: 1.70m");
let bmi = weight / height^2;


    if (bmi < 18)
        alert("Bạn gầy");
    else if (bmi < 25.0)
        alert("Bạn bình thường");
    else if (bmi < 30.0)
        alert("Bạn thừa cân");
    else
        alert("Bạn béo như 🐷");
