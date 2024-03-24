import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'
import WrapperMultiBarChart from '~/kendo/charts/bar/WrapperBarChart'
import WrapperMultiLineChart from '~/kendo/charts/Line/WrapperLineChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'
import WrapperMultiColumnColorChart from '../../kendo/charts/columnColor/WrapperColorColumnChart'
import WrapperMultiBarColorChart from '../../kendo/charts/barColor/WrapperColorBarChart'
import {
  pro1Data,
  pro2Data,
  pro3Data,
  pro4Data,
  pro5Data,
  pro6Data,

} from "~/kendo/rawData/analysis/skuproAnalysis";


export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },
  
]


export const kpiService_m = [
  {
    Name: "OTIF at commit, order lines missed",
    sub: "Service metrics by product group",
    container: <WrapperMultiBarColorChart seriesData={pro1Data} />,
  },

  {
    Name: "# End-Customer backorder",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro2Data} />,
  },

  {
    Name: "$ End-Customer backorders",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro3Data} />,
  },
];

export const kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro4Data} />,
  },

  {
    Name: "# End-Customer backorders",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro5Data} />,
  },

  {
    Name: "$ End-Customer backorder",
    sub: "",
    container: <WrapperMultiBarColorChart seriesData={pro6Data} />,
  },
];

