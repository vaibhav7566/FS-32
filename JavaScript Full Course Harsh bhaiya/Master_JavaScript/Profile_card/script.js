let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let card_container = document.querySelector(".card_container")


form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    

    let card = document.createElement("div");
    card.classList = "card";


    let profile_photo = document.createElement("div");
    profile_photo.classList = "profile_photo";
    let img = document.createElement("img");
    img.src = inputs[0].value;
    let name = document.createElement("h1");
    name.textContent = inputs[1].value;

    let age = document.createElement("h2");
    age.textContent = inputs[2].value;

    let occupation = document.createElement("h3");
    occupation.textContent = inputs[3].value;

    card_container.appendChild(card);
    card.appendChild(profile_photo);
    profile_photo.appendChild(img);
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(occupation);

    inputs.forEach(function(inp){
        if(inp.type !== "submit")
        inp.value = "";
    })

})