var Arena = require('../server/models/Arena.js')



var arenasPartial = [
  {
    image: "Air-Canada-Center.JPG",
    arena: "Air Canada Centre",
    location: "Toronto, Ontario",
    team: "Toronto Maple Leafs",
    teamLogo:"Toronto-maple-leafs.png",
    capacity: "18,819",
    opened: 1999,
    teamId: "mapleleafs"

  },
  {
    image: "Amalie-Arena.jpg",
    arena: "Amalie Arena",
    location: "Tampa, Florida",
    team: "Tampa Bay Lightning",
    teamLogo:"Tampa-Bay-lightning.png",
    capacity: "19,092",
    opened: 1996,
    teamId: "lightning"
  },
  {
    image: "American-Airlines-Center.jpg",
    arena: "American Airlines Center",
    location: "Dallas, Texas",
    team: "Dallas Stars",
    teamLogo:"Dallas-stars.png",
    capacity: "18,532",
    opened: 2001,
    teamId: "stars"
  },
  {
    image: "BB&T-Center.JPG",
    arena: "BB&T Center",
    location: "Sunrise, Florida",
    team: "Florida Panthers",
    teamLogo:"Florida-panthers.png",
    capacity: "19,250",
    opened: 1998,
    teamId: "panthers"
  },
  {
    image: "Barclays-Center.jpg",
    arena: "Barclays Center",
    location: "Brooklyn, New York",
    team: "New York Islanders",
    teamLogo:"New-York-islanders.png",
    capacity: "15,795",
    opened: 2012,
    teamId: "islanders"
  },
  {
    image: "Bell-Centre.jpg",
    arena: "Bell Centre",
    location: "Montreal, Quebec",
    team: "Montreal Canadiens",
    teamLogo:"Montreal-canadiens.jpg",
    capacity: "21,288",
    opened: 1996,
    teamId: "canadiens"

  },
  {
    image: "Bridgestone-Arena.jpg",
    arena: "Bridgestone Arena",
    location: "Nashville, Tennessee",
    team: "Nashville Predators",
    teamLogo:"Nashville-predators.png",
    capacity: "17,113",
    opened: 1996,
    teamId: "predators"

  },
  {
    image: "Canadian-Tire-Center.jpg",
    arena: "Canadian Tire Centre",
    location: "Ottawa, Ontario",
    team: "Ottawa Senators",
    teamLogo:"Ottawa-senators.jpg",
    capacity: "19,153",
    opened: 1996,
    teamId: "senators"

  },
  {
    image: "Consol-Energy-Center.jpg",
    arena: "Consol Energy Center",
    location: "Pittsburgh, Pennsylvania",
    team: "Pittsburgh Penguins",
    teamLogo:"Pittsburgh-penguins.png",
    capacity: "18,387",
    opened: 2010,
    teamId: "penguins"

  },
  {
    image: "First-Niagra-Center.jpg",
    arena: "First Niagara Center",
    location: "Buffalo, New York",
    team: "Buffalo Sabres",
    teamLogo:"Buffalo-sabres.png",
    capacity: "19,070",
    opened: 1996,
    teamId: "sabres"

  },
  {
    image: "Gila-River-Arena.jpg",
    arena: "Gila River Arena",
    location: "Glendale, Arizona",
    team: "Arizona Coyotes",
    teamLogo:"Arizona-coyotes.png",
    capacity: "17,125",
    opened: 2003,
    teamId: "coyotes"

  },
  {
    image: "Honda-Center.JPG",
    arena: "Honda Center",
    location: "Anaheim, California",
    team: "Anaheim Ducks",
    teamLogo:"Anaheim-ducks.jpg",
    capacity: "17,174",
    opened: 1993,
    teamId: "ducks"

  },
  {
    image: "Joe-Louis-Arena.JPG",
    arena: "Joe Louis Arena",
    location: "Detroit, Michigan",
    team: "Detroit Red Wings",
    teamLogo:"Detroit-red-wings.gif",
    capacity: "20,027",
    opened: 1979,
    teamId: "redwings"

  },
  {
    image: "Madison-Square-Garden.jpg",
    arena: "Madison Square Garden",
    location: "New York City, New York",
    team: "New York Rangers",
    teamLogo:"New-York-rangers.png",
    capacity: "18,006",
    opened: 1968,
    teamId: "rangers"

  },
  {
    image: "MTS-Centre.jpg",
    arena: "MTS Centre",
    location: "Winnipeg, Manitoba",
    team: "Winnipeg Jets",
    teamLogo:"Winnipeg-jets.png",
    capacity: "15,294",
    opened: 2004,
    teamId: "jets"

  },
  {
    image: "Nationwide-Arena.jpg",
    arena: "Nationwide Arena",
    location: "Columbus, Ohio",
    team: "Columbus Blue Jackets",
    teamLogo:"Columbus-blue-jackets.png",
    capacity: "18,144",
    opened: 2000,
    teamId: "bluejackets"

  },
  {
    image: "Pepsi-Center.jpg",
    arena: "Pepsi Center",
    location: "Denver, Colorado",
    team: "Colorado Avalanche",
    teamLogo:"Colorado-avalanche.png",
    capacity: "18,007",
    opened: 1999,
    teamId: "avalanche"

  },
  {
    image: "PNC-Arena.JPG",
    arena: "PNC Arena",
    location: "Raleigh, North Carolina",
    team: "Carolina Hurricanes",
    teamLogo:"Carolina-Hurricanes.png",
    capacity: "18,680",
    opened: 1999,
    teamId: "hurricanes"

  },
  {
    image: "Prudential-Center.JPG",
    arena: "Prudential Center",
    location: "Newark, New Jersey",
    team: "New Jersey Devils",
    teamLogo:"New-Jersey-devils.gif",
    capacity: "17,625",
    opened: 2007,
    teamId: "devils"

  },
  {
    image: "Rogers-Arena.jpg",
    arena: "Rogers Arena",
    location: "Vancouver, British Colombia",
    team: "Vancouver Canucks",
    teamLogo:"Vancouver-canucks.jpg",
    capacity: "18,910",
    opened: 1995,
    teamId: "canucks"

  },
  {
    image: "Rogers-Place.jpg",
    arena: "Rogers Place",
    location: "Edmonton, Alberta",
    team: "Edmonton Oilers",
    teamLogo:"Edmonton-oilers.gif",
    capacity: "18,641",
    opened: 2016,
    teamId: "oilers"

  },
  {
    image: "Scotiabank-Saddledome.jpg",
    arena: "Scotiabank Saddledome",
    location: "Calgary, Alberta",
    team: "Calgary Flames",
    teamLogo:"Calgary-flames.jpg",
    capacity: "19,289",
    opened: 1983,
    teamId: "flames"

  },
  {
    image: "SAP-Center.jpg",
    arena: "SAP Center",
    location: "San Jose, California",
    team: "San Jose Sharks",
    teamLogo:"San-Jose-sharks.png",
    capacity: "17,562",
    opened: 1993,
    teamId: "sharks"

  },
  {
    image: "Scottrade-Center.jpg",
    arena: "Scottrade Center",
    location: "St. Louis, Missouri",
    team: "St. Louis Blues",
    teamLogo:"St.Louis-blues.png",
    capacity: "19,150",
    opened: 1994,
    teamId: "blues"

  },
  {
    image: "Staples-Center.jpg",
    arena: "Staples Center",
    location: "Los Angeles, California",
    team: "Los Angeles Kings",
    teamLogo:"Los-Angeles-kings.png",
    capacity: "18,230",
    opened: 1999,
    teamId: "kings"

  },
  {
    image: "TD-Garden.JPG",
    arena: "TD Garden",
    location: "Boston, Massachusetts",
    team: "Boston Bruins",
    teamLogo:"Boston-bruins.png",
    capacity: "17,565",
    opened: 1995,
    teamId: "bruins"

  },
  {
    image: "United-Center.jpg",
    arena: "United Center",
    location: "Chicago, Illinois",
    team: "Chicago Blackhawks",
    teamLogo:"Chicago-blackhawks.png",
    capacity: "19,717",
    opened: 1994,
    teamId: "blackhawks"

  },
  {
    image: "Verizon-Center.jpg",
    arena: "Verizon Center",
    location: "Washington, D.C.",
    team: "Washington Capitals",
    teamLogo:"Washington-capitals.png",
    capacity: "18,506",
    opened: 1997,
    teamId: "capitals"

  },
  {
    image: "Wells-Fargo-Center.jpg",
    arena: "Wells Fargo Center",
    location: "Philadelphia, Pennsylvania",
    team: "Philadelphia Flyers",
    teamLogo:"Philadelphia-flyers.png",
    capacity: "19,543",
    opened: 1996,
    teamId: "flyers"

  },
  {
    image: "Xcel-Energy-Center.jpg",
    arena: "Xcel Energy Center",
    location: "Saint Paul, Minnesota",
    team: "Minnesota Wild",
    teamLogo:"Minnesota-wild.gif",
    capacity: "17,954",
    opened: 2000,
    teamId: "wild"

  }
]


module.exports = function() {
  Arena.remove({}, function(err) {
    if(err) return console.log(err)
    arenasPartial.forEach(function(el) {
       Arena.create(el, function(err, arena) {
         if(err) return console.log(err)
       })
    })
    console.log("arenas created!")
  })
}
