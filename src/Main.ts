import { Bag } from "./Booking/Bag";
import { Booking } from "./Booking/Booking";
import { BookingFlight } from "./Booking/BookingFlight";
import { BookingTrip } from "./Booking/BookingTrip";
import { Meal } from "./Booking/Meal";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger";


// create booking flight
let bookingFlight = new BookingFlight();
bookingFlight.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight.getAMealFromBookingFlight()

// create chef
let chef = new Chef(200,'Net','Se',19,Gender.MALE)

// create flight 
let flight = new Flight('AD1');
flight.addBookingFlight(bookingFlight);

flight.addMealFromBookingFlight();


// console.log(flight.addMeal());

chef.getMeals(flight);



console.log(chef.getMeals(flight));
// create passenger 
// let passenger1 =

chef.getMeals(flight)

// create datetime

// create passenger 
let passenger1 = new Passenger('sreyrea','Han',20,Gender.FEMALE,Meal.HALAL)
let passenger2 = new Passenger('sreyrea','Han',31,Gender.FEMALE,Meal.HALAL)
let passenger3 = new Passenger('sreyrea','Han',19,Gender.FEMALE,Meal.HALAL)


// create bage
let bag = new Bag(12);

//create trip
let trip = new BookingTrip();
trip.addPassengerBag(bag)

// booking 
let booking = new Booking('A1','Id1')
booking.addPassenger(passenger1)
booking.addPassenger(passenger2)
booking.addPassenger(passenger3)
booking.addBookingTrips(trip)
console.log(booking)

//  As an airline manager, I want to find out how much salary I pay all my employees.
