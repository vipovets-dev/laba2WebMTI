const grades = [
    { name: "Макар", score: 85 }, { name: "Денис", score: 92 },
    { name: "Анна", score: 78 }, { name: "Даша", score: 88 }, { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    let sum = 0;
    for (let s of data) sum += s.score;
    return sum / data.length;
}

function findTopStudent(data) {
    let top = data[0];
    for (let s of data) if (s.score > top.score) top = s;
    return top.name;
}

function filterFailed(data, pass) {
    let failed = [];
    for (let s of data) if (s.score < pass) failed.push(s.name);
    return failed;
}

function addLetterGrade(data) {
    let res = [];
    for (let s of data) {
        let l = s.score >= 90 ? "A" : (s.score >= 75 ? "B" : "C");
        res.push({ name: s.name, score: s.score, letter: l });
    }
    return res;
}

// Итоговое задание: демонстрация работы
console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Итоговый массив:", addLetterGrade(grades));