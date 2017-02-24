# angular2-echarts
angular2 directive for echarts v3

# Getting Started
angular2-echarts is an angular2 structural directive for Baidu's echarts v3.

# Installation
```
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

IMPORTANT: use `echarts` directive in a div which has **pre-defined height**.

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
  ```typescript
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

# More Properties
+ `options`: It's the same with the options in official demo site.

+ `dataset`: You can ignore the "data" property in "series" of the `options`, and use `dataset` to bind the series data instead.

+ `loading`: boolean property. Use it to toggle the echarts loading animation when your data is not ready.