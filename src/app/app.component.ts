import { colors } from './colors';
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public chartLabels: Label[] = ['El1', 'El2', 'El3', 'El4'];
  public chartData: ChartDataSets[] = [
    {data: [26,	21, 35, 42], label: 'Data 1', backgroundColor: colors.chartColor1,
    borderColor: colors.chartColor1, pointBackgroundColor: colors.darkColor},
    {data: [70, 55,	82, 65], label: 'Data 2', backgroundColor: colors.chartColor2,
    borderColor: colors.chartColor2, pointBackgroundColor: colors.darkColor}
  ];
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: colors.lightColor
        },
        ticks: {
          fontColor: colors.lightColor
        }
      }],
      yAxes: [{
        gridLines: {
          color: colors.lightColor
        },
        ticks: {
          beginAtZero: true,
          fontColor: colors.lightColor
        }
      }]
    },
    legend: {
      labels: {
        fontColor: colors.lightColor
      }
    }
  };
}
