const baslik = document.getElementById("alper");
console.log(baslik);

const hatalar = document.getElementsByClassName("error");
console.log(hatalar[0]);

const pEtiketleri = document.getElementsByTagName("p");
// console.log(pEtiketleri[1]);

const pArray = Array.from(pEtiketleri);

pArray.forEach((element) => {
  console.log(element);
});
