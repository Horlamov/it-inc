/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее.
Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет,
оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const movies = [
  { title: "Назад в будущее", rating: 8.5 },
  { title: "Начало", rating: 8.8 },
  { title: "Матрица", rating: 8.8 },
  { title: "Паразиты", rating: 8.6 },
  { title: "Тёмный рыцарь", rating: 9.0 }
]

const sortedMovies = movies.sort((a, b) => {
  if (a.rating < b.rating) {
    return 1
  } else if (a.rating === b.rating) {
    return 0
  } else {
    return -1
  }
})

console.log("Фильмы, отсортированные по рейтингу:", sortedMovies)