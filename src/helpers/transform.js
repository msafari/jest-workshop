function transformHotel (hotel) {
  if (hotel.rooms) {
    const formattedRooms = hotel.rooms.map(room => {
      room.defaultCurrency = '$'
      return room
    })
    return Object.assign({}, hotel, {
      rooms: formattedRooms,
      successMessage: 'There are rooms.'
    })
  } else {
    return Object.assign({}, hotel, {
      errorMessage: 'There is no rooms.'
    })
  }
}

export {
  transformHotel
}
