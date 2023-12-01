import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanesStore = defineStore('planesStore', () => {
  //PlaneModel
  const planesModels = ref([
    {
      nombre: { valor: 'Boeing 737-400' },
      asientos: '90',
      imagen:
        'https://images.aircharterservice.com/global/aircraft-guide/group-charter/boeing-b737-400-800-900-1.jpg'
    },
    {
      nombre: { valor: 'Embraer 195-E2' },
      asientos: '40',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wider%C3%B8e%2C_LN-WEA%2C_Embraer_E190-E2_%40_HEL.jpg/1200px-Wider%C3%B8e%2C_LN-WEA%2C_Embraer_E190-E2_%40_HEL.jpg'
    }
  ])
  const createPlaneModel = (planeModel) => {
    planesModels.value.push(planeModel)
  }
  const editPlaneModel = (modifiedPlaneModel) => {
    let airport = planesModels.value.filter((pm) => pm.nombre.valor === modifiedPlaneModel.nombre.valor)[0]
    airport.asientos = modifiedPlaneModel.asientos
    airport.imagen = modifiedPlaneModel.imagen
  }
  const findPlaneModel = (planeModelId) => {
    return planesModels.value.filter((pm) => pm.nombre.valor === planeModelId)[0]
  }

  //Plane
  const planes = ref([
    {
      id: 'HK9816',
      modelo: { valor: 'Boeing 737-400' }
    },
    {
      id: 'HK1523X',
      modelo: { valor: 'Boeing 737-400' }
    },
    {
      id: 'HK2208P',
      modelo: { valor: 'Boeing 737-400' }
    },
    {
      id: 'HK0912',
      modelo: { valor: 'Embraer 195-E2' }
    },
    {
      id: 'HK0471',
      modelo: { valor: 'Embraer 195-E2' }
    },
    {
      id: 'HK1323',
      modelo: 'Boeing 737-400'
    }
  ])
  const createPlane = (plane) => {
    planes.value.push(plane)
  }

  //Flights
  const flightsSequence = ref(0)
  const flights = ref([
    {
      id: '313',
      origin: { valor: 'MDE' },
      destination: { valor: 'BOG' },
      departure: '12/11/23 - 03:09',
      arrival: '12/11/23 - 04:20'
    },
    {
      id: '961',
      origin: { valor: 'BOG' },
      destination: { valor: 'BAQ' },
      departure: '14/11/23 - 23:39',
      arrival: '15/11/23 - 01:57'
    }
  ])
  const createFlight = (flight) => {
    flight.id = flightsSequence.value
    flights.value.push(flight)
    flightsSequence.value++
  }
  const changeFlightDate = (newArrivalDate, newDepartureDate, flightId) => {
    let flight = flights.value.filter((flight) => flight.id === flightId)[0]
    flight.departure = newDepartureDate
    flight.arrival = newArrivalDate
  }

  //Aiports
  const airports = ref([
    {
      id: { valor: 'MDE' },
      nombre: 'Jose Maria Cordova',
      ubicacion: 'Colombia, Antioquia, Medellín',
      imagen: 'https://s28477.pcdn.co/wp-content/uploads/2020/05/MDE_1-984x554.jpg'
    },
    {
      id: { valor: 'BOG' },
      nombre: 'El dorado',
      ubicacion: 'Colombia, Cundinamarca, Bogota',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/96/El-dorado-from-air.jpg'
    },
    {
      id: { valor: 'BAQ' },
      nombre: 'Ernesto Cortissoz',
      ubicacion: 'Colombia, Atlantico, Barranquilla',
      imagen:
        'https://files.rcnradio.com/public/2021-10/whatsapp_image_2021-10-06_at_10.48.39_am_1_0.jpeg?VersionId=yzkFcs32yOgd8wCIg_WfSYcjIoeaeHJm'
    }
  ])  
  const createAirport = (airport) => {
    airports.value.push(airport)
  }
  const editAirport = (modifiedAirport, airportId) => {
    let airport = airports.value.filter((ap) => ap.id === airportId)[0]
    airport.nombre = modifiedAirport.nombre
    airport.ubicacion = modifiedAirport.ubicacion
    airport.imagen = modifiedAirport.imagen
  }
  const findAirport = (airportId) => {
    return airports.value.filter((airport) => airport.id === airportId)
  }

  return {
    planes,
    flightsSequence,
    flights,
    createFlight,
    planesModels,
    airports,
    createAirport,
    createPlane,
    createPlaneModel,
    editAirport,
    editPlaneModel,
    changeFlightDate,
    findAirport,
    findPlaneModel
  }
})
