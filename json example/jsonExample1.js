 var data={
	"alphaList":
	[	{"alphaValue":0.05,"idx":0}],
	"betaScaleList":
	[	{"value":1.0,"idx":0}],
	"betweenParticipantFactorList":
	[	
		{	"categoryList":[{"category":"1","idx":0},{"category":"2","idx":0}],
			"predictorName":"Group","idx":0
		}
	],
	"clusteringTree":null,
	"confidenceIntervalDescriptions":null,
	"covariance":
	[
		{	"blob":{"data":[[1.0]]},
			"type":"UNSTRUCTURED_CORRELATION",
			"standardDeviationList":[{"value":1.0,"idx":0}],
			"name":"__RESPONSE_COVARIANCE__",
			"delta":-1.0,
			"rho":-2.0,
			"rows":1,
			"idx":0,
			"columns":1}
	],
	"viewTypeEnum":"GUIDED_MODE",
	"hypothesis":
	[
		{	"betweenParticipantFactorMapList":[
				{	"betweenParticipantFactor":
						{	"categoryList":[{"category":"1","idx":0},{"category":"2","idx":0}],
							"predictorName":"Group",
							"idx":0
						},
					"type":"NONE"
				}
			],
			"type":"MAIN_EFFECT",
			"repeatedMeasuresMapTree":null,
			"idx":0,
			"betweenParticipantFactorList":[
				{	"categoryList":[{"category":"1","idx":0},{"category":"2","idx":0}],
					"predictorName":"Group",
					"idx":0
				}
			],
			"repeatedMeasuresList":null
		}
	],
	"matrixSet":
	[
		{	"name":"beta",
			"data":{"data":[[1.0],[0.0]]},
			"idx":0,
			"columns":1,
			"rows":2
		}
	],
	"name":null,
	"nominalPowerList":null,
	"participantLabel":null,
	"powerCurveDescriptions":null,
	"powerMethodList":null,
	"quantileList":null,
	"relativeGroupSizeList":
	[
		{"idx":0,"value":1},
		{"idx":0,"value":1}
	],
	"repeatedMeasuresTree":null,
	"responseList": 
	[	{"name":"Response","idx":0}	],
	"sampleSizeList": 
	[	{"idx":0,"value":2}	],
	"sigmaScaleList":
	[	{"value":1.0,"idx":0}	],
	"solutionTypeEnum":"POWER",
	"statisticalTestList":
	[	{"type":"UNIREP","idx":0}	],
	"uuid":null,
	"gaussianCovariate":false,
	"alphaListValues":[0.05],
	"betaScaleListValues":[1.0],
	"nominalPowerListValues":null,
	"powerMethodListValues":null,
	"quantileListValues":null,
	"relativeGroupSizeListValues":[1,1],
	"responseListNames":["Response"],
	"sampleSizeListValues":[2],
	"sigmaScaleListValues":[1.0],
	"statisticalTestListValues":["UNIREP"]
}
	
 data.firstName = "Happy";
 alert(data.firstName);