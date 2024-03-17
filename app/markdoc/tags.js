import { Callout } from '@/components/Callout'
import  Framework  from '@/components/Framework'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import {Stacklayout,Stackcard} from '@/components/Stackcard'
import { Kpilayout,Kpicard } from '@/components/Kpicards'
import Transportation from '@/components/Transportation'
import Warehousing from '@/components/Warehousing'
import Inventory from '@/components/Inventory'
import Production from '@/components/Production'
import Sales from '@/components/Sales'
import Distribution from '@/components/Distribution'
import Inventoryoptimization from '@/components/Inventoryoptimization'
import Generative from '@/components/Generative'
import Kpi from '@/components/Kpi'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    render: Framework,
  },
  transportation: {
    selfClosing: true,
    render: Transportation,
  },
  warehousing: {
    selfClosing: true,
    render: Warehousing,
  },
  inventory: {
    selfClosing: true,
    render: Inventory,
  },
  production: {
    selfClosing: true,
    render: Production,
  },
  sales: {
    selfClosing: true,
    render: Sales,
  },
  distribution: {
    selfClosing: true,
    render: Distribution,
  },
  inventoryoptimization: {
    selfClosing: true,
    render: Inventoryoptimization,
  },
  generative: {
    selfClosing: true,
    render: Generative,
  },
  kpi: {
    selfClosing: true,
    render: Kpi,
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },

  'stack-layout': {
    render: Stacklayout,
  },
  'stack-card': {
    selfClosing: true,
    render: Stackcard,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },

  'kpi-layout': {
    render: Kpilayout,
  },
  'kpi-link': {
    selfClosing: true,
    render: Kpicard,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
