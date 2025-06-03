// const AIRCRAFTS = [
//   {
//     idAircraft: 1,
//     factoryNumber: '',
//     registrationNumber: '',
//     serialNumberId: '',
//     aircraftTypeId: ,
//     flightTime: ,
//     status: true,
//   }
// ]

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
    post: 'mechanic',
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
    post: 'administrator',
    specializacionId: 34,
    auth: {
      login: 'sasha456',
      password: '456',
    },
  }
]

const SPECIALIZATIONS = [
  {
    idSpecialization: 1,
    specializationTitle: 'Роботяга',
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

// const SERVICE_WORKS = [
//   {
//     idServiceWork: 1,
//     maintenanceId: ,
//     scheduledStartDate: '',
//     scheduledEndDate: '',
//     employeeId: ,
//     maintenanceWorkId: ,
//     startDateActual: '',
//     endDateActual: '',
//     status: ,
//   }
// ]

const MAINTENANCE = [
  // {
  //   idMaintenance: 1,
  //   data: '',
  //   employeeId: 23,
  //   aircraftId: 32,
  //   ataId: 45,
  //   quantity: '',
  //   description: '',
  // }
  {
    'Дата': '20-06-2025',
    'Исполнитель': 'Корякин Артём',
    'Тип ВС': 'a319',
    'Деталь/Агрегат': '111',
    'Доп. Инф.': 'Хьюстон у нас проблемы',
  },
  {
    'Дата': '26-06-2025',
    'Исполнитель': 'Швец Александр',
    'Тип ВС': 'a320',
    'Деталь/Агрегат': '222',
    'Доп. Инф.': '',
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
    postName: 'mechanic',
  },
  {
    idPost: 2,
    postName: 'administrator',
  }
]

export {
  // AIRCRAFTS,
  AIRCRAFT_TYPES,
  EMPLOYEES,
  SPECIALIZATIONS,
  // MAINTENANCE_WORKS,
  // SERIAL_NUMBERS,
  // COMPONENTS,
  // COMPONENT_TYPES,
  // SERVICE_WORKS,
  MAINTENANCE,
  ATA,
  POSTS,
}
