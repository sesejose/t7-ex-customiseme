const url = "https://customizeme-d28a.restdb.io/rest/customizeme";

const options = {
  headers: {
    "x-apikey": "62262a57dced170e8c83a001",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handlesoapList(data);
  });

function handlesoapList(data) {
  data.forEach(showSoap);
}

function showSoap(soap) {
  console.log(soap);
  const template = document.querySelector("#cartTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".soap-name").textContent = soap.name;
  copy.querySelector(".soap-image").textContent = soap.image;
  copy.querySelector(".soap-price").textContent = soap.price + " " + "DDK";
  copy.querySelector(".soap-image").src = soap.imageurl;
  copy.querySelector("a").setAttribute("href", `product.html?id=${soap._id}`);
  const parent = document.querySelector("#shop-grid");
  parent.appendChild(copy);
}
