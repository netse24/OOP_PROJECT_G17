import { Bag } from "./Booking/Bag";
import { Booking } from "./Booking/Booking";
import { BookingFlight } from "./Booking/BookingFlight";
import { BookingTrip } from "./Booking/BookingTrip";
import { Meal } from "./Booking/Meal";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger";
import {Airline} from "./Airline/Airline";
import { Gate } from "./Airport/Gate";



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
// console.log(flight.addMeal());

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






// create datetime

// create passenger 
let passenger1 = new Passenger('sreyrea', 'Han', 20, Gender.FEMALE, Meal.HALAL)
let passenger2 = new Passenger('sreyrea', 'Han', 31, Gender.FEMALE, Meal.HALAL)
let passenger3 = new Passenger('sreyrea', 'Han', 19, Gender.FEMALE, Meal.HALAL)


// create bage
let bag = new Bag(12);

//create trip
let trip = new BookingTrip();
trip.addPassengerBag(bag)

// booking 
let booking = new Booking('A1', 'Id1')
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

