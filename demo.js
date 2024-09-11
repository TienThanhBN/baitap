let name = prompt("Nhập tên của bạn👉👈");
document.write(name);

let p = confirm("Bạn có yêu tôi ko💓");
document.write(p);

function getData() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    document.write(name);
    document.write(password);
}