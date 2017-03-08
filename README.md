# angular2-echarts [![npm version](https://badge.fury.io/js/angular2-echarts.svg)](http://badge.fury.io/js/angular2-echarts) [![npm downloads](https://img.shields.io/npm/dm/angular2-echarts.svg)](https://npmjs.org/angular2-echarts)
angular2 directive for echarts v3. Please refer to the [demo](http://xieziyu.github.io) page.

## Table of contents 
1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API](#api)
5. [Events](#events)
6. [Demo](#demo)

# Getting Started
angular2-echarts is an angular2 structural directive for Baidu's echarts v3.

# Installation
```
npm install echarts --save

npm install angula2-echarts --save
```

## How to use it with:
+ `angular-cli`: If you already have an angular-cli project. You need to import echarts in the **"scripts"** list of .angular-cli.json  just like:

```json
{
  "scripts": [
    "../node_modules/echarts/dist/echarts.js",
  ],
}
```

+ `index.html`: If you don't use angular-cli. You need to add script tag in **"index.html"** just like:

```html
<script type='text/javascript' src='vendor/path/echarts/dist/echarts.js'></script>
```

# Usage
Please refer to the [demo](http://xieziyu.github.io) page.

1. Firstly, import `AngularEchartsModule` in your app module (or any other proper angular module):
    ```typescript
    import { AngularEchartsModule } from 'angular2-echarts';

    @NgModule({
      imports: [
        ...,
        AngularEchartsModule
      ],
      ...
    })
    export class AppModule { }
    ```

2. Then: use `echarts` directive in a div which has **pre-defined height**.
    + Simple example:

      + html:
      ```html
      <div echarts [options]="chartOption" class="demo-chart"></div>
      ```

      + css:
      ```css
      .demo-chart {
        height: 400px;
      }
      ```

      + component:
      ```javascript
      chartOption = {
        title: {
          text: '堆叠区域图'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      ```

# API
`echarts` directive support following input porperties:
+ `options`: It's the same with the options in official demo site.

+ `dataset`: You can ignore the "data" property in "series" of the `options`, and use `dataset` to bind the series data instead.

+ `loading`: boolean property. Use it to toggle the echarts loading animation when your data is not ready.

# Events
As echarts support the `'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'` mouse events, our `angular2-echarts` directive also support the same mouse events but with additional `chart` prefix.

  + example:
  ```html
  <div echarts class="demo-chart"
    [options]="chartOptions"
    (chartClick)="onChartClick($event)">
  </div>
  <!-- The '$event' is same with the 'params' that Echarts dispatches -->
  ```

It supports following event outputs:
+ `chartClick`: It emits the same `params` of `'click'` event
+ `chartDblClick`: It emits the same `params` of `'dblclick'` event
+ `chartMouseDown`: It emits the same `params` of `'mousedown'` event
+ `chartMouseUp`: It emits the same `params` of `'mouseup'` event
+ `chartMouseOver`: It emits the same `params` of `'mouseover'` event
+ `chartMouseOut`: It emits the same `params` of `'mouseout'` event
+ `chartGlobalOut`: It emits the same `params` of `'globalout'` event

You can refer to the echarts tutorial: [Events and Actions in ECharts](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Events%20and%20Actions%20in%20ECharts) for more details of the event params. You can also refer to the [demo](http://xieziyu.github.io) page for the detailed example.

# Demo
You can clone this repo to your working copy and then launch the demo page in your local machine:
```
cd demo
npm install
npm start
```
The demo page server is listening to: http://localhost:4202