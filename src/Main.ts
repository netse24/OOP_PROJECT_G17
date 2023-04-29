import { BookingFlight } from "./Booking/BookingFlight";
import { Meal } from "./Booking/Meal";
import { Flight } from "./Flight/Flight";
import { Chef } from "./Person/Chef";
import { Gender } from "./Person/Gender";


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


//  As an airline manager, I want to find out how much salary I pay all my employees.
