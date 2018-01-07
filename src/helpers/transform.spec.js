import { transformHotel } from './transform'
const hotel = {
  name: 'A Good Hotel',
  minPrice: 100,
  rooms: [
    {
      price: 100
    }, {
      price: 200
    }, {
      price: 300
    }
  ]
}

// Clean up after each test
// afterEach(() => {
//   hotel = {
//     name: 'A Good Hotel',
//     minPrice: 100,
//     rooms: [
//       {
//         price: 100
//       }, {
//         price: 200
//       }, {
//         price: 300
//       }
//     ]
//   }
// })

test('transformHotel with rooms, each room should have defaultCurrency', () => {
  const result = transformHotel(hotel)
  expect(result.rooms[0].defaultCurrency).toEqual('$')
  expect(result.rooms[1].defaultCurrency).toEqual('$')
  expect(result.rooms[2].defaultCurrency).toEqual('$')
})

test('transformHotel without rooms', () => {
  hotel.rooms = null
  const result = transformHotel(hotel)
  expect(result.errorMessage).toEqual('There is no rooms.')
})

test('transformHotel with rooms', () => {
  const result = transformHotel(hotel)
  expect(result.successMessage).toEqual('There are rooms.')
})

// Object.assign instead of changing the original data
test.skip('transformHotel without rooms', () => {
  const noRoomsHotel = Object.assign({}, hotel, {
    rooms: null
  })
  const result = transformHotel(noRoomsHotel)
  expect(result.errorMessage).toEqual('There is no rooms.')
})
