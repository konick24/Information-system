/*
массив объуктов с сотрудниками
у одного сотрудника есть следующие данные:
-id,
-ФИО,
-post(должность),
-skill(навыки(какие самолёты он обучен обслуживать))
*/

const EMPLOYEES = [
  {
    id: 1,
    lastName: 'Корякин',
    firstName: 'Артем',
    patronymin: 'Алексеевич',
    post: 'Инженер',
    skill: '',
    auth: {
      login: 'konick',
      password: '123',
    },
  },
  {
    id: 2,
    lastName: 'Швец',
    firstName: 'Александр',
    patronymin: 'Дмитриевич',
    post: 'Инженер',
    skill: '',
    auth: {
      login: 'sasha456',
      password: '456',
    },
  }
]

export {EMPLOYEES}
