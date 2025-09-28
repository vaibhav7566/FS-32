let palette = document.querySelector(".palette");
let input = document.querySelector(".palette input")
let form = document.querySelector("form")

window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        palette.classList.remove("hidden");
        e.preventDefault();
        input.focus();
    }

    if (e.key === "Escape") {

        if (input.value.trim() !== "") {
            // First Escape → Clear input
            input.value = "";
        } else {
            // If already empty → Hide palette
            input.value = "";
            palette.classList.add("hidden");
        }
    }
})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (input.value.split(" ")[0] === "google") {

        const url =
            "https://www.google.com/search?q=" +
            encodeURIComponent(
                input.value.split(" ")[1]
            );
        window.open(url, "_blank"); // opens new tab
    }
})


