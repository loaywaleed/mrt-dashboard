import socket from './socket.js'

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

var rpmValue = 0;
var speedValue = 0;

socket.on('speed', (data) => {
  speedValue = data.speed;
  rpmValue = data.rpm;
  updateSpeedChart();
  updateRpmChart();
});

var optionRpm = {
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
      min: 0,
      max: 10,
      data: [
        {
          value: (rpmValue / 100)
        }
      ]
    }
  ]
};

var optionSpeed = {
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
        valueAnimation: false,
        fontSize: 50,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: speedValue,
        }
      ]
    }
  ]
};

function updateSpeedChart() {
  optionSpeed.series[0].data[0].value = speedValue;
  myChart2.setOption(optionSpeed);
}

function updateRpmChart() {
  optionRpm.series[0].data[0].value = parseInt(rpmValue / 100);
  myChart1.setOption(optionRpm);
}

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
