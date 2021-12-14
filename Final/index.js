import Chart from "./Chart.js";



export default class StackBar extends Chart {
    constructor(id, data) {
        super(id, data);
        this.x_field = "name";
        this.y_field = "counts_kisses";
        super.add_svg();
        super.update_chart();
        this.add_legends();
    }

    add_scale() {
        let names = this.vis_data.map((d) => d.name);
        this.x = d3.scaleBand().domain(names).range([0, this.innerW]).padding(0.2);

        let maxs = d3.max(this.vis_data, (d) => +d[this.y_field]);
        this.y = d3.scaleLinear().domain([0, maxs]).range([this.innerH, 0]);
        this.keys = ['age', 'counts_pictures', 'counts_profileVisits', 'counts_kisses']
        this.color = d3.scaleOrdinal().domain(this.keys).range(['#8468a0', '#eba7aa', '#C37B86', '#d68591']);

    }
    update_data() {
        // stack
        this.vis_data = this.data

    }

    draw_chart() {

        this.AxisX.selectAll('text')
            .attr('transform', 'translate(-25,10)  rotate(-90)')
            .attr('dominant-baseline', 'Hanging')
            .attr('text-anchor', 'end')

        let rects = this.ChartArea.selectAll("rect")
            .data(this.vis_data)
            .join("rect")
        rects.attr("class", "bar") //设置一个类名,方便后续调用

            .attr("x", (d) => this.x(d[this.x_field]))
            .attr("y", (d) => this.y(d[this.y_field]))

            .attr("width", this.x.bandwidth())
            .transition()
            .ease(d3.easeCircleIn)
            .duration(1500)
            .attr("height", (d) => this.innerH - this.y(d[this.y_field]))

            .attr("stroke-width", "0.25")
            .attr("fill", this.color(this.y_field))
        rects.on('mouseenter', (e, d) => {
            let html = ` <p> ${this.y_field} :${d[this.y_field]}  </p>`
            this.tips_show(e, d, html)
        })
            .on('mouseout', this.tips_hide)

    }




    add_legends() {
        let g = this.svg
            .append("g")
            .attr("transform", `translate(${this.innerW - 120},${-40})`);



        g.selectAll('text').data(this.keys).join('text').attr("x", 70)
            .attr("y", (d, i) => 95 + i * 30)
            .text(d => d);

        let rects = g.selectAll('rect').data(this.keys).join('rect')
        rects.attr("x", 40)
            .attr("y", (d, i) => 80 + i * 30)
            .attr("width", 20)
            .attr("height", 20)
            .attr("stroke", d => this.color(d))
            .attr("fill", d => this.color(d));





        rects.on('click', (e, d) => {
            // 动画更新到新的位置
            this.y_field = d
            this.add_scale()
            this.add_axis()
            d3.selectAll('.bar')
                .transition()
                .ease(d3.easeCircleIn)
                .duration(1500)
                .attr("x", (d) => this.x(d[this.x_field]))
                .attr("y", (d) => this.y(d[this.y_field]))
                .attr("width", this.x.bandwidth())
                .attr("height", (d) => this.innerH - this.y(d[this.y_field]))
                .attr("stroke-width", "0.25")
                .attr("fill", this.color(this.y_field))
        })




    }

}




async function init() {
    d3.select('body').append('div').style('display', 'none').attr('position', 'absolute').attr('class', 'd3-tip')

    const data = await d3.json('lovoodata.json')

    new StackBar('viz', data)

}

init()