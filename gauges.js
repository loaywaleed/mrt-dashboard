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

option1 = {
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
    fontSize: 20
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
    fontSize: 80,
    offsetCenter: [0, '70%']
  },
  data: [
    {
      value: 70
    }
  ]
}
]
};

option2 = {
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
        fontSize: 20
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
        fontSize: 80,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: 70
        }
      ]
    }
    ]
    };

if (option1 && typeof option1 === 'object') {
  myChart1.setOption(option1);
}

if (option2 && typeof option2 === 'object') {
    myChart2.setOption(option2);
}

  window.addEventListener('resize', function () {
    myChart1.resize();
    myChart2.resize();
});


