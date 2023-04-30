import { Bag } from "./Booking/Bag";
import { Booking } from "./Booking/Booking";
import { BookingFlight } from "./Booking/BookingFlight";
import { BookingTrip, ReturnTicket } from "./Booking/BookingTrip";
import { Meal } from "./Booking/Meal";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger";
import {Airline} from "./Airline/Airline";
import { Gate } from "./Airport/Gate";
import { DateTime } from "./Calendar/DateTime";
import { Pilot } from "./Person/Pilot";

// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)
let YAYA_Airline = new Airline("YAYA");
let passenger_1 = new Passenger('sreyrea', 'Han', 20, Gender.FEMALE, Meal.HALAL);

let bookingTicket1 = new Booking("A12","B12");
bookingTicket1.isPassengerRegferenceNumberEqual("A12");

bookingTicket1.addPassenger(passenger_1);

YAYA_Airline.addBooking(bookingTicket1)
passenger_1.setBooking(bookingTicket1);

// console.log(YAYA_Airline.getDetailPassenger("A12"));

// Q2. As an airline manager, I want to know for a given flight, how many passengers were booking return tickets.
let airline1 = new Airline('PP Airline');
let emyployee1 = new Employee(1000, "ta", "r", 25, Gender.MALE);
let emyployee2 = new Employee(2000, "ta", "r", 30, Gender.FEMALE);
let emyployee3 = new Employee(3000, "ta", "r", 35, Gender.MALE);
let emyployee4 = new Employee(4001, "ta", "r", 40, Gender.FEMALE);
let booking1 = new Booking('B7','ID4');
let booking2 = new Booking('B8','ID5');
let booking3 = new Booking('B9','ID6');

// create passenger 
let passenger1 = new Passenger('sreyrea', 'Han', 20, Gender.FEMALE, Meal.HALAL)
let passenger2 = new Passenger('sreyrea', 'Han', 31, Gender.FEMALE, Meal.HALAL)
let passenger3 = new Passenger('sreyrea', 'Han', 19, Gender.FEMALE, Meal.HALAL)

// passenger booking
booking1.addPassenger(passenger1)
booking2.addPassenger(passenger2)
booking3.addPassenger(passenger3)

let trip1 = new BookingTrip();
let trip2 = new BookingTrip();
let trip3 = new BookingTrip();
trip1.setReturnTicket(ReturnTicket.return);
trip1.setReturnTicket(ReturnTicket.return);

let bookingFlight2 = new BookingFlight();
bookingFlight2.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight2.setAMealFromBookingFlight(Meal.HALAL);
bookingFlight2.getMealsFromBookingFlight()

let bookingFlight3 = new BookingFlight();
bookingFlight3.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight3.getMealsFromBookingFlight()

let bookingFlight4 = new BookingFlight();
bookingFlight4.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight4.getMealsFromBookingFlight()

trip1.addBookingFlight(bookingFlight2)
trip2.addBookingFlight(bookingFlight3)
trip3.addBookingFlight(bookingFlight4)

booking1.addBookingTrips(trip1)
booking1.addBookingTrips(trip2)
booking1.addBookingTrips(trip3)

airline1.addEmployee(emyployee1);
airline1.addEmployee(emyployee2);
airline1.addEmployee(emyployee3);
airline1.addEmployee(emyployee4);
airline1.addBooking(booking1);
console.log("Passenger return ticket :",trip1.getAllReturnTicket()) // test booking trip

// Q3. As an airline pilot, I want to know, for a given date, how many flights I have to join.
let pilot1 = new Pilot(100,'ka','ry',32,Gender.FEMALE)
let date1 = new DateTime('10/05/2023','7:00 AM');
let date2 = new DateTime('10/05/2023','7:00 PM');

let flight1 = new Flight('B2')
let flight2 = new Flight('B3')
let passenger = new Passenger('min','ji',21,Gender.FEMALE,Meal.HALAL) 
let bookingFlight1 = new BookingFlight();
passenger.addBookingFlight(bookingFlight1)
passenger.addBages(new Bag(3))
bookingFlight1.addPassengers(passenger)
bookingFlight1.setAMealFromBookingFlight(Meal.HALAL)
bookingFlight1.setAMealFromBookingFlight(Meal.VEGAN)
bookingFlight1.setAMealFromBookingFlight(Meal.VEGENTARIAN)
pilot1.addDateFlight(date1);
pilot1.addDateFlight(date2);
pilot1.addFlight(flight1);
pilot1.addFlight(flight2);
// console.log(pilot1);


// Q4 ------------------------------------------------
// create booking flight
let bookingFlight = new BookingFlight();
bookingFlight.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight.setAMealFromBookingFlight(Meal.HALAL);
bookingFlight.getMealsFromBookingFlight()

// create chef
let chef = new Chef(200, 'Net', 'Se', 19, Gender.MALE)

// create flight 
let flight = new Flight('AD1');
flight.addBookingFlight(bookingFlight);
flight.addMealFromBookingFlight();
// console.log(flight.getMeals())


chef.addFight(flight);

chef.getMeals();


// console.log(chef.getMeals());

// Q5  As an airline manager, I want to find out how much salary I pay all my employees.

let emy1 = new Employee(1000, "ta", "r", 25, Gender.MALE);
let emy2 = new Employee(2000, "ta", "r", 30, Gender.FEMALE);
let emy3 = new Employee(3000, "ta", "r", 35, Gender.MALE);
let emy4 = new Employee(4001, "ta", "r", 40, Gender.FEMALE);

// create airline 

let ROYAL  = new Airline("ROYAL");
ROYAL.addEmployee(emy1)
ROYAL.addEmployee(emy2)
ROYAL.addEmployee(emy3)
ROYAL.addEmployee(emy4)

// console.log("The money that need to pay for employee:",ROYAL.getAllSalary());



// create bage
let bag = new Bag(12);

//create trip
let trip = new BookingTrip();
trip.addPassengerBag(bag)

// booking 
let booking = new Booking('A12', 'B11')
booking.addPassenger(passenger1)
booking.addPassenger(passenger2)
booking.addPassenger(passenger3)
booking.addBookingTrips(trip)


// Q6 -----------------------------------------------------------------
//create a gate 

let gate1 = new Gate("A12");
let gate2 = new Gate("A13");
let gate3 = new Gate("A14");
let gate4 = new Gate("A15");

flight.addGate(gate1);
flight.addGate(gate2);
flight.addGate(gate3);
flight.addGate(gate4);

bookingFlight.setFlight(flight)
bookingFlight.setAGateInBookingFlight(gate1)

passenger1.addBookingFlight(bookingFlight);
passenger1.getGateForPassenger();

// console.log("passenge gate is:",passenger1.getGateForPassenger()); // passed for find get that passenger waiting for his/her plane;

