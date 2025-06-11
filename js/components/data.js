const AIRCRAFTS = [
  {
    idAircraft: 1,
    factoryNumber: '7890AB',
    registrationNumber: 'RA-78956',
    serialNumber: 'SN-001',
    aircraftType: 'A320',
    flightTime: 1245,
    status: true,
  },
  {
    idAircraft: 2,
    factoryNumber: '1234CD',
    registrationNumber: 'RA-65432',
    serialNumber: 'MSN-002',
    aircraftType: 'Boeing-737',
    flightTime: 1755,
    status: true,
  },
    {
    idAircraft: 3,
    factoryNumber: '5678EF',
    registrationNumber: 'RA-12345',
    serialNumber: 'LN-003',
    aircraftType: 'Ил-96',
    flightTime: 978,
    status: true,
  },
  {
    idAircraft: 4,
    factoryNumber: '9012GH',
    registrationNumber: 'RA-98765',
    serialNumber: 'F/S-004',
    aircraftType: 'Ан-124 Руслан',
    flightTime: 654,
    status: true,
  },
  {
    idAircraft: 5,
    factoryNumber: '3456IJ',
    registrationNumber: 'RA-45678',
    serialNumber: 'SN-005',
    aircraftType: 'A320',
    flightTime: 382,
    status: true,
  }
]

const AIRCRAFT_TYPES = [
  {
    idAircraftType: 1,
    aircraftType: 'A320',
    ipc: '',
  },
  {
    idAircraftType: 2,
    aircraftType: 'Ил-96',
    ipc: '',
  },
  {
    idAircraftType: 3,
    aircraftType: 'Boeing-737',
    ipc: '',
  },
  {
    idAircraftType: 4,
    aircraftType: 'Ан-124 Руслан',
    ipc: '',
  },

]

const EMPLOYEES = [
  {
    idEmployee: 1,
    lastName: 'Корякин',
    firstName: 'Артём',
    patronymic: 'Алексеевич',
    post: 'Механик',
    category: 'A',
    auth: {
      login: 'konick',
      password: '123',
    },
  },
  {
    idEmployee: 2,
    lastName: 'Швец',
    firstName: 'Александр',
    patronymic: 'Дмитриевич',
    post: 'Механик',
    category: 'B',
    auth: {
      login: 'sasha456',
      password: '456',
    },
  },
  {
    idEmployee: 3,
    lastName: 'Клейменова',
    firstName: 'Полина',
    patronymic: 'Валерьевна',
    post: 'Техник',
    category: 'C',
    auth: {
      login: 'polina789',
      password: '789',
    },
  },
  {
    idEmployee: 4,
    lastName: 'Грибов',
    firstName: 'Михаил',
    patronymic: 'Сергеевич',
    post: 'Инженер',
    category: 'C',
    auth: {
      login: 'misha13',
      password: '13',
    },
  },
  {
    idEmployee: 5,
    lastName: 'Терентьев',
    firstName: 'Николай',
    patronymic: 'Александрович',
    post: 'Инженер',
    category: 'C',
    auth: {
      login: 'nik12',
      password: '12',
    },
  }
]

const CATEGORIES = [
  {
    idCategory: 1,
    categoryTitle: 'A',
  },
  {
    idCategory: 2,
    categoryTitle: 'B',
  },
  {
    idCategory: 3,
    categoryTitle: 'C',
  },
]

const SERIAL_NUMBERS = [
  {
    idSerialNumber: 1,
    serialNumber: 'SN-001',
    ataId: '',
  },
  {
    idSerialNumber: 2,
    serialNumber: 'MSN-002',
    ataId: '',
  },
  {
    idSerialNumber: 3,
    serialNumber: 'LN-003',
    ataId: '',
  },
  {
    idSerialNumber: 4,
    serialNumber: 'F/S-004',
    ataId: '',
  },
  {
    idSerialNumber: 5,
    serialNumber: 'SN-005',
    ataId: '',
  },
]

// const COMPONENTS = [
//   {
//     idComponent: 1,
//     ataId: ,
//     quantity: '',
//   }
// ]

const SERVICE_WORKS = [
  {
    idServiceWork: 1,
    task: 'Ил-96 - RA-12345',
    aircraft_type: 'Ил-96',
    board: 'RA-12345',
    date_start: '2025-06-20',
    date_end: '2025-06-26',
    category: 'B',
    technician: 'Швец Александр',
    part_unit: '2700 Система управления полётом',
    quantity: '1',
    date_end_fact: '',
    status: 'В работе',
  },
  {
    idServiceWork: 2,
    task: 'A320 - RA-78956',
    aircraft_type: 'A320',
    board: 'RA-78956',
    date_start: '2025-06-15',
    date_end: '2025-06-17',
    category: 'A',
    technician: 'Корякин Артём',
    part_unit: '7100 Система питания двигателя',
    quantity: '1',
    date_end_fact: '',
    status: 'В работе',
  },
  {
    idServiceWork: 3,
    task: 'A320 - RA-78956',
    aircraft_type: 'A320',
    board: 'RA-78956',
    date_start: '2025-05-10',
    date_end: '2025-05-27',
    category: 'C',
    technician: 'Грибов Михаил',
    part_unit: '7210 Редуктор турбинного двигателя',
    quantity: '1',
    date_end_fact: '2025-05-25',
    status: 'Завершено',
  },
  {
    idServiceWork: 4,
    task: 'Boeing-737 - RA-65432',
    aircraft_type: 'Boeing-737',
    board: 'RA-65432',
    date_start: '2025-05-01',
    date_end: '2025-05-06',
    category: 'B',
    technician: 'Швец Александр',
    part_unit: '2720 Система управления рулём направления',
    quantity: '1',
    date_end_fact: '2025-06-06',
    status: 'Завершено',
  },
  {
    idServiceWork: 5,
    task: 'A320 - RA-45678',
    aircraft_type: 'A320',
    board: 'RA-45678',
    date_start: '2025-06-10',
    date_end: '2025-06-15',
    category: 'A',
    technician: 'Корякин Артём',
    part_unit: '2740 Система управления стабилизатором',
    quantity: '1',
    date_end_fact: '2025-06-13',
    status: 'Завершено',
  },
  {
    idServiceWork: 6,
    task: 'Ил-96 - RA-12345',
    aircraft_type: 'Ил-96',
    board: 'RA-12345',
    date_start: '2025-06-14',
    date_end: '2025-06-18',
    category: 'C',
    technician: 'Терентьев Николай',
    part_unit: '7200 Двигатель',
    quantity: '2',
    date_end_fact: '2025-06-16',
    status: 'Завершено',
  },
]

const MAINTENANCE = [
  {
    idMaintenance: 1,
    date: '2025-06-19',
    technician: 'Корякин Артём',
    aircraft_type: 'Ил-96',
    board: 'RA-12345',
    part_unit: '2700 Система управления полётом',
    additional_information: 'Хьюстон у нас проблемы',
    file: ''
  },
  {
    idMaintenance: 2,
    date: '2025-06-10',
    technician: 'Швец Александр',
    aircraft_type: 'A320',
    board: 'RA-78956',
    part_unit: '7100 Система питания двигателя',
    additional_information: '',
    file: '',
  },
  {
    idMaintenance: 3,
    date: '2025-06-01',
    technician: 'Швец Александр',
    aircraft_type: 'A320',
    board: 'RA-78956',
    part_unit: '7210 Редуктор турбинного двигателя',
    additional_information: '',
    file: '',
  },
  {
    idMaintenance: 4,
    date: '2025-05-01',
    technician: 'Корякин Артём',
    aircraft_type: 'Boeing-737',
    board: 'RA-65432',
    part_unit: '2720 Система управления рулём направления',
    additional_information: 'Хьюстон у нас проблемы',
    file: ''
  },
  {
    idMaintenance: 5,
    date: '2025-06-09',
    technician: 'Швец Александр',
    aircraft_type: 'A320',
    board: 'RA-45678',
    part_unit: '2740 Система управления стабилизатором',
    additional_information: '',
    file: '',
  },
  {
    idMaintenance: 6,
    date: '2025-06-11',
    technician: 'Швец Александр',
    aircraft_type: 'Ил-96',
    board: 'RA-12345',
    part_unit: '7200 Двигатель',
    additional_information: '',
    file: '',
  },
]

const ATA = [
  {
    idAta: 1,
    ataChapter: 27,
    componentCode: '2700 Система управления полётом',
  },
  {
    idAta: 2,
    ataChapter: 27,
    componentCode: '2720 Система управления рулём направления',
  },
  {
    idAta: 3,
    ataChapter: 27,
    componentCode: '2722 Привод руля направления',
  },
  {
    idAta: 4,
    ataChapter: 27,
    componentCode: '2730 Система управления рулём высоты',
  },
  {
    idAta: 5,
    ataChapter: 27,
    componentCode: '2740 Система управления стабилизатором',
  },
  {
    idAta: 6,
    ataChapter: 71,
    componentCode: '7100 Система питания двигателя',
  },
  {
    idAta: 7,
    ataChapter: 71,
    componentCode: '7110 Система кожуха двигателя',
  },
  {
    idAta: 8,
    ataChapter: 72,
    componentCode: '7200 Двигатель',
  },
  {
    idAta: 9,
    ataChapter: 72,
    componentCode: '7210 Редуктор турбинного двигателя',
  },
]

const POSTS = [
  {
    idPost: 1,
    postName: 'Техник',
  },
  {
    idPost: 2,
    postName: 'Механик',
  },
  {
    idPost: 3,
    postName: 'Инженер',
  }
]

const STATUS = [
  {
    idStatus: 1,
    statusText: 'В работе',
  },
    {
    idStatus: 2,
    statusText: 'Завершено',
  },
]

export {
  AIRCRAFTS,
  AIRCRAFT_TYPES,
  EMPLOYEES,
  CATEGORIES,
  SERIAL_NUMBERS,
  // COMPONENTS,
  SERVICE_WORKS,
  MAINTENANCE,
  ATA,
  POSTS,
  STATUS,
}
