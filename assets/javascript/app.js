//A list of all of states and capitals in the same order.
var usa = {
    state: ["Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"],
    capital: [
        "Montgomery",
        "Juneau",
        "Phoenix",
        "Little Rock",
        "Sacramento",
        "Denver",
        "Hartford",
        "Dover",
        "Tallahassee",
        "Atlanta",
        "Honolulu",
        "Boise",
        "Springfield",
        "Indianapolis",
        "Des Moines",
        "Topeka",
        "Frankfort",
        "Baton Rouge",
        "Augusta",
        "Annapolis",
        "Boston",
        "Lansing",
        "St. Paul",
        "Jackson",
        "Jefferson City",
        "Helena",
        "Lincoln",
        "Carson City",
        "Concord",
        "Trenton",
        "Santa Fe",
        "Albany",
        "Raleigh",
        "Bismarck",
        "Columbus",
        "Oklahoma City",
        "Salem",
        "Harrisburg",
        "Providence",
        "Columbia",
        "Pierre",
        "Nashville",
        "Austin",
        "Salt Lake City",
        "Montpelier",
        "Richmond",
        "Olympia",
        "Charleston",
        "Madison",
        "Cheyenne"
    ]
};
var correct = 0;
var incorrect = 0;
var order = 0;
var randhold = 0;
var used = [];
var holder;
var stateNum;
var capitals;
var total;
var clickable = false;
var count = true;
var started = true;
var rees = true;
var number = 10;
var questionC = 0;
var corec = 0;
var wrongs = 0;
var intervalId = 0
function run() {
    if (count) {
        clearInterval(intervalId)
        intervalId = setInterval(decrement, 1000);
        count = false;
    }
}
function decrement() {
    console.log("enteted")
    number--;
    $("#countz").html("<h2> Count: " + number + "</h2>");
    if (number === 0) {
        clearInterval(intervalId)
        there("time")
    }
}
function reset() {
    count = true;
    number = 10;
    run()
    clickable = true;
    stateNum = random(50)
    print("#statez", "<h3>What is the state capital of " + usa.state[stateNum] + "?</h3>")
    order = random(4)
    print("#imagez", '<img src="assets/images/map.png" width="500" alt="map">')
    for (let l = 0; l < 5; l++) {
        capitals = usa.capital[stateNum]
        used.push(stateNum)
        chck()
        function chck() {
            holder = random(50)
            if (used.includes(holder)) {
                chck()
            }
        }
        if (l === order) {
            print("#capitalz" + l, '<button type="button" class="btn btn-secondary btn-lg btn-block m-1" value =' + l + '>' + usa.capital[stateNum] + '</button>')
        }

        else {
            print("#capitalz" + l, '<button type="button" class="btn btn-secondary btn-lg btn-block m-1" value =' + l + '>' + usa.capital[holder] + '</button>')
            used.push(holder)
        }
    }
}

function fin() {
    print("#countz", "")
    print("#statez", "<h2> Game over</h2>")
    print("#capitalz0", "<h2> Correct Answers: " + corec + "</h2>")
    print("#capitalz1", "<h2> Wrong Answers: " + wrongs + "</h2>")
    print("#capitalz2", "")
    print("#capitalz3", "")
    print("#imagez", '<img src="assets/images/map.png" width="500" alt="map">')
    print("#starz", '<button type="button" class="btn btn-dark"> Play Again </button>')
    $(".star").on("click", function () {
        used = []
        started = true;
        start()
    })
}
function there(pass) {
    print("#countz", "")
    print("#capitalz0", "<h4>" + usa.capital[stateNum] + "</h4>")
    print("#capitalz1", "")
    print("#capitalz2", "")
    print("#capitalz3", "")
    if (pass === "right") {
        corec++
        print("#imagez", '<img src="assets/images/correct.gif" alt="correct">')
        setTimeout(cCheck, 4000)
    }
    else if (pass === "time") {
        wrongs++
        print("#imagez", '<img src="assets/images/time.gif" alt="incorrect">')
        setTimeout(cCheck, 4000)
    }
    else {
        wrongs++
        print("#imagez", '<img src="assets/images/incorrect.gif" alt="incorrect">')
        setTimeout(cCheck, 4000)
    }
};
function cCheck() {
    questionC++
    if (questionC === 5) {
        fin()
    }
    else {
        reset()
    }
}
function print(firs, sec) {
    $(firs).html(sec)
}
function random(thir) {
    return Math.floor(Math.random() * thir)

}
function start() {
    print("#countz", '  ')
    print("#statez", '')
    print("#capitalz0", "")
    print("#capitalz1", "")
    print("#capitalz2", "")
    print("#capitalz3", "")
    print("#starz", '<button type="button" class="btn btn-dark">Start</button>')
    $(".star").on("click", function () {
        if (started) {
            started = false
            print("#starz", " ")
            setTimeout(reset, 250)
        }
    })
}
start()
$(".ans").on("click", function () {
    if (clickable) {
        clickable = false;
        total = ($(this).attr('value'))
        if (total == order) {
            clearInterval(intervalId)
            there("right");
        }
        else {
            clearInterval(intervalId)
            there("wrong");
        }
    }
})