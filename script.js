// Отображение текущей даты и времени
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        dateElement.textContent = 'Текущая дата и время: ' + now.toLocaleDateString('ru-RU', options);
    }
}

// Интерактивная форма для выбора информации
function setupInteractiveForm() {
    const infoForm = document.getElementById('info-form');
    const resultDiv = document.getElementById('result');
    
    if (infoForm && resultDiv) {
        infoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const category = document.getElementById('category').value;
            let info = '';
            
            // Использование объекта Math для вычислений
            const randomNum = Math.floor(Math.random() * 100) + 1;
            const sqrtNum = Math.sqrt(randomNum).toFixed(2);
            
            switch(category) {
                case 'history':
                    info = `История: "Бисмарк" был спущен на воду 14 февраля 1939 года. Случайное число: ${randomNum}, квадратный корень: ${sqrtNum}`;
                    break;
                case 'specs':
                    info = `Характеристики: Водоизмещение 50 900 тонн, скорость 30 узлов. Случайное число: ${randomNum}, квадратный корень: ${sqrtNum}`;
                    break;
                case 'battles':
                    info = `Сражения: Потопил "Худ" 24 мая 1941 года. Случайное число: ${randomNum}, квадратный корень: ${sqrtNum}`;
                    break;
                case 'crew':
                    info = `Экипаж: 2200 человек, 103 офицера. Случайное число: ${randomNum}, квадратный корень: ${sqrtNum}`;
                    break;
                default:
                    info = 'Выберите категорию информации. Случайное число: ' + randomNum + ', квадратный корень: ' + sqrtNum;
            }
            
            resultDiv.innerHTML = `
                <div class="result-box">
                    <h3>Выбранная информация:</h3>
                    <p>${info}</p>
                    <p>Сгенерировано с использованием объекта Math</p>
                </div>
            `;
        });
    }
}

// Работа с массивами студентов
let students = [];

function setupStudentSystem() {
    const addButton = document.getElementById('add-student');
    const calculateButton = document.getElementById('calculate-stats');
    const studentsTable = document.getElementById('students-table');
    
    if (addButton && calculateButton && studentsTable) {
        // Добавление студента
        addButton.addEventListener('click', function() {
            const name = document.getElementById('student-name').value;
            const math = parseInt(document.getElementById('math-grade').value) || 0;
            const physics = parseInt(document.getElementById('physics-grade').value) || 0;
            const history = parseInt(document.getElementById('history-grade').value) || 0;
            
            if (name) {
                const student = {
                    id: students.length + 1,
                    name: name,
                    grades: {
                        math: math,
                        physics: physics,
                        history: history
                    },
                    total: math + physics + history,
                    average: ((math + physics + history) / 3).toFixed(2)
                };
                
                students.push(student);
                updateStudentsTable();
                clearForm();
            }
        });
        
        // Расчет статистики
        calculateButton.addEventListener('click', function() {
            if (students.length === 0) {
                alert('Добавьте хотя бы одного студента');
                return;
            }
            
            // Использование объекта Math для статистики
            let totalStudents = students.length;
            let mathSum = 0;
            let physicsSum = 0;
            let historySum = 0;
            let allGrades = [];
            
            students.forEach(student => {
                mathSum += student.grades.math;
                physicsSum += student.grades.physics;
                historySum += student.grades.history;
                allGrades.push(student.grades.math, student.grades.physics, student.grades.history);
            });
            
            const mathAvg = mathSum / totalStudents;
            const physicsAvg = physicsSum / totalStudents;
            const historyAvg = historySum / totalStudents;
            
            // Находим максимальную и минимальную оценки с помощью Math
            const maxGrade = Math.max(...allGrades);
            const minGrade = Math.min(...allGrades);
            const totalGradesSum = allGrades.reduce((a, b) => a + b, 0);
            const overallAverage = totalGradesSum / allGrades.length;
            
            // Отображение статистики
            document.getElementById('total-students').textContent = totalStudents;
            document.getElementById('math-average').textContent = mathAvg.toFixed(2);
            document.getElementById('physics-average').textContent = physicsAvg.toFixed(2);
            document.getElementById('history-average').textContent = historyAvg.toFixed(2);
            document.getElementById('max-grade').textContent = maxGrade;
            document.getElementById('min-grade').textContent = minGrade;
            document.getElementById('overall-average').textContent = overallAverage.toFixed(2);
            document.getElementById('total-sum').textContent = totalGradesSum;
            
            // Использование объекта String для форматирования
            const statsText = `Статистика по ${totalStudents} студентам:\n` +
                            `Средний балл по математике: ${mathAvg.toFixed(2)}\n` +
                            `Средний балл по физике: ${physicsAvg.toFixed(2)}\n` +
                            `Средний балл по истории: ${historyAvg.toFixed(2)}\n` +
                            `Общий средний балл: ${overallAverage.toFixed(2)}`;
            
            console.log(statsText);
        });
        
        // Обновление таблицы студентов
        function updateStudentsTable() {
            const tbody = studentsTable.querySelector('tbody');
            if (!tbody) return;
            
            tbody.innerHTML = '';
            
            students.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.grades.math}</td>
                    <td>${student.grades.physics}</td>
                    <td>${student.grades.history}</td>
                    <td>${student.total}</td>
                    <td>${student.average}</td>
                `;
                tbody.appendChild(row);
            });
        }
        
        // Очистка формы
        function clearForm() {
            document.getElementById('student-name').value = '';
            document.getElementById('math-grade').value = '';
            document.getElementById('physics-grade').value = '';
            document.getElementById('history-grade').value = '';
        }
    }
}

// Демонстрация работы с объектами Number и String
function demonstrateNumberMethods() {
    const numberExamples = document.getElementById('number-examples');
    if (numberExamples) {
        const num1 = 42.5678;
        const num2 = -15.3;
        const num3 = 100;
        
        const examples = `
            <p>Примеры использования объекта Number:</p>
            <ul>
                <li>Число ${num1} округлено: ${Math.round(num1)}</li>
                <li>Число ${num1} с 2 знаками после запятой: ${num1.toFixed(2)}</li>
                <li>Абсолютное значение ${num2}: ${Math.abs(num2)}</li>
                <li>Квадратный корень из ${num3}: ${Math.sqrt(num3)}</li>
                <li>Случайное число от 1 до 100: ${Math.floor(Math.random() * 100) + 1}</li>
            </ul>
        `;
        
        numberExamples.innerHTML = examples;
    }
}

function demonstrateStringMethods() {
    const stringExamples = document.getElementById('string-examples');
    if (stringExamples) {
        const text = "Линкор Бисмарк был гордостью немецкого флота";
        
        const examples = `
            <p>Примеры использования объекта String:</p>
            <ul>
                <li>Исходный текст: "${text}"</li>
                <li>Длина строки: ${text.length} символов</li>
                <li>В верхнем регистре: "${text.toUpperCase()}"</li>
                <li>Содержит "Бисмарк": ${text.includes("Бисмарк") ? 'Да' : 'Нет'}</li>
                <li>Замена слова: "${text.replace("гордостью", "символом")}"</li>
                <li>Первые 10 символов: "${text.substring(0, 10)}..."</li>
            </ul>
        `;
        
        stringExamples.innerHTML = examples;
    }
}

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    setupInteractiveForm();
    setupStudentSystem();
    demonstrateNumberMethods();
    demonstrateStringMethods();
});