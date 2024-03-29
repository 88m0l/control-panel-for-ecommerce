import "../../../node_modules/chart.js/dist/Chart.js";

(function(){
    const chartCanvas= document.getElementById("example-chart");
    const data= JSON.parse(chartCanvas.parentElement.dataset.values);
    const brandColor= (window.getComputedStyle(chartCanvas)).getPropertyValue("--color-brand")
    const chart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: ['January','February','March','April','May','June',],
            datasets: [{
                label: "مبيعات الشهر",
                data: data,
                borderColor: brandColor,
                backgroundColor: "transparent",
                lineTension: 0.2
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    position:"top"
                }]
            }
        }
    });

    const navigation= document.querySelector(".c-table-navigation");
    const randomArray= (mylength, max) => Array.from({length: mylength}, () => Math.round(Math.random()*max));
    navigation.addEventListener("click", () => {
        chart.data.dataset[0].data= randomArray(12,1200);
        chart.update();
    })
})();