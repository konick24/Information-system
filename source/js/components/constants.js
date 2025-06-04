import {
  EMPLOYEES,
  POSTS,
  ATA,
  AIRCRAFT_TYPES,
  MAINTENANCE,
  SPECIALIZATIONS
} from "./data.js"

const selectParametrs = {
  post: {
    array: POSTS,
    words: ['postName'],
    separator: '',
  },
  executor: {
    array: EMPLOYEES,
    words: ['lastName', 'firstName'],
    separator: '',
  },
  component: {
    array: ATA,
    words: ['componentCode'],
    separator: '',
  },
  aircraftType: {
    array: AIRCRAFT_TYPES,
    words: ['aircraftType'],
    separator: '',
  },
  task: {
    array: MAINTENANCE,
    words: ['Тип ВС', 'Деталь/Агрегат'],
    separator: '-',
  },
  specialization: {
    array: SPECIALIZATIONS,
    words: ['specializationTitle'],
    separator: '',
  },
  default: {
    words: [],
    separator: '',
  }
}

export { selectParametrs }
