let phaseCount = 0;

document.getElementById("addPhaseBtn").addEventListener("click", addPhase);
document.getElementById("calculateBtn").addEventListener("click", calculateTrueValue);

// ---------------- UI ----------------

function createPhase(id) {
    const div = document.createElement("div");
    div.className = "phase";
    div.id = "phase-" + id;

    div.innerHTML = `
        <div class="phase-title">Фаза ${id}</div>

        <label>RTP</label>
        <input type="number" step="0.1" class="rtp">

        <label>Volatility</label>
        <input type="text" class="vol">

        <label>Game</label>
        <input type="text" class="game">

        <label>Bet size</label>
        <input type="number" class="bet">

        <label>Wagering</label>
        <input type="number" class="wager">

        <label>Deposit</label>
        <input type="number" class="dep">

        <label>Bonus</label>
        <input type="number" class="bonus">

        <button onclick="removePhase(${id})">Удалить фазу</button>
    `;

    return div;
}

function addPhase() {
    phaseCount++;
    const container = document.getElementById("phases");
    container.appendChild(createPhase(phaseCount));
}

function removePhase(id) {
    const phase = document.getElementById("phase-" + id);
    if (phase) phase.remove();
}

// ---------------- CALCULATION ----------------

function calculateTrueValue() {
    const phases = [];

    document.querySelectorAll(".phase").forEach(phase => {
        phases.push({
            rtp: parseFloat(phase.querySelector(".rtp").value) || 0,
            volatility: phase.querySelector(".vol").value || "",
            game: phase.querySelector(".game").value || "",
            bet: parseFloat(phase.querySelector(".bet").value) || 0,
            wagering: parseFloat(phase.querySelector(".wager").value) || 0,
            deposit: parseFloat(phase.querySelector(".dep").value) || 0,
            bonus: parseFloat(phase.querySelector(".bonus").value) || 0
        });
    });

    const trueValue = computeTrueValue(phases); // из model.js

    document.getElementById("result").innerText =
        "True Value: " + trueValue.toFixed(4);
}

// Создаём первую фазу автоматически
addPhase();
