const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://customizeme-d28a.restdb.io/rest/customizeme/" + id;

const options = {
    headers: {
        "x-apikey": "62262a57dced170e8c83a001",
    },
};
fetch(url, options)
    .then((res) => res.json())
    .then((data) => showSoap(data));

function showSoap(soap) {
    console.log(soap);
    document.querySelector(".price").textContent = soap.price + " " + "DKK";
    document.querySelector(".name").textContent = soap.name;
    document.querySelector(".oils-butter").textContent = soap.oils;
    document.querySelector(".essential").textContent = soap.essential;

    document.querySelector(".soap-weight").textContent =
        "Weight: approx." + " " + soap.weight + "g";
    document.querySelector(".soap-color").textContent =
        "Color: " + " " + soap.color;
    document.querySelector(
        ".soap-image"
    ).src = `https://designslayer.dk/images-customizeMe/${soap.id}.jpg`;
}