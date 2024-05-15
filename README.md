### Hexlet tests and linter status:

[![Actions Status](https://github.com/AleksandrWoW/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AleksandrWoW/frontend-project-44/actions)

### Maintainability Badge

[![Maintainability](https://api.codeclimate.com/v1/badges/5f895dd611ea2f4b58ca/maintainability)](https://codeclimate.com/github/AleksandrWoW/frontend-project-44/maintainability)

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
Игры:

- Определение четного числа.
- Определение простого числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение наибольшего общего делителя.

## Установка

```
$ make install
```

## Игра: "Проверка на четность"

Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```

#### Пример игры

[![asciicast](https://asciinema.org/a/9t5qVsvhZz4FUAS52OT3s0Bxd.svg)](https://asciinema.org/a/9t5qVsvhZz4FUAS52OT3s0Bxd)

## Игра: ""Калькулятор"

Суть игры в следующем: пользователю показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```

#### Пример игры

[![asciicast](https://asciinema.org/a/hJlYCw8wcr0bC7a8aF1NjWoYD.svg)](https://asciinema.org/a/hJlYCw8wcr0bC7a8aF1NjWoYD)

## Игра: "НОД"

Необходимо реализовать игру "наибольший общий делитель (НОД)". Суть игры в следующем: пользователю показывается два случайных числа, например, **25 50**. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

#### Запуск игры

```
$ brain-gcd
```

#### Пример игры

[![asciicast](https://asciinema.org/a/eJouskNe3WSkZfRoj2pqvKkv9.svg)](https://asciinema.org/a/eJouskNe3WSkZfRoj2pqvKkv9)

## Игра: "Арифметическая прогрессия"

Суть игры: Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

#### Запуск игры

```
$ brain-progression
```

#### Пример игры

[![asciicast](https://asciinema.org/a/nwljEnNr8QWFuAkZLFN2p5Udj.svg)](https://asciinema.org/a/nwljEnNr8QWFuAkZLFN2p5Udj)

## Игра: "Простое ли число?"

Суть игры: Игроку предлагают случайное число. Ему нужнно ответить **yes**, если число простое или **no** - если нет

#### Запуск игры

```
$ brain-prime
```

#### Пример игры

[![asciicast](https://asciinema.org/a/S9w2iyh80QSbfKhMPxpBFwD2B.svg)](https://asciinema.org/a/S9w2iyh80QSbfKhMPxpBFwD2B)
