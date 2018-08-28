
option = {
	    //backgroundColor: '#2c343c',

	    title: {
	        text: '尼康单反镜头产量统计',
	        left: 'center',
	        top: 10,
	        textStyle: {
	            color: '#333',
                fontSize: '20',
                fontWeight: 'bolder'
	        }
	    },

	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)",
        	textStyle: {
                fontSize: '20',
                fontWeight: 'bolder'
        	}
	    },
	    /*
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['全画幅镜头',
	              '广角定焦','Fisheye鱼眼','13-18mm' ,'20mm' ,'24mm' ,'28mm' ,'35mm',
	              '标准定焦','45-50mm Slow' ,'50-58mm Fast' ,
	              '长焦镜头','80-85mm','100-105mm', '135mm',
	              '远摄和超远摄','180mm' ,'200mm' ,'300mm' ,'400mm' ,'500mm' ,'600mm' ,'800-1200m',
	              'Reflex折返镜头',
	              '广角和标准变焦','Zoom 14..24mm-xx' ,'Mid Zoom essional','Zoom 28mm-xx' ,'Zoom 35mm-xx' ,'Zoom 50mm-xx' ,
	              '远摄和超远摄变焦','Tele Zoom\n(70..80mm-200..300mm)' ,'Tele Zoom Professional\n(70..80mm-200mm)' ,'Super Tele Zoom\n(70..80mm-400..1200mm)',
	              'PC lenses移轴镜头' ,
	              '微距镜头','55-60mm Micro微距镜头' ,'105-135mm UV/Micro\n微距镜头' ,'120-200mm Micro/Medical\n微距镜头',
	              'Teleconverters\n倍增镜',
	              'DX画幅镜头',
	              'DX定焦','DX10.5/2.8/G/ED鱼眼' ,'DX35/1.8G' ,'DX40/2.8G' ,'DX85/3.5/G/Micro' ,
	              'DX广角和标准变焦','DX10-20/4.5-5.6/G' ,'DX10-24/3.5-4.5/G' ,'DX12-24/4/G' ,'DX17-55/2.8/G',
	              'DX套机标准变焦','DX18-55/3.5-5.6/G' ,'DX18-70/3.5-4.5/G' ,'DX18-105/3.5-5.6/G','DX18-135/3.5-5.6/G' ,
	              'DX大变焦','DX18-140/3.5-5.6/G' ,'DX18-200/3.5-5.6/G' ,'DX18-300/3.5-5.6/G',
	              'DX远摄变焦','DX55-200/4-5.6/G','DX55-300/4.5-5.6/G', 'DX70-300/4.5-6.3/G']
	    },*/
	    
	    visualMap: {
	        show: false,
	        min: 9000,
	        max: 25000000,
	        inRange: {
	            colorLightness: [0, 0.99],
	            color: ['#DC143C']
	        },
	        left:'50px',
	        itemHeight:'350px',
	        //calculable:true,
	        top:'0px'
	    },
        itemStyle: {
            color: '#DC143C',
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
            barBorderRadius: [0, 5, 5, 0]
        },
	    series : [
	        {
	            name:'镜头类型',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '35%'],
	            label: {
	                normal: {
	                    show: false,
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                  {value:50805900, name:'全画幅镜头'},
	                  {value:50600341, name:'DX画幅镜头'}
	              ],
	            /*
	            data:[
					{value:126942,	name:'Fisheye鱼眼'},
					{value:65153,	name:'13-18mm' },
					{value:507989,	name:'20mm' },
					{value:915606,	name:'24mm' },
					{value:1871990,	name:'28mm' },
					{value:1594505,	name:'35mm' },
					{value:9346021,	name:'45-50mm Slow' },
					{value:4973808,	name:'50-58mm Fast' },
					{value:1199991,	name:'80-85mm' },
					{value:937104,	name:'100-105mm'}, 
					{value:1077742,	name:'135mm' },
					{value:202330,	name:'180mm' },
					{value:567771,	name:'200mm' },
					{value:428005,	name:'300mm' },
					{value:55162,	name:'400mm' },
					{value:23172,	name:'500mm' },
					{value:34697,	name:'600mm' },
					{value:9741,	name:'800-1200m' },
					{value:124404,	name:'Reflex'},
					{value:2609685,	name:'Zoom 14..24mm-xx' },
					{value:1660481,	name:'Mid Zoom Professional' },
					{value:4638101,	name:'Zoom 28mm-xx' },
					{value:6781570,	name:'Zoom 35mm-xx' },
					{value:61062,	name:'Zoom 50mm-xx' },
					{value:4661757,	name:'Tele Zoom\n(70..80mm-200..300mm)' },
					{value:1943562,	name:'Tele Zoom Professional\n(70..80mm-200mm)' },
					{value:394996,	name:'Super Tele Zoom\n(70..80mm-400..1200mm)'},
					{value:163254,	name:'PC lenses移轴镜头' },
					{value:1807409,	name:'55-60mm Micro微距镜头' },
					{value:1045234,	name:'105-135mm UV/Micro\n微距镜头' },
					{value:129769,	name:'120-200mm Micro/Medical\n微距镜头' },
					{value:846887,	name:'Teleconverters\n倍增镜'},
					{value:121419,	name:'DX10.5/2.8/G/ED鱼眼' },
					{value:1867437,	name:'DX35/1.8G' },
					{value:189239,	name:'DX40/2.8G' },
					{value:74947,	name:'DX85/3.5/G/Micro' },
					{value:59309,	name:'DX10-20/4.5-5.6/G' },
					{value:132138,	name:'DX10-24/3.5-4.5/G' },
					{value:152240,	name:'DX12-24/4/G' },
					{value:213340,	name:'DX17-55/2.8/G'}, 
					{value:24633828,	name:'DX18-55/3.5-5.6/G' },
					{value:2260970,	name:'DX18-70/3.5-4.5/G' },
					{value:5955178,	name:'DX18-105/3.5-5.6/G'},
					{value:1156793,	name:'DX18-135/3.5-5.6/G' },
					{value:1283998,	name:'DX18-140/3.5-5.6/G' },
					{value:1828061,	name:'DX18-200/3.5-5.6/G' },
					{value:276750,	name:'DX18-300/3.5-5.6/G' },
					{value:6836706,	name:'DX55-200/4-5.6/G' },
					{value:2196047,	name:'DX55-300/4.5-5.6/G'}, 
					{value:873997,	name:'DX70-300/4.5-6.3/G'}
	            ].sort(function (a, b) { return a.value - b.value}),
	            //roseType: 'radius',
	            */
	        },
	        {
	            name:'镜头类型',
	            type:'pie',
	            radius: ['40%', '55%'],
	            selectedMode: 'single',
	            label: {
	                normal: {
	                    show: false,
	                    position: 'inner'
	                }
	            },
	            data:[
	                {value:5082185, name:'广角定焦'},
	                {value:14319829, name:'标准定焦'},
	                {value:3214837, name:'长焦镜头'},
	                {value:1320878, name:'远摄和超远摄'},
	                {value:124404, name:'Reflex折返镜头'},
	                {value:15750899, name:'广角和标准变焦'},
	                {value:7000315, name:'远摄和超远摄变焦'},
	                {value:163254, name:'PC lenses移轴镜头'},
	                {value:2982412, name:'微距镜头'},
	                {value:846887, name:'Teleconverters\n倍增镜'},
	                {value:2253042, name:'DX定焦'},
	                {value:557027, name:'DX广角和标准变焦'},
	                {value:34466709, name:'DX套机标准变焦'},
	                {value:3416813, name:'DX大变焦'},
	                {value:9906750, name:'DX远摄变焦'}
	            ]
	        },
	        {
	            name:'镜头类型',
	            type:'pie',
	            selectedMode: 'single',
	            radius: ['60%', '75%'],
	            label: {
	                normal: {
	                    show: false,
	                    position: 'inner'
	                }
	            },
	            data:[
						{value:126942,	name:'Fisheye鱼眼'},
						{value:65153,	name:'13-18mm' },
						{value:507989,	name:'20mm' },
						{value:915606,	name:'24mm' },
						{value:1871990,	name:'28mm' },
						{value:1594505,	name:'35mm' },
						{value:9346021,	name:'45-50mm Slow' },
						{value:4973808,	name:'50-58mm Fast' },
						{value:1199991,	name:'80-85mm' },
						{value:937104,	name:'100-105mm'}, 
						{value:1077742,	name:'135mm' },
						{value:202330,	name:'180mm' },
						{value:567771,	name:'200mm' },
						{value:428005,	name:'300mm' },
						{value:55162,	name:'400mm' },
						{value:23172,	name:'500mm' },
						{value:34697,	name:'600mm' },
						{value:9741,	name:'800-1200m' },
						{value:124404,	name:'Reflex'},
						{value:2609685,	name:'Zoom 14..24mm-xx' },
						{value:1660481,	name:'Mid Zoom Professional' },
						{value:4638101,	name:'Zoom 28mm-xx' },
						{value:6781570,	name:'Zoom 35mm-xx' },
						{value:61062,	name:'Zoom 50mm-xx' },
						{value:4661757,	name:'Tele Zoom\n(70..80mm-200..300mm)' },
						{value:1943562,	name:'Tele Zoom Professional\n(70..80mm-200mm)' },
						{value:394996,	name:'Super Tele Zoom\n(70..80mm-400..1200mm)'},
						{value:163254,	name:'PC lenses移轴镜头' },
						{value:1807409,	name:'55-60mm Micro微距镜头' },
						{value:1045234,	name:'105-135mm UV/Micro\n微距镜头' },
						{value:129769,	name:'120-200mm Micro/Medical\n微距镜头' },
						{value:846887,	name:'Teleconverters\n倍增镜'},
						{value:121419,	name:'DX10.5/2.8/G/ED鱼眼' },
						{value:1867437,	name:'DX35/1.8G' },
						{value:189239,	name:'DX40/2.8G' },
						{value:74947,	name:'DX85/3.5/G/Micro' },
						{value:59309,	name:'DX10-20/4.5-5.6/G' },
						{value:132138,	name:'DX10-24/3.5-4.5/G' },
						{value:152240,	name:'DX12-24/4/G' },
						{value:213340,	name:'DX17-55/2.8/G'}, 
						{value:24633828,	name:'DX18-55/3.5-5.6/G' },
						{value:2260970,	name:'DX18-70/3.5-4.5/G' },
						{value:5955178,	name:'DX18-105/3.5-5.6/G'},
						{value:1156793,	name:'DX18-135/3.5-5.6/G' },
						{value:1283998,	name:'DX18-140/3.5-5.6/G' },
						{value:1828061,	name:'DX18-200/3.5-5.6/G' },
						{value:276750,	name:'DX18-300/3.5-5.6/G' },
						{value:6836706,	name:'DX55-200/4-5.6/G' },
						{value:2196047,	name:'DX55-300/4.5-5.6/G'}, 
						{value:873997,	name:'DX70-300/4.5-6.3/G'}
		            ]
	        }
	    ]
	};