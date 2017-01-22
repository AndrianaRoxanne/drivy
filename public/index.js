'use strict';

//TD1 ex 1 to 5


//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [


{
  'id': '1-pb-92',
  'driver': {  'firstName': 'Paul',  'lastName': 'Bismuth'  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {  'deductibleReduction': false },
  'price': 0,
  'commission': {  'insurance': 0,   'assistance': 0,   'drivy': 0  }
}, 


{
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
              }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];




//ex1  Write code that generates the price for each driver from index.js file

function getRentDays(beginDate, returnDate)
{
  var days = {}                           
  var beginDate = new Date(beginDate);
  var returnDate = new Date(returnDate);
  var tmp = returnDate - beginDate;
  tmp = Math.floor(tmp/1000);             // Différence en secondes 
  days.sec = tmp % 60;                    // nb entier

  tmp = Math.floor((tmp-days.sec)/60);    // Différence en minutes
  days.min = tmp % 60;                    // nb entier

  tmp = Math.floor((tmp-days.min)/60);    // Différence en heures
  days.hour = tmp % 24;                   // nb entier

  tmp = Math.floor((tmp-days.hour)/24);   // Différence en jours
  days.day = tmp;
  return days.day;
}


function price()
{

for(var i=0; i<rentals.length;i++)
{

for(var j=0; j<cars.length;j++)
  {
    if (rentals.carId==cars.id)
    {
      rentals[i].price= getRentDays(rentals[i].pickupDate,rentals[i].returnDate) * cars[j].pricePerDay
              + rentals[i].distance * cars[j].pricePerKm;
    }
  }
}

};

//ex2   Adapt the rental price computation to take these new rules into account.

function price2(){
for(var i=0; i<rentals.length;i++)
{

for(var j=0; j<cars.length;j++)
  {
    if (rentals.carId==cars.id)
    {

      var days = getRentDays(rentals[i].pickupDate,rentals[i].returnDate);


      if (days == 1 ) //nothing changes
          {
            rentals[i].price= rentals[i].getRentDays(rentals[i].pickupDate,rentals[i].returnDate) * cars[j].pricePerDay
              + rentals[i].distance * cars[j].pricePerKm;
          }
     
      if (days > 1 && days <3) //price per day decreases by 10% after 1 day
                              //(days + 1) because the 1st day =0
           {
        rentals[i].price= (days +1) * (cars[j].pricePerDay * 0.9)
              + rentals[i].distance * cars[j].pricePerKm;
            }

       if (days >4 && days <10) //price per day decreases by 30% after 4 days
                              //(days + 1) because the 1st day =0
           {
        rentals[i].price= (days +1) * (cars[j].pricePerDay * 0.7)
              + rentals[i].distance * cars[j].pricePerKm;
            }

         if (days >10) //price per day decreases by 50% after 10 days
                              //(days + 1) because the 1st day =0
           {
        rentals[i].price= (days +1) * (cars[j].pricePerDay * 0.5)
              + rentals[i].distance * cars[j].pricePerKm;
            }

    }
  }
}

};


//ex3   Compute the amount that belongs to the insurance, to the assistance and to drivy.
function amountcommi()
{
  for (var i=0; i<rentals.length;i++)
    {
      //Drivy take a 30% commission on the rental price to cover their costs.
      var commission= rentals[i].price *0.3;

      //insurance: half of commission
      rentals[i].commission.insurance = commission *0.5;

      //roadside assistance 1€ per day
      rentals[i].commission.assistance = getRentDays(rentals[i].pickupDate,rentals[i].returnDate) +1;

      //drivy takes the rest
      rentals[i].commission.drivy= commission - (rentals[i].commission.insurance + rentals[i].commission.assistance);
    }

};


//ex4  Compute the new amount price if the driver subscribed to deductible option.

function accidentOption()
{
  for (var i=0; i<rentals.length;i++)
  {
      if(rentals[i].options.deductibleReduction == true) 
        {
          rentals[i].price+= 4* (getRentDays(rentals[i].pickupDate,rentals[i].returnDate) +1);
        }
  
      rentals[i].commission.drivy +=  4* (getRentDays(rentals[i].pickupDate,rentals[i].returnDate) +1);

  }
};


//ex5 Compute the debit for the driver, the credit of the car owner, insurance, assistance and drivy.

function payActors()
{
  for (var i=0; i<actors.length;i++)
  {
    for (var j=0; j<rentals.length;j++)
    {
      if(actors[i].rentalId == rentals[j].id) 
        {
          for (var k=0; k<actors[i].payment.length; k++)
            //rajouté car plusieurs payments
          {
            //the driver must pay the rental price and the (optional) deductible reduction
            //if deductible reduction option is taken, it is directly included in the price (cf ex4)
            if (actors[i].payment[k].who == 'driver')
              {
                actors[i].payment[k].amount = rentals[j].price;
              }

            //the owner receives the rental price minus the commission
            if (actors[i].payment[k].who == 'owner')
              {
                actors[i].payment[k].amount = rentals[j].price 
                      - (rentals[j].commission.insurance + rentals[j].commission.assistance + rentals[j].commission.drivy);
              }

            //the insurance receives its part of the commission
             if (actors[i].payment[k].who == 'insurance')
              {
                actors[i].payment[k].amount = rentals[j].commission.insurance ;
              }

            //the assistance receives its part of the commission
             if (actors[i].payment[k].who == 'assistance')
              {
                actors[i].payment[k].amount = rentals[j].commission.assistance;
              }

            //drivy receives its part of the commission, plus the deductible reduction
            //if deductible reduction option is taken, it is directly included in the commission (cf ex4)
             if (actors[i].payment[k].who == 'drivy')
              {
                actors[i].payment[k].amount = rentals[j].commission.drivy ;
              }
          }
        }
    }
  }
};




//main
price();
price2();
amountcommi();
accidentOption();
payActors();

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);