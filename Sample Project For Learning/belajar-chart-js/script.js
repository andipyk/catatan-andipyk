var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2008,2010,2012,2050,2150]

var World   = [585,660,710,791,978,1262,165,2521,6008,6707,6896,7052,9725,9746]
var Africa  = [86,114,106,106,107,111,133,221,783,973,1022,1052,2478,2308]
var Asia    = [282,350,411,502,635,809,947,1402,37,4054,4164,425,5267,5561]
var Europe  = [168,170,178,190,203,276,408,547,675,732,738,740,734,517]

var ctx = document.getElementById("myCanvas")
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: Africa,
                label: "Africa",
                borderColor: '#3e95cd',
                fill: false,
            },
            {
                data: Asia,
                label: "Asia",
                borderColor: '#8e5ea2',
                fill: false,
            },
            {
                data: Europe,
                label: "Europe",
                borderColor: '#3cba9f',
                fill: false,
            }
        ]
    }
});
