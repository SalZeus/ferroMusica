import React  from "react";
import  Chart  from "react-apexcharts";
import "./piechart.scss"

function Piechart()
{
    return(
            <section className="pie-container">
                <div className="chart">
                    <Chart 
                     className="pie"
                     type="donut"
                     series={[23, 43, 50, 54]}

                    options={{
                        plotOptions: {donut: {size: "65%"}},
                        title:{ text:"Top Rankers", align: "center", margin: 0,
                        style:{fontSize: "60px", fontWeight: "bold", color: "#E91717", fontFamily: "'Kanit', sans-serif"}} , 
                    subtitle: { text:"Nacionales", align: "center", margin: 120,
                    style:{fontSize: "60px", fontWeight: "bold", color: "#E91717", fontFamily: "'Kanit', sans-serif"}},
                    noData:{text:"Empty Data"},                         
                            colors:["rgb(226, 76, 37)","rgb(233, 23, 23)", "rgb(24, 60, 161)", "rgb(154, 45, 154)"],
                            labels:["Clandestino", "Mirame Otra Vez", "Hoy No", "Secreto"],
                            donut:{size: "10%", labels: {show: true}},
                            theme: { palette: "pallete8", monochrome:{enabled: false, color: "#E91717", shadeIntensity: 1, shadeTo: "light"}},
                            chart: {
                                foreColor: "#ffffff", fontFamily: "'DM Sans', sans-serif", 
                            },
                            animations: {
                                enabled: true, easing: 'easeinout', speed: 800,
                                    animateGradually: {
                                    enabled: true, delay:3500
                                    },
                                    dynamicAnimation: {
                                    enabled: true, speed: 500
                                    }
                                }, 
                            legend: {
                                show: false, fontSize: "22px"
                            },
                            stroke: {show: false,}
                    }}
                    />
                </div>
                <div className="chart">
                    <Chart 
                    className="pie"
                    type="pie"
                    series={[10, 120, 54, 50]}

                    options={{
                            plotOptions: {donut: {size: "65%"}},
                            title:{ text:"Top Rankers", align: "center", margin: 0,
                            style:{fontSize: "60px", fontWeight: "bold", color: "#E91717", fontFamily: "'Kanit', sans-serif"}} , 
                            subtitle: { text:"Internacionales", align: "center", margin: 120,
                            style:{fontSize: "60px", fontWeight: "bold", color: "#E91717", fontFamily: "'Kanit', sans-serif"}},
                            noData:{text:"Empty Data"},                        
                            colors:["rgb(226, 76, 37)","rgb(233, 23, 23)", "rgb(24, 60, 161)", "rgb(154, 45, 154)"],
                            labels:["Clandestino", "Mirame Otra Vez", "Hoy No", "Secreto"],
                            donut:{size: "10%", labels: {show: true}},
                            theme: { palette: "pallete8", monochrome:{enabled: false, color: "#E91717", shadeIntensity: 1, shadeTo: "light"}},
                            chart: {
                                foreColor: "#ffffff", fontFamily: "'DM Sans', sans-serif", 
                            },
                            animations: {
                                enabled: true, easing: 'easeinout', speed: 800,
                                    animateGradually: {
                                    enabled: true, delay:3500
                                    },
                                    dynamicAnimation: {
                                    enabled: true, speed: 500
                                    }
                                }, 
                            legend: {
                                show: false, fontSize: "22px"
                            },
                            stroke: {show: false,}
                    }}
                    />
                </div>
            </section>
    );
}
export default Piechart;