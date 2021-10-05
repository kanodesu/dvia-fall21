/*global d3*/

var svg = d3.select("#svg");

const height = 1200;
const width = 1200;

//const padding = {top:50, left:50, right:50, bottom:50};

const render = data => {
    const xValue = d => d.MeanDataValue;
    const yValue = d => d.GeoPlaceName;
    const margin = {top:60, left:800, right:20, bottom:100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.bottom - margin.top;

    
    
    const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);
    
    console.log(xScale.domain());
    console.log(xScale.range());
    
    const xAxis = d3.axisBottom(xScale)
    .tickSize(-innerHeight);
    
    const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.3);
    
    console.log(yScale.domain());
    console.log(yScale.range());
    
    const yAxis = d3.axisLeft(yScale);
    
    
    const g = svg.append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
    
    g.append('g').call(yAxis)
    .selectAll('.domain, .tick line')
    .remove();
    
    
    const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);
    
    xAxisG.select('.domain').remove();

    xAxisG.append('text')
    .attr('y', 40)
    .attr('x', innerWidth/2)
    .attr('fill',"#586F7F" )
    .text('PM2.5 Mean Value');


    g.selectAll('rect').data(data)
    .enter().append('rect')
    .attr("y", d => yScale(yValue(d)))
    .attr('width', d => xScale(xValue(d)))
    .attr('height', yScale.bandwidth())
    .attr('fill', "#586F7F")
    
}

(async () => {
    const app = d3.select('#app')
    
    //fetch all data from d3.csv
    const data = await d3.csv('./data/Sorted_Air_Quality.csv');
    data.forEach(d => {
        d.MeanDataValue = +d.MeanDataValue;
    });
    render(data);
    
}
    )();
    


