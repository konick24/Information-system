const AIRCRAFTS = [
  {
    idAircraft: 1,
    factoryNumber: '765312',
    registrationNumber: '314f134f',
    serialNumber: '3fqwef3435',
    aircraftType: 'a320',
    flightTime: 1245,
    status: true,
  },
    {
    idAircraft: 2,
    factoryNumber: '235231',
    registrationNumber: '786743h',
    serialNumber: '3fqwef3435',
    aircraftType: 'Boeing-737',
    flightTime: 1755,
    status: true,
  },
    {
    idAircraft: 3,
    factoryNumber: '5435434',
    registrationNumber: '345fg',
    serialNumber: '756erfg34',
    aircraftType: 'a320',
    flightTime: 978,
    status: true,
  }
]

const AIRCRAFT_TYPES = [
  {
    idAircraftType: 1,
    aircraftType: 'a320',
    ipc: '',
  },
  {
    idAircraftType: 2,
    aircraftType: 'a319',
    ipc: '',
  },
  {
    idAircraftType: 2,
    aircraftType: 'Boeing-737',
    ipc: '',
  },
]

const EMPLOYEES = [
  {
    idEmployee: 1,
    lastName: 'Корякин',
    firstName: 'Артём',
    patronymic: 'Алексеевич',
    post: 'Техник',
    specializacionId: 43,
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
    post: 'Инженер',
    specializacionId: 34,
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
    post: 'Инженер',
    specializacionId: 12,
    auth: {
      login: 'polina789',
      password: '789',
    },
  }
]

const CATEGORIES = [
  {
    idCategory: 1,
    categoryTitle: 'Роботяга',
  }
]

// const MAINTENANCE_WORKS = [
//   {
//     idMaintenance: 1,
//     maintenanceWorkName: '',
//     flightTime: ,
//     time: ,
//   }
// ]

// const SERIAL_NUMBERS = [
//   {
//     idSerialNumber: 1,
//     serialNumber: '',
//     ataId: ,
//   }
// ]

// const COMPONENTS = [
//   {
//     idComponent: 1,
//     ataId: ,
//     typeId: ,
//     quantity: '',
//   }
// ]

// const COMPONENT_TYPES = [
//   {
//     idType: 1,
//     typeName: ,
//   }
// ]

const SERVICE_WORKS = [
  {
    idServiceWork: 1,
    task: '',
    date_start: '20-06-2025',
    date_end: '26-06-2025',
    category: 'Работяга',
    technician: 'Швец Александр',
    part_unit: '5345',
    quantity: '1',
    date_end_fact: '',
    status: 'В работе',
  },
    {
    idServiceWork: 2,
    task: '',
    date_start: '15-06-2025',
    date_end: '17-06-2025',
    category: 'Ст. Специалист',
    technician: 'Корякин Артём',
    part_unit: '5345',
    quantity: '1',
    date_end_fact: '',
    status: 'В работе',
  },
]

const MAINTENANCE = [
  {
    idMaintenance: 1,
    date: '20-06-2025',
    technician: 'Корякин Артём',
    aircraft_type: 'a319',
    board: '314f134f',
    part_unit: '111',
    additional_information: 'Хьюстон у нас проблемы',
    file: ''
  },
  {
    idMaintenance: 2,
    date: '26-06-2025',
    technician: 'Швец Александр',
    aircraft_type: 'a320',
    board: '314f134f',
    part_unit: '222',
    additional_information: '',
    file: '',
  }
]

const ATA = [
  {
    idAta: 1,
    ataChapter: 23,
    componentCode: 2301,
  },
  {
    idAta: 2,
    ataChapter: 7,
    componentCode: 702,
  },
  {
    idAta: 3,
    ataChapter: 10,
    componentCode: 1011,
  }
]

const POSTS = [
  {
    idPost: 1,
    postName: 'Техник',
  },
  {
    idPost: 2,
    postName: 'Инженер',
  }
]

export {
  AIRCRAFTS,
  AIRCRAFT_TYPES,
  EMPLOYEES,
  CATEGORIES,
  // MAINTENANCE_WORKS,
  // SERIAL_NUMBERS,
  // COMPONENTS,
  // COMPONENT_TYPES,
  SERVICE_WORKS,
  MAINTENANCE,
  ATA,
  POSTS,
}
