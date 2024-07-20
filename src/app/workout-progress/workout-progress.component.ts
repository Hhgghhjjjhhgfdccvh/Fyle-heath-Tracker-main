import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChartRef!: ElementRef<HTMLCanvasElement>;
  public chart: Chart | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas = this.myChartRef.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      this.chart = new Chart(ctx as ChartItem, {
        type: 'bar', // this denotes the type of chart
        data: { // values on X-Axis
          labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', 
                   '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
          datasets: [
            {
              label: "Sales",
              data: [467, 576, 572, 79, 92, 574, 573, 576],
              backgroundColor: 'blue'
            },
            {
              label: "Profit",
              data: [542, 542, 536, 327, 17, 0.00, 538, 541],
              backgroundColor: 'limegreen'
            }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
      });
    } else {
      console.error('Failed to acquire 2D context from the canvas element.');
    }
  }
}
