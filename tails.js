console.log("Консольная игра \"ОРЕЛ или РЕШКА\".");
console.log("")
console.log("Правила игры: введите \"0\", если вы выбираете \"решку\"; если ваш выбор - \"орел\", тогда введите \"1\". После этого игра подбрасывает монетку и, если вы угадали результат броска, то вы выиграли, а если не угадали, тогда проиграли.");
console.log("");

//Просим игрока сделать выбор и выводим его в консоль
function headsOrTails() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin, // ввод из стандартного потока
        output: process.stdout // вывод в стандартный поток
    });


    rl.question("Орел или решка? ", function (answer) {

        if (answer == 0) {
            console.log("Ваш выбор: решка");
        } else if (answer == 1) {
            console.log("Ваш выбор: орел");
        } else {
            console.log("Вы должны были выбрать либо \"орел\"(1), либо \"решка\"(0)!");
            rl.close();
            headsOrTails();
            return;
        }

        // Бросаем монетку и выводим результат броска
        function flipCoin() {
            var coin = Math.floor(Math.random() * 2);
            if (coin == 0) {
                console.log("Результат броска монетки: решка");
            } else {
                console.log("Результат броска монетки: орел");
            }
            return coin;
        }
        // Сравниваем выбор игрока с результатом броска монетки и выводим результат игры
        if (answer == flipCoin()) {
            console.log("Вы выиграли!");
        } else {
            console.log("Вы проиграли!");
        }

        // Запрос на продолжение игры
        rl.question("Сыграем еще?(y/n) ", function (answer) {
            if (answer == "y") {
                rl.close();
                headsOrTails();
            } else if (answer == "n") {
                console.log("Спасибо за игру!");
                rl.close();
            } else {
                console.log("Выбор неверный. Игра закрывается!")
                rl.close();
            }
        });
    });
}

headsOrTails();
