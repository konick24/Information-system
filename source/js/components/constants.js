import {
  AIRCRAFTS,
  EMPLOYEES,
  POSTS,
  ATA,
  AIRCRAFT_TYPES,
  MAINTENANCE,
  CATEGORIES,
} from "./data.js"

const selectParametrs = {
  aircraft: {
    array: AIRCRAFTS,
    words: ['registrationNumber'],
    separator: '',
  },
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
    words: ['aircraft_type', 'board'],
    separator: '-',
  },
  category: {
    array: CATEGORIES,
    words: ['categoryTitle'],
    separator: '',
  },
  default: {
    words: [],
    separator: '',
  }
}

export { selectParametrs }
