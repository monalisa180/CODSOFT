const data = {
    movie: {
        action: ["Avengers", "John Wick", "Mad Max", "Batman", "Mission Impossible"],
        romance: ["Titanic", "The Notebook", "La La Land", "Me Before You", "Pride & Prejudice"],
        comedy: ["Mr Bean", "Hangover", "3 Idiots", "Home Alone", "Jumanji"]
    },
    book: {
        fiction: ["The Alchemist", "Harry Potter", "The Hobbit", "Game of Thrones", "Life of Pi"],
        romance: ["Pride and Prejudice", "Me Before You", "Twilight", "The Fault in Our Stars", "Love Story"],
        selfhelp: ["Atomic Habits", "Rich Dad Poor Dad", "The Power of Now", "Think and Grow Rich", "You Can Win"]
    },
    product: {
        electronics: ["Smartphone", "Laptop", "Headphones", "Smartwatch", "Bluetooth Speaker"],
        fashion: ["T-shirt", "Sneakers", "Jeans", "Jacket", "Watch"],
        grocery: ["Rice", "Milk", "Bread", "Eggs", "Fruits"]
    }
};

// FIX: wait until page loads
window.onload = function () {

    const category = document.getElementById("category");
    const preference = document.getElementById("preference");

    category.addEventListener("change", function () {

        preference.innerHTML = '<option value="">Select Preference</option>';

        let options = [];

        if (this.value === "movie") {
            options = ["action", "romance", "comedy"];
        } else if (this.value === "book") {
            options = ["fiction", "romance", "selfhelp"];
        } else if (this.value === "product") {
            options = ["electronics", "fashion", "grocery"];
        }

        options.forEach(opt => {
            let option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            preference.appendChild(option);
        });
    });
};

// FIX: safer recommend function
function recommend() {
    const category = document.getElementById("category").value;
    const preference = document.getElementById("preference").value;
    const resultDiv = document.getElementById("result");

    if (category === "" || preference === "") {
        resultDiv.innerHTML = "Please select category and preference!";
        return;
    }

    const items = data[category][preference];

    if (!items) {
        resultDiv.innerHTML = "No recommendations found!";
        return;
    }

    let output = "<h3>Recommended:</h3>";

    for (let i = 0; i < items.length; i++) {
        output += "   " + items[i] + "<br>";
    }

    resultDiv.innerHTML = output;
}
