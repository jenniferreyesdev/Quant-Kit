import { Component, OnInit } from '@angular/core';
import { PnlService } from '../pnl.service';
import { chartsModel } from '../chartsModel';
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
  selector: 'app-hedging',
  templateUrl: './hedging.component.html',
  styleUrls: ['./hedging.component.css']
})
export class HedgingComponent implements OnInit {

  public chartInIt: chartsModel = new chartsModel();
  public chartData: ChartConfiguration<'line'>['data'] = this.chartInIt.chartArr1;
  public chartOptions: ChartOptions<'line'> = this.chartInIt.chartArr2;
  public chartLegend: boolean = this.chartInIt.chartArr3;

  constructor(private pnlService:PnlService) {  
  }

  loadChartData():void{
    this.pnlService.getAllPNL(0).subscribe(
      res => this.chartData = res 
    );
  }

  ngOnInit(): void {
    this.loadChartData();
  }


}
