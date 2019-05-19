import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../anime/model/anime';
import { AnimeService } from '../../../anime/services/anime.service';
declare var Highcharts : any;

@Component({
  selector: 'app-anime-data',
  templateUrl: './anime-data.component.html',
  styleUrls: ['./anime-data.component.scss']
})
export class AnimeDataComponent implements OnInit {
  ohlc: Array<any> = [];
  volume: Array<any> = [];
  options: Object;
  constructor(public animeService: AnimeService) { }

  ngOnInit() {    
    this.animeService.getStockData().subscribe( data => { 
        let dataLength = data.length, i = 0;
        for (i; i < dataLength; i += 1) {
          this.ohlc.push([
              data[i][0], // the date
              data[i][1], // open
              data[i][2], // high
              data[i][3], // low
              data[i][4] // close
          ]);
  
          this.volume.push([
              data[i][0], // the date
              data[i][5] // the volume
          ]);
        };

        Highcharts.stockChart('container', {
            name: 'Anime Views',
            yAxis: [{
                labels: {
                    align: 'left'
                },
                height: '80%',
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'left'
                },
                top: '80%',
                height: '20%',
                offset: 0
            }],
            tooltip: {
                shape: 'square',
                headerShape: 'callout',
                borderWidth: 0,
                shadow: false,
                positioner: function (width, height, point) {
                    var chart = this.chart,
                        position;
    
                    if (point.isHeader) {
                        position = {
                            x: Math.max(
                                // Left side limit
                                chart.plotLeft,
                                Math.min(
                                    point.plotX + chart.plotLeft - width / 2,
                                    // Right side limit
                                    chart.chartWidth - width - chart.marginRight
                                )
                            ),
                            y: point.plotY
                        };
                    } else {
                        position = {
                            x: point.series.chart.plotLeft,
                            y: point.series.yAxis.top - chart.plotTop
                        };
                    }
    
                    return position;
                }
            },
            series: [{
                type: 'ohlc',
                id: 'anime-ohlc',
                name: 'Anime Views',
                data: this.ohlc
            }, {
                type: 'column',
                id: 'anime-volume',
                name: 'Views Volume',
                data: this.volume,
                yAxis: 1
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        rangeSelector: {
                            inputEnabled: false
                        }
                    }
                }]
            }
        });        
    });
  }

}
