$(document).ready(function() {
    // Код выполнится после загрузки DOM
    

    let game_board = []; // игровое поле
    let game_active = true; // игра активна
    let current_player = 'X'; // текущий игрок
    let item_counter = 1; // счетчик для нумерования ячеек
    
    function createGameItem() { // Создаем клетку
        const item = $('<div>', { 
            class: 'game__item',
            'data-id': 'item_' + (item_counter++),
             click: function() {
                //const index = $(this).data('id'); // запоминаем id конкретного элемента на котором был клик
                const current_elem = $(this); // запоминаем текущий элемент и передаем его в обработчик
                makeMove(current_elem);
            } 
        
        });
        return item;
    }
   
    function createGameBoard() { // Создаем поле
        for(let i = 0; i < 9; i++) {
            const elem = createGameItem();
            elem.css('background-color', (i % 2) ? 'var(--color-one)' : 'var(--color-two)');
            $('.game__board').append(elem);
        }
    }

    function makeMove(current_elem) { // Действие игрока
        if(game_active && current_elem.text().trim() === '') { // если игра активна и ячейка не занята, то
            current_elem.text(current_player); // ставим Х или 0 
            current_player = (current_player === 'X') ? 'O' : 'X'; // переход хода
        } else {
            alert('Ячейка уже занята!');
        }
    }


   

    createGameBoard();

});