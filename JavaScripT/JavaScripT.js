let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const coinCountEl = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Update call buttons!
function updateCallButtons() {
    document.querySelectorAll(".call-btn").forEach((btn) => {
        if (coinCount < 20) {
            btn.classList.add("opacity-50", "cursor-not-allowed");
        } else {
            btn.classList.remove("opacity-50", "cursor-not-allowed");
        }
    });
}

// Heart!
document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.classList.remove("text-red-500");
    btn.classList.add("text-gray-400");

    btn.addEventListener("click", () => {
        if (btn.classList.contains("text-red-500")) {
            btn.classList.remove("text-red-500");
            btn.classList.add("text-gray-400");
            heartCount--;
        } else {
            btn.classList.remove("text-gray-400");
            btn.classList.add("text-red-500");
            heartCount++;
        }
        heartCountEl.textContent = heartCount;
    });
});

// Copy!
document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const number = btn.dataset.number;
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCountEl.textContent = copyCount;
            alert(`Copied: ${number}`);
        });
    });
});

// Call!
document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const number = btn.dataset.number;

        if (coinCount < 20) {
            alert("Not enough coins to make a call!");
            updateCallButtons();
            return;
        }

        coinCount -= 20;
        coinCountEl.textContent = coinCount;
        updateCallButtons();

        alert(`Calling ${name} (${number})`);

        const now = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.className = "bg-gray-100 rounded-lg p-2 flex justify-between items-center";
        li.innerHTML = `
            <div>
                <span class="font-semibold">${name}</span><br>
                <span class="text-green-500 font-bold">${number}</span>
            </div>
            <span class="text-gray-500 text-sm">${now}</span>
        `;
        historyList.prepend(li);
    });
});

// Clear history!
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});

updateCallButtons();