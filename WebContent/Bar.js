

        
var seriesLabel = {
    normal: {
        show: true,
        bold: true,
        color: '#333',
        textBorderWidth: 2,
        position: 'right',
        fontSize: '15',
        fontWeight: 'bolder'
    }
}

option = {
    title: {
        text: '尼康单反镜头产量统计'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    	textStyle: {
            fontSize: '20',
            fontWeight: 'bolder'
    	},
    	extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
    },
    grid: {
        left: 200
    },
    xAxis: {
        type: 'value',
        //name: '产量',
        nameTextStyle: {
            fontSize: '20',
            fontWeight: 'bold',
        },
        axisLabel: {
            formatter: '{value}',
            fontSize: '15',
            fontWeight: 'bolder',
        }
    },
    yAxis: {
        type: 'category',
        //name: '镜头类型',
        nameTextStyle: {
            fontSize: '20',
            fontWeight: 'bold',
        },
        inverse:true,
        /*没有排序
        data: ['Fisheye鱼眼', '13-18mm', '20mm', '24mm', '28mm', '35mm', '45-50mm Slow','50-58mm Fast','80-85mm','100-105mm','135mm','180mm','200mm','300mm','400mm','500mm','600mm','800-1200m','Reflex',
               'Zoom 14..24mm-xx','Mid Zoom Professional','Zoom 28mm-xx','Zoom 35mm-xx','Zoom 50mm-xx','Tele Zoom\n(70..80mm-200..300mm)','Tele Zoom Professional\n(70..80mm-200mm)','Super Tele Zoom\n(70..80mm-400..1200mm)',
               'PC lenses移轴镜头','55-60mm Micro微距镜头','105-135mm UV/Micro\n微距镜头','120-200mm Micro/Medical\n微距镜头','Teleconverters\n倍增镜',
               'DX10.5/2.8/G/ED鱼眼','DX35/1.8G','DX40/2.8G','DX85/3.5/G/Micro','DX10-20/4.5-5.6/G','DX10-24/3.5-4.5/G','DX12-24/4/G','DX17-55/2.8/G','DX18-55/3.5-5.6/G','DX18-70/3.5-4.5/G','DX18-105/3.5-5.6/G',
               'DX18-135/3.5-5.6/G','DX18-140/3.5-5.6/G','DX18-200/3.5-5.6/G','DX18-300/3.5-5.6/G','DX55-200/4-5.6/G','DX55-300/4.5-5.6/G','DX70-300/4.5-6.3/G'],*/
        data: ['DX18-55/3.5-5.6/G','45-50mmSlow','DX55-200/4-5.6/G','Zoom35mm-xx','DX18-105/3.5-5.6/G','50-58mmFast','TeleZoom\n(70..80mm-200..300mm)',
               'Zoom28mm-xx','Zoom14..24mm-xx','DX18-70/3.5-4.5/G','DX55-300/4.5-5.6/G','TeleZoomProfessional\n(70..80mm-200mm)','28mm','DX35/1.8G',
               'DX18-200/3.5-5.6/G','55-60mmMicro微距镜头','MidZoomProfessional','35mm','DX18-140/3.5-5.6/G','80-85mm','DX18-135/3.5-5.6/G','135mm',
               '105-135mmUV/Micro\n微距镜头','100-105mm','24mm','DX70-300/4.5-6.3/G','Teleconverters\n倍增镜','200mm','20mm','300mm','SuperTeleZoom\n(70..80mm-400..1200mm)',
               'DX18-300/3.5-5.6/G','DX17-55/2.8/G','180mm','DX40/2.8G','PClenses移轴镜头','DX12-24/4/G','DX10-24/3.5-4.5/G','120-200mmMicro/Medical\n微距镜头','Fisheye鱼眼',
               'Reflex','DX10.5/2.8/G/ED鱼眼','DX85/3.5/G/Micro','13-18mm','Zoom50mm-xx','DX10-20/4.5-5.6/G','400mm','600mm','500mm','800-1200m'],
        axisLabel: {
            formatter: function (value) {
            	//alert(value);
                return value ;
                
            }
        }
    },
    series: [
        {
            type: 'bar',
            
            /*没有排序
            data: [126942,65153,507989,915606,1871990,1594505,9346021,4973808,1199991,937104,1077742,202330,567771,428005,55162,23172,34697,9741,124404,
                   2609685,1660481,4638101,6781570,61062,4661757,1943562,394996,
                   163254,1807409,1045234,129769,846887,
                   121419,1867437,189239,74947,59309,132138,152240,213340,24633828,2260970,5955178,
                   1156793,1283998,1828061,276750,6836706,2196047,873997].sort(function (a, b) { return a.value - b.value}),*/
            data: [24633828,9346021,6836706,6781570,5955178,4973808,4661757,4638101,2609685,2260970,2196047,1943562,1871990,1867437,1828061,1807409,1660481,
                   1594505,1283998,1199991,1156793,1077742,1045234,937104,915606,873997,846887,567771,507989,428005,394996,276750,213340,202330,189239,163254,
                   152240,132138,129769,126942,124404,121419,74947,65153,61062,59309,55162,34697,23172,9741],
            //stack: '总量',
            label: seriesLabel,
            //stack: '总量',
            itemStyle: {
                //color: '#DC143C',
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0',
                        '#ff2600',
                        '#ffc000',
                        '#00ad4e',
                        '#0073c2',
                        '#165868',
                        '#e76f00',
                        '#316194',
                        '#723761',
                        '#00b2f1',
                        '#4d6022',
                        '#4b83bf',
                        '#f9c813',
                        '#0176c0'
                        
                    ];
                    //alert(params)
                    //alert(colorList[params.dataIndex])
                    return colorList[params.dataIndex]
                	//return '#0176c0'
                },
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                barBorderRadius: [0, 5, 5, 0]
            }
        }
    ]
};
