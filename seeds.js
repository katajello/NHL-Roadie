var arenasPartial = [
  {
    "image": "./images/arenas/Air-Canada-Center.JPG",
    "arena": "Air Canada Centre",
    "location": "Toronto, Ontario",
    "team": "Toronto Maple Leafs",
    "team-logo":"./images/Toronto-maple-leafs.png",
    "capacity": "18,819",
    "opened": 1999,
    "team-id": "mapleleafs"

  },
  {
    "image": "./images/arenas/Amalie-Arena.jpg",
    "arena": "Amalie Arena",
    "location": "Tampa, Florida",
    "team": "Tampa Bay Lightning",
    "team-logo":"Tampa-Bay-lightning.png",
    "capacity": "19,092",
    "opened": 1996,
    "team-id": "lightning"
  },
  {
    "image": "./images/arenas/American-Airlines-Center.jpg",
    "arena": "American Airlines Center",
    "location": "Dallas, Texas",
    "team": "Dallas Stars",
    "team-logo":"Dallas-stars.png",
    "capacity": "18,532",
    "opened": 2001,
    "team-id": "stars"
  }
]

var arenasRemaining = [
  {
    "image": "",
    "arena": "BB&T Center",
    "location": "Sunrise, Florida",
    "team": "Florida Panthers",
    "capacity": "19,250",
    "opened": 1998,
    "Ref(s)": "[4]"
  },
  {
    "image": "",
    "arena": "Barclays Center",
    "location": "Brooklyn, New York",
    "team": "New York Islanders",
    "capacity": "15,795",
    "opened": 2012,
    "Ref(s)": "[5]"
  },
  {
    "image": "",
    "arena": "Bell Centre",
    "location": "Montreal, Quebec",
    "team": "Montreal Canadiens",
    "capacity": "21,288",
    "opened": 1996,
    "Ref(s)": "[6]"
  },
  {
    "image": "",
    "arena": "Bridgestone Arena",
    "location": "Nashville, Tennessee",
    "team": "Nashville Predators",
    "capacity": "17,113",
    "opened": 1996,
    "Ref(s)": "[3][7]"
  },
  {
    "image": "",
    "arena": "Canadian Tire Centre",
    "location": "Ottawa, Ontario",
    "team": "Ottawa Senators",
    "capacity": "19,153",
    "opened": 1996,
    "Ref(s)": "[8]"
  },
  {
    "image": "",
    "arena": "Consol Energy Center",
    "location": "Pittsburgh, Pennsylvania",
    "team": "Pittsburgh Penguins",
    "capacity": "18,387",
    "opened": 2010,
    "Ref(s)": "[9]"
  },
  {
    "image": "",
    "arena": "First Niagara Center",
    "location": "Buffalo, New York",
    "team": "Buffalo Sabres",
    "capacity": "19,070",
    "opened": 1996,
    "Ref(s)": "[3]"
  },
  {
    "image": "",
    "arena": "Gila River Arena",
    "location": "Glendale, Arizona",
    "team": "Arizona Coyotes",
    "capacity": "17,125",
    "opened": 2003,
    "Ref(s)": "[10]"
  },
  {
    "image": "",
    "arena": "Honda Center",
    "location": "Anaheim, California",
    "team": "Anaheim Ducks",
    "capacity": "17,174",
    "opened": 1993,
    "Ref(s)": "[10]"
  },
  {
    "image": "",
    "arena": "Joe Louis Arena",
    "location": "Detroit, Michigan",
    "team": "Detroit Red Wings",
    "capacity": "20,027",
    "opened": 1979,
    "Ref(s)": "[11]"
  },
  {
    "image": "",
    "arena": "Madison Square Garden",
    "location": "New York City, New York",
    "team": "New York Rangers",
    "capacity": "18,006",
    "opened": "1968 †",
    "Ref(s)": "[12]"
  },
  {
    "image": "",
    "arena": "MTS Centre",
    "location": "Winnipeg, Manitoba",
    "team": "Winnipeg Jets",
    "capacity": "15,294",
    "opened": 2004,
    "Ref(s)": ""
  },
  {
    "image": "",
    "arena": "Nationwide Arena",
    "location": "Columbus, Ohio",
    "team": "Columbus Blue Jackets",
    "capacity": "18,144",
    "opened": 2000,
    "Ref(s)": "[13]"
  },
  {
    "image": "",
    "arena": "Pepsi Center",
    "location": "Denver, Colorado",
    "team": "Colorado Avalanche",
    "capacity": "18,007",
    "opened": 1999,
    "Ref(s)": "[10]"
  },
  {
    "image": "",
    "arena": "PNC Arena",
    "location": "Raleigh, North Carolina",
    "team": "Carolina Hurricanes",
    "capacity": "18,680",
    "opened": 1999,
    "Ref(s)": "[14]"
  },
  {
    "image": "",
    "arena": "Prudential Center",
    "location": "Newark, New Jersey",
    "team": "New Jersey Devils",
    "capacity": "17,625",
    "opened": 2007,
    "Ref(s)": "[15]"
  },
  {
    "image": "",
    "arena": "Rogers Arena",
    "location": "Vancouver, British Colombia",
    "team": "Vancouver Canucks",
    "capacity": "18,910",
    "opened": 1995,
    "Ref(s)": ""
  },
  {
    "image": "",
    "arena": "Rogers Place",
    "location": "Edmonton, Alberta",
    "team": "Edmonton Oilers",
    "capacity": "18,641",
    "opened": 2016,
    "Ref(s)": "[16]"
  },
  {
    "image": "",
    "arena": "Scotiabank Saddledome",
    "location": "Calgary, Alberta",
    "team": "Calgary Flames",
    "capacity": "19,289",
    "opened": 1983,
    "Ref(s)": "[10]"
  },
  {
    "image": "",
    "arena": "SAP Center",
    "location": "San Jose, California",
    "team": "San Jose Sharks",
    "capacity": "17,562",
    "opened": 1993,
    "Ref(s)": "[10]"
  },
  {
    "image": "",
    "arena": "Scottrade Center",
    "location": "St. Louis, Missouri",
    "team": "St. Louis Blues",
    "capacity": "19,150",
    "opened": 1994,
    "Ref(s)": "[3]"
  },
  {
    "image": "",
    "arena": "Staples Center",
    "location": "Los Angeles, California",
    "team": "Los Angeles Kings",
    "capacity": "18,230",
    "opened": 1999,
    "Ref(s)": "[3]"
  },
  {
    "image": "",
    "arena": "TD Garden",
    "location": "Boston, Massachusetts",
    "team": "Boston Bruins",
    "capacity": "17,565",
    "opened": 1995,
    "Ref(s)": "[17]"
  },
  {
    "image": "",
    "arena": "United Center",
    "location": "Chicago, Illinois",
    "team": "Chicago Blackhawks",
    "capacity": "19,717",
    "opened": 1994,
    "Ref(s)": "[18]"
  },
  {
    "image": "",
    "arena": "Verizon Center",
    "location": "Washington, D.C.",
    "team": "Washington Capitals",
    "capacity": "18,506",
    "opened": 1997,
    "Ref(s)": "[3]"
  },
  {
    "image": "",
    "arena": "Wells Fargo Center",
    "location": "Philadelphia, Pennsylvania",
    "team": "Philadelphia Flyers",
    "capacity": "19,543",
    "opened": 1996,
    "Ref(s)": "[3]"
  },
  {
    "image": "",
    "arena": "Xcel Energy Center",
    "location": "Saint Paul, Minnesota",
    "team": "Minnesota Wild",
    "capacity": "17,954",
    "opened": 2000,
    "Ref(s)": "[10]2013"
  }
]
