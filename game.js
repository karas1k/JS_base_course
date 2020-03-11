let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            // Получаем направление от игрока.
            const direction = mover.getDirection();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            // Получаем следующую точку пользователя в зависимости от направления.
            const nextPoint = mover.getNextPosition(direction);
            // Проверяем не выходит ли позиция за пределы поля
            // Если не выходит, то двигаем
            if (mover.canPosition(nextPoint)) {
                player.move(nextPoint);
            }
            else {
                alert('Вы пытаетесь выйти за пределы поля! Выберите другое направление:' +
                    ' 1, 2, 3, 4, 6, 7, 8 или 9!')
            }

            renderer.clear();
            renderer.render();
           
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Ваше положение на поле в виде о.");
        // Отображаем нашу игру.
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();