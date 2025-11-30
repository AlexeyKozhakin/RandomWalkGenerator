// ---------------- MODEL (business logic) ----------------

// Функция получает массив фаз и возвращает True Value
function computeTrueValue(phases) {
    // Пример простой модели — можно заменить на твою FP/EV/TV модель
    let total = 0;

    for (const p of phases) {
        // placeholder формула — заменишь на настоящую
        total += p.deposit + p.bonus * (p.rtp / 100);
    }

    return total;
}