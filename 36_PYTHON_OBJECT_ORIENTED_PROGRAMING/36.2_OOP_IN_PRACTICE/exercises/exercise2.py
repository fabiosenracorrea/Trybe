class Guest:
  def __init__(self, guestInfo):
    self.name = guestInfo['name']
    self.cpf = guestInfo['cpf']
    self.fullInfo = guestInfo


class HotelRoom:
  def __init__(self, roomInfo):
    self.id = roomInfo['id']
    self.number = roomInfo['number']
    self.floor = roomInfo['floor']
    self.capacity = roomInfo['capacity']
    self.price = roomInfo['price']
    self.booked = False

  def bookRoom(self):
    if (self.booked):
      raise BaseException('Room is already Booked')

    self.booked = True

  def freeRoom(self):
    if (not(self.booked)):
      raise BaseException('Room is not booked')

    self.booked = False

  def updatePrice(self, newPrice):
    self.price = newPrice


class Booking:
  def __init__(self, bookingInfo):
    room = bookingInfo['room']

    if (room.booked):
      raise BaseException('Room is already booked')

    room.bookRoom()

    self.guests = bookingInfo['guests']
    self.room = room


class Hotel:
  def __init__(self, hotelInfo):
    # can validate if bookings are withing provided rooms only etc...

    self.rooms = hotelInfo['rooms']
    self.bookings = hotelInfo['bookings']


  def checkOut(self, room):
    room.freeRoom()

    self.bookings = list(filter(lambda booking: booking.room.id != room.id, self.bookings))

  def checkIn(self, guests):
    guestsCount = len(guests)
    availableRoom = next(filter(lambda room: room.capacity >= guestsCount, self.rooms), None)

    if (not(availableRoom)):
      raise BaseException('No Room Available. Wanna split?')

    booking = Booking({
      'guests': guests,
      'room': availableRoom,
    })

    self.bookings = [*self.bookings, booking]



guestInfo = {
  'name': 'Fabio',
  'cpf': '13483144609',
}

baseRoom = {
  'id': '1',
  'number': 100,
  'floor': 1,
  'price': 300,
  'capacity': 2
}

baseRoom2 = {
  'id': '2',
  'number': 101,
  'floor': 1,
  'price': 400,
  'capacity': 3
}

guest = Guest(guestInfo)

room1 = HotelRoom(baseRoom)
room2 = HotelRoom(baseRoom2)

baseBooking = {
  'guests': [guest],
  'room': room1,
}

booking = Booking(baseBooking)

baseHotel = {
  'rooms': [room1, room2],
  'bookings': [booking],
}

hotel = Hotel(baseHotel)

hotel.checkOut(room1)

hotel.checkIn([guest])
