var data = echarts.dataTool.prepareBoxplotData([
        [1982, 1982, 1998, 1998],[1971, 1971, 1998, 1998],[1979, 1979, 1998, 1998],[1993, 1993, 2018, 2018],[2017, 2017, 2018, 2018],
        [1982, 1982, 1998, 1998],[2000, 2000, 2018, 2018],[1981, 1981, 2005, 2005],
        [1984, 1984, 2005, 2005],[1989, 1989, 2018, 2018],
        [1981, 1981, 2005, 2005],[1994, 1994, 2018, 2018],[2010, 2010, 2018, 2018],[2005, 2005, 2018, 2018],
        [1959, 1959, 1977, 1977],[1981, 1981, 2005, 2005],[1994, 1994, 2018, 2018],[2012, 2012, 2018, 2018],[2017, 2017, 2018, 2018],
        [1981, 1981, 2005, 2005],[1989, 1989, 2018, 2018],[2014, 2014, 2018, 2018],[1981, 1981, 2005, 2005],[2010, 2010, 2018, 2018],
        [1980, 1980, 2005, 2005],[1986, 1986, 2018, 2018],[2011, 2011, 2018, 2018],
        [1981, 1981, 2005, 2005],[1986, 1986, 2018, 2018],[2008, 2008, 2018, 2018],[1981, 1981, 2005, 2005],[1981, 1981, 1998, 1998],[2013, 2013, 2018, 2018],
        [1994, 1994, 2018, 2018],[2012, 2012, 2018, 2018],[1981, 1981, 2005, 2005],[1995, 1995, 2010, 2010],[2010, 2010, 2018, 2018],
        [1981, 1981, 2005, 2005],[1993, 1993, 2018, 2018],[2016, 2016, 2018, 2018],
        [1981, 1981, 2005, 2005],[1981, 1981, 2005, 2005],[1990, 1990, 2018, 2018],
        [1981, 1981, 2005, 2005],[1986, 1986, 2018, 2018],
        [1981, 1981, 1996, 1996],[1986, 1986, 2005, 2005],[2004, 2004, 2018, 2018],
        [1981, 1981, 1999, 1999],[2000, 2000, 2018, 2018],[2005, 2005, 2018, 2018],[1986, 1986, 2005, 2005],[1986, 1986, 2005, 2005],[2004, 2004, 2018, 2018],
        [1982, 1982, 2005, 2005],[1985, 1985, 2002, 2002],[1998, 1998, 2018, 2018],[2014, 2014, 2018, 2018],
        [1997, 1997, 2018, 2018],[2015, 2015, 2018, 2018],
        [1986, 1986, 2005, 2005],[1996, 1996, 2018, 2018],[2015, 2015, 2018, 2018],
        [1986, 1986, 2005, 2005],[2013, 2013, 2018, 2018],
        [1977, 1977, 2005, 2005],
    ], {
    layout: 'vertical'
});

option = {
    title: [
        {
            text: '尼康单反镜头生产年份统计-全画幅定焦',
            x: 'center',
        },
        {
            /*
            text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
                fontSize: 14
            },
            left: '10%',
            top: '90%'*/
        }
    ],
    /*
    legend: {
        data: ['line', 'line2', 'line3']
    },*/
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            fontSize: '25',
            fontWeight: 'bolder'
    	},
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '5%'
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
data: ['Ai-S 6/2.8 Fisheye鱼眼', 'Ai 8/2.8 Fisheye鱼眼', 'Ai 16/2.8 Fisheye鱼眼', '16/2.8 Fisheye鱼眼', '8-15/3.5-4.5 Fisheye鱼眼',
       'Ai-S 13/5.6', '14/2.8', 'Ai-S 18/3.5', 
       'Ai-S 20/2.8','20/2.8',
       'Ai-S 24/2.8','24/2.8','24/1.4','24/1.8',
       '28/3.5 H Auto NKJ','Ai-S 28/2.8','28/2.8','28/1.8','28/1.4',
       'Ai-S 35/2','35/2','35/1.8','Ai-S 35/1.4','35/1.4',
       'Ai-S 50/1.8','50/1.8','50/1.8G',
       'Ai-S 50/1.4','50/1.4','50/1.4G','Ai-S 50/1.2','Ai-S 58/1.2','58/1.4G',
       '85/1.8','85/1.8G','Ai-S 85/1.4','85/1.4','85/1.4G',
       'Ai-S 105/2.5','105/2DC','105/1.4',
       'Ai-S 135/2.8','Ai-S 135/2','135/2DC',
       'Ai-S 180/2.8','180/2.8',
       'Ai-S 200/4','Ai-S 200/2','200/2',
       'Ai-S 300/4.5','300/4','300/4 PF','Ai-S 300/2.8','300/2.8','300/2.8G',
       'Ai-S 400/3.5','Ai-S 400/2.8','400/2.8','400/2.8E',
       '500/4','500/4E',
       'Ai-S 600/5.6','600/4','600/4E',
       'Ai-S 800/5.6','600/4','600/4E',
       '1000/11 Reflex'],
        axisLabel: {
            formatter: function (value) {
            	//alert(value);
                return value ;
                
            }
        },
        splitLine: {
            show: false
        }
    },
    xAxis: {
        axisLabel: {
            formatter: '{value}',
            fontSize: '15',
            fontWeight: 'bolder',
        },
        nameTextStyle: {
            fontSize: '20',
            fontWeight: 'bold',
            padding: [0, 0, 25, 16]
        },
        type: 'value',
        name: 'year',
        min: 1959,
        max: 2018,
        splitArea: {
            show: true
        }
    },
    
    series: [
        {
            //name: 'boxplot',
            type: 'boxplot',
            data: data.boxData,
            itemStyle: {
                color: '#DC143C',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                barBorderRadius: [0, 5, 5, 0]
            },
            tooltip: {
                formatter: function (param) {
                    return [
                        param.name,
                        param.data[1] + '-' + param.data[4],
                        param.data[4] - param.data[1] + ' years'
                    ].join('<br/>')
                }
            }
        },
        /*
        {
            name: 'outlier',
            type: 'scatter',
            data: data.outliers
        }*/
    ]
};