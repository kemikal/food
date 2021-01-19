let root = document.getElementById("root");

let weekday = [
    {dayName: "Måndag", lunch: "pasta med lök"},
    {dayName: "Tisdag", lunch: "soppa på spik"},
    {dayName: "Onsdag", lunch: "raggmunkar"},
    {dayName: "Torsdag", lunch: "hamburgare"},
    {dayName: "Fredag", lunch: "tacos"},
    {dayName: "Lördag", lunch: "", isClosed: true},
    {dayName: "Söndag", lunch: "", isClosed: true}
];

// SKAPA MINA ELEMENT
let headContainer = document.createElement('div');
headContainer.id = "headContainer";
root.appendChild(headContainer);

let lunchContainer = document.createElement('div');
lunchContainer.id = "lunchContainer";
root.appendChild(lunchContainer);

// CREATE WEEKDAY MENY
    let weekMeny = "<ul class='weekMeny'>";

    for (day in weekday) {
        weekMeny += `<li class='weekday' id="${weekday[day].dayName}">${weekday[day].dayName}</li>`;
    }

    weekMeny += "<ul>";

headContainer.insertAdjacentHTML("afterbegin", weekMeny);

// FÅNGA TRYCK UTIFRÅN MENYN
headContainer.addEventListener("click", function(evt) {
    printWeekdayFood(evt.target.id);
});

// Skriv ut dagens lunch
function printWeekdayFood(day) {
    const getDay = weekday.find(element => element.dayName == day);
    let todaysLunch = (getDay.isClosed == true) ? "<div>Idag är det stängt</div>" : "<div>Idag serverar vi " + getDay.lunch + "</div>";

    lunchContainer.innerHTML = "";
    lunchContainer.insertAdjacentHTML("afterbegin", todaysLunch);
};