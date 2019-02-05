var labels = ["JAKARTA BARAT", "JAKARTA PUSAT", "JAKARTA SELATAN", "JAKARTA TIMUR", "JAKARTA UTARA"]
var bgColor = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9']

var y2017 = [4329, 7128, 26171, 988, 6168]

var ctx = document.getElementById("myCanvas")
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                data: y2017,
                label: "Populasi 2017",
                backgroundColor: bgColor,
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Data Penduduk Asing DKI Jakarta"
        }
      }
})
