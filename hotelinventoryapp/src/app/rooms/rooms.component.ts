import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  numberOfRooms = '10';
  hideRooms = false
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomList: RoomList[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe",
        amenities: 'AC, Wifi, TV,',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkInTime: new Date('11-Nov-2011'),
        checkOutTime: new Date('13-Nov-2011'),
        rating: 4.66
      },
      {
        roomNumber: 2,
        roomType: "Private suite",
        amenities: 'AC, Wifi, TV, Jacuzzi, Food',
        price: 1500,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkInTime: new Date('12-Nov-2011'),
        checkOutTime: new Date('15-Nov-2011'),
        rating: 4.32
      },
      {
        roomNumber: 3,
        roomType: "Standard",
        amenities: 'Wifi, TV,',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkInTime: new Date('12-Nov-2011'),
        checkOutTime: new Date('15-Nov-2011'),
        rating: 4.25
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }

  printRoom(room : RoomList){
    console.log(room)
  }

}
