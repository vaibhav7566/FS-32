
let addnote = document.querySelector("#add-note");
let formcontainer = document.querySelector(".form-container");
let closeform = document.querySelector(".closeForm");
let form = document.querySelector("form");

let stack = document.querySelector(".stack");
let upBtn = document.querySelector("#upBtn")
let downBtn = document.querySelector("#downBtn");

const imageUrlInput = document.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = document.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = document.querySelector('input[placeholder="Enter home town"]');
const purposeInput = document.querySelector('input[placeholder="e.g., Quick appointment note"]');

// Radio inputs (category)
const categoryInputs = document.querySelectorAll('input[name="category"]');

// Button
const submitBtn = document.querySelector(".submit-btn");

addnote.addEventListener("click", function () {
    formcontainer.style.display = "initial";
})

closeform.addEventListener("click", function () {
    formcontainer.style.display = "none";
})



function getSelectedCategory() {
  for (let radio of categoryInputs) {
    if (radio.checked) return radio.value;
  }
  return null;
}

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from auto submit

    // Regex patterns

    const imageRegex = /^(https?:\/\/[^\s]+?\.(png|jpe?g|gif|webp)(\?.*)?$|https?:\/\/[^\s]+unsplash\.com\/[^\s]+|(?:[A-Za-z]:)?[\\/][^\s]+?\.(png|jpe?g|gif|webp))$/i;
    const fullNameRegex = /^[A-Za-z\s]{3,}$/; 
    const homeTownRegex = /^[A-Za-z\s]{2,}$/; 
    const purposeRegex = /^.{5,100}$/; // Min 5 chars, max 100
    const categoryRegex = /^(emergency|important|urgent|no-rush)$/i;

    // Validate inputs
    if (!imageRegex.test(imageUrlInput.value.trim())) {
      alert("❌ Please enter a valid Image URL (must end with jpg, png, gif, webp).");
      return;
    }

    if (!fullNameRegex.test(fullNameInput.value.trim())) {
      alert("❌ Full Name should have at least 3 letters and only alphabets.");
      return;
    }

    if (!homeTownRegex.test(homeTownInput.value.trim())) {
      alert("❌ Home Town should have at least 2 letters and only alphabets.");
      return;
    }

    if (!purposeRegex.test(purposeInput.value.trim())) {
      alert("❌ Purpose should be 5 to 100 characters long.");
      return;
    }


const selectedCategory = getSelectedCategory();

  // Check if category is selected
  if (!selectedCategory) {
    alert("❌ Please select a category.");
    return;
  }

  // Validate with regex
  if (!categoryRegex.test(selectedCategory)) {
    alert("❌ Invalid category selected!");
    return;
  }

 // ✅ Create object with all data
  const noteData = {
    image: imageUrlInput.value.trim(),
    fullName: fullNameInput.value.trim(),
    homeTown: homeTownInput.value.trim(),
    purpose: purposeInput.value.trim(),
    category: selectedCategory,
  };

  // Show in console
//   console.log("✅ Note Data:", noteData);

let tasksArray = [];
if (localStorage.getItem("tasks") !== null) {
    // Key exists, parse existing array
    
    tasksArray = JSON.parse(localStorage.getItem("tasks"));
    
    tasksArray.push(noteData);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
else{
    // Key exists nahi karti toh 
    tasksArray = [];
    tasksArray.push(noteData);
    localStorage.setItem("tasks",JSON.stringify(tasksArray));
}

form.reset();
formcontainer.style.display = "none";
});


function showCards(){
   let allTasks = JSON.parse(localStorage.getItem("tasks"));

   allTasks.forEach(function(task){
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.image;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Bookings
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    // Finally, add the card to the DOM (for example, inside a container)
    document.querySelector(".stack").appendChild(card); // or any container of your choice
  });
}
 
showCards();

// function updateStack(){
//     const cards = document.querySelectorAll(".stack .card");

//     cards.forEach(function(card , index){

//     })
// }

upBtn.addEventListener("click",function(){
    let lastElement = stack.lastElementChild;
    if (lastElement && stack.children.length > 1) {
        stack.insertBefore(lastElement, stack.firstElementChild);
    }
})

downBtn.addEventListener("click",function(){
    let firstElement = stack.firstElementChild;
    if (firstElement && stack.children.length > 1) {
        stack.appendChild(firstElement);
    }
});

// console.dir(stack);