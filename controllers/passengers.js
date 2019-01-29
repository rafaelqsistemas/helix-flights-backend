const Passenger = require('../models/Passenger');

exports.getAll = async (req, res, next) => {
    const passengers = await Passenger.getAll();
    res.status(200).send({data: passengers});
}


//This method will save immediately our object to the database
exports.postPassenger = (req,res,next) => 
{
    const name= req.body.name;
    const lastname = req.body.lastname;
    const passport = req.body.passport;
    const birthdate= req.body.birthdate;
    const country= req.body.country; 

    Passenger.create({ //Method provided by sequelize, 
        name: name,
        lastname: lastname,
        passport:passport,
        birthdate:birthdate,
        country:country,

    }).then(result => { 
            
        console.log(result);
        console.log('Created Passenger');

    }).catch(err =>{ 

        console.log(err);
    });

}

//This method gets all the Passengers from the database
exports.getPassengers = (req,res,next) => 
{
    Passenger.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Passenger
exports.postEditPassenger = (req,res,next) =>
{
    const id = req.body.id;
    const updname= req.body.name;
    const updlastname = req.body.lastname;
    const updpassport= req.body.passport;
    const updbirthdate= req.body.birthdate;
    const updcountry= req.body.country;

    Passenger.findByPk(id).then(Passenger=>
        {
            Passenger.name = updname;
            Passenger.lastname = updlastname;
            Passenger.passport= updpassport;
            Passenger.birthdate= updbirthdate;
            Passenger.country= updcountry;

            return Passenger.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Passenger')

    }).catch(err =>{ 

        console.log(err);});
}

//This method deletes the Passenger of the database
exports.postDeletePassenger = (req, res, next) => {
    const id = req.body.id;

    Passenger.findByPk(id)
      .then(Passenger => {
        return Passenger.destroy();
      })
      .then(result => {
        console.log('Passenger deleted successfully');
      })
      .catch(err => console.log(err));
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const Passengere = await Passenger.findByPk(id);
    res.status(200).json(Passengere);
  }


