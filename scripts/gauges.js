var dom1 = document.getElementById('container-1');
var myChart1 = echarts.init(dom1, 'dark', {
  renderer: 'canvas',
  useDirtyRect: false
});
var dom2 = document.getElementById('container-2');
var myChart2 = echarts.init(dom2, 'dark', {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option1;
var option2;

var rpmValue = 700
var speedValue = 70

optionRpm = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12,
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 50,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: rpmValue / 100
        }
      ],
      min: 0,
      max: 10
    }
  ]
};

optionSpeed = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 50,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: speedValue
        }
      ]
    }
  ]
};

if (optionRpm && typeof optionRpm === 'object') {
  myChart1.setOption(optionRpm);
}

if (optionSpeed && typeof optionSpeed === 'object') {
  myChart2.setOption(optionSpeed);
}

window.addEventListener('resize', function () {
  myChart1.resize();
  myChart2.resize();
});


