import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutComponent {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Running', 'Cycling'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [30, 45], label: 'Minutes' }
  ];
}
