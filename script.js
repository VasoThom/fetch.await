const button = document.querySelector("button");
const personName = document.createElement("h2");
document.body.append(personName);
const img = document.createElement("img");
document.body.append(img);
// vrisko enan tuxaio xristi
const randomPerson = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  console.log(response);

  if (response.ok) {
    const result = await response.json();
    console.log(result);

    const index = Math.floor(Math.random() * 10);

    personName.innerHTML = result[index].name;
  }
};
button.addEventListener("click", randomPerson);
//vrisko mia eikona
const getImage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (response.status === 200) {
    const result = await response.json();
    const index = Math.floor(Math.random() * 10);

    img.src = result[index].url;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5";
  }
};

button.addEventListener("click", getImage);
