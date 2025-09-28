let users = [
    {
        name: "vaibhav dhakad",
        pic: "https://i.pinimg.com/736x/c8/06/d5/c806d58879926807151297a162228544.jpg",
        bio: "silent chaos in a loud world | not for everyone",
    },
    {
        name: "vani sharma",
        pic: "https://i.pinimg.com/736x/60/62/9b/60629bee6dbd4b86e3f894c06d80662c.jpg",
        bio: "dreamer | coffee lover | bookworm"
    },
    {
        name: "rohan singh",
        pic: "https://i.pinimg.com/736x/b3/0c/39/b30c392c43b465ff22d8f084c06bbee1.jpg",
        bio: "tech enthusiast | gamer | foodie"
    },
    {
        name: "priya verma",
        pic: "https://i.pinimg.com/736x/b3/0c/39/b30c392c43b465ff22d8f084c06bbee1.jpg",
        bio: "traveler | photographer | music addict"
    },
    {
        name: "arjun mehra",
        pic: "https://i.pinimg.com/736x/4e/b2/33/4eb2338f55371b06aed9de8773b030f3.jpg",
        bio: "fitness freak | coder | minimalist"
    },
    {
        name: "sneha patel",
        pic: "https://i.pinimg.com/736x/99/a8/93/99a893369bae992d29f63dcb58ba31c6.jpg",
        bio: "artist | animal lover | nature admirer"
    },
    {
        name: "amit joshi",
        pic: "https://i.pinimg.com/1200x/04/34/1b/04341bee640afeae057c43692f94e652.jpg",
        bio: "sports fan | movie buff | explorer"
    },
    {
        name: "isha kapoor",
        pic: "https://i.pinimg.com/736x/3b/4d/f2/3b4df2c3b38546056d3e268e9243bad4.jpg",
        bio: "fashionista | blogger | foodie"
    },
];



function showUsers(arr) {

    arr.forEach(function (user) {
        // Create card container
        const card = document.createElement("div");
        card.className = "card";

        // Create image
        const img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;

        // Create blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        // Create context container
        const context = document.createElement("div");
        context.className = "context";

        // Add heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Add paragraph
        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        // Append heading + paragraph into context
        context.appendChild(heading);
        context.appendChild(paragraph);

        // Append elements into card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(context);

        // Add card to container
        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");
let cards = document.querySelector(".cards");

inp.addEventListener("input", function () {
    cards.innerHTML = "";
  
    let newusers = users.filter(function (youser) {
        return youser.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    if (newusers.length !== 0) {
        
        showUsers(newusers);
    }
    else {
        // cards.innerHTML = "";
             let noUserMsg = document.createElement("div");
             noUserMsg.style.color = "white"
        noUserMsg.className = "card no-user";
        noUserMsg.innerHTML = "<h2>No Users found !</h2>";
        noUserMsg.style.textAlign = "center";
        cards.appendChild(noUserMsg);
    }

})




