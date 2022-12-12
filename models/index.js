const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// Create the Associations here
// Traveller.hasMany(Trip, {
//     foreignKey: "traveller_id",
//     onDelete: "CASCADE"
// });

// Trip.hasOne(Location, {
//     foreignKey: "location_id",
//     onDelete: "CASCADE"
// });


Traveller.belongsToMany(Location, {
    through: Trip
  });
  
Location.belongsToMany(Traveller, {
    through: Trip
  });
  

module.exports = { Traveller, Location, Trip };
