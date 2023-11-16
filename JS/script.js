// Tombol Tonton Video
function linkVideo() {
    window.location.href = "https://www.youtube.com/watch?v=TFQlz-Uh3Mk"
}
// Tombol Join Sekarang menuju form
function clickJoin() {
    window.location.href = "#joinMember"
}
// Tombol Pelajari Selengkapnya
function linkWA() {
    window.location.href = "https://wa.me/08777788889999"
}
// Tombol Tentang Kami (NAVBAR)
function linkEmail() {
    window.location.href = "mailto:Zenitabeauty@gmail.com"
}
// Tombol Beranda (NAVBAR)
function refreshWeb() {
    window.location.reload()
}
// Tombol Produk (NAVBAR)
function sectionProduk() {
    window.location.href = "#produkZB"
}
// Tombol Peluang Bisnis (NAVBAR)
function sectionBisnis() {
    window.location.href = "#bisnisZB"
}

// Function Tombol Submit Form (Kirim Pesan), Tombol tidak berfungsi jika input Nama & email belum diisi
let form = document.getElementById("formZB")
let input1 = document.getElementById("name")
let input2 = document.getElementById("e-mail")
let submitBtn = document.getElementById("btnForm")

input1.addEventListener("input", checkForm)
input2.addEventListener("input", checkForm)

function checkForm() {
    if (input1.value.trim() !== "" && input2.value.trim() !== "") {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", "disabled")
    }
}
// Alert dan reload page jika input nama dan email sudah diisi
form.addEventListener("submit", function(e) {
    e.preventDefault()
    alert("Data anda telah terkirim, kami akan segera menghubungi anda. Terimakasih!")
    window.location.reload()
})