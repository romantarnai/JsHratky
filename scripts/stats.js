const ctx = document.getElementById("myChart").getContext("2d");

// Gradient fill
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, '#a4508b');
gradient.addColorStop(1, '#5f0a87');

const labels = [
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
]

const data = {
    labels,
    datasets: [{
        data: [53172, 51385, 45779, 44452, 46263, 45901, 47865, 48290, 49078, 47575, 46814, 43536, 40982, 41893, 42524, 43363, 43649, 43458, 43501, 42401, 43354, 43788, 45380, 44757, 44933, 45344, 45316, 43945, 39790, 36216, 35332, 35303, 36415, 35363, 35398, 37757, 40327, 40231, 39404, 39107],
        label: "Car Crash Deaths",
        fill: true,
        backgroundColor: gradient,
        tension: 0.3,
        pointBackgroundColor: "rgba(178,138,158,0.65)",
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 3,
        hitRadius: 50,
        hoverRadius: 10,
        responsive: true,
    },
};

const myChart = new Chart(ctx, config)