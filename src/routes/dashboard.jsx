import Dashboard from "../views/DashboardViews/Dashboard/Dashboard.jsx";
import Buttons from "../views/DashboardViews/Components/Buttons.jsx";
import GridSystem from "../views/DashboardViews/Components/GridSystem.jsx";
import Panels from "../views/DashboardViews/Components/Panels.jsx";
import SweetAlert from "../views/DashboardViews/Components/SweetAlert.jsx";
import Notifications from "../views/DashboardViews/Components/Notifications.jsx";
import Icons from "../views/DashboardViews/Components/Icons.jsx";
import Typography from "../views/DashboardViews/Components/Typography.jsx";
import RegularForms from "../views/DashboardViews/Forms/RegularForms.jsx";
import ExtendedForms from "../views/DashboardViews/Forms/ExtendedForms.jsx";
import ValidationForms from "../views/DashboardViews/Forms/ValidationForms.jsx";
import Wizard from "../views/DashboardViews/Forms/Wizard.jsx";
import RegularTables from "../views/DashboardViews/Tables/RegularTables.jsx";
import ExtendedTables from "../views/DashboardViews/Tables/ExtendedTables.jsx";
import ReactTables from "../views/DashboardViews/Tables/ReactTables.jsx";
import GoogleMaps from "../views/DashboardViews/Maps/GoogleMaps.jsx";
import FullScreenMap from "../views/DashboardViews/Maps/FullScreenMap.jsx";
import VectorMap from "../views/DashboardViews/Maps/VectorMap.jsx";
import Charts from "../views/DashboardViews/Charts/Charts.jsx";
import Calendar from "../views/DashboardViews/Calendar/Calendar.jsx";
import Widgets from "../views/DashboardViews/Widgets/Widgets.jsx";
import UserProfile from "../views/DashboardViews/Pages/UserProfile.jsx";
import TimelinePage from "../views/DashboardViews/Pages/Timeline.jsx";
import RTLSupport from "../views/DashboardViews/Pages/RTLSupport.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons

import { Image, Apps, ContentPaste, GridOn, Place, Timeline, DateRange, GolfCourse} from '@material-ui/icons'

import DashboardIcon from "@material-ui/icons/Dashboard";
import WidgetsIcon from "@material-ui/icons/Widgets";


// import ProviderForm from '../views/Providers/ProviderForm'

import { ProviderWizard, ProviderEditForm } from '../views/Providers'
import { CouriersList } from '../views/Couriers'

import { OrdersList } from '../views/Orders'


var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/rtl/rtl-support-page",
    name: "RTL Support",
    mini: "RS",
    component: RTLSupport
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
      collapse: true,
      path: "/providers",
      name: "პროვაიდერები",
      state: 'openProviders',
      icon: DashboardIcon,
      views: [
          { path: "/providers/add", name: "დამატება", mini: "A", component: ProviderWizard },
          { path: "/providers/edit", name: "რედაქტირება", mini: "რ", component: ProviderEditForm }
      ]
  },
  {
    collapse: true,
      path: '/couriers',
      name: 'კურიერები',
      state: 'openCouriers',
      icon: GolfCourse,
      views: [
          { path: "/couriers/list", name: "ძებნა", mini: "ძ", component: CouriersList },
      ]
  },

    {
        collapse: true,
        path: "/orders",
        name: "შეკვეთები",
        state: "openOrders",
        icon: Image,
        views: [
            { path: "/orders/list", name: "სია", mini: "ს", component: OrdersList },
        ]
    },

  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: ContentPaste,
    views: [
      {
        path: "/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: Place,
    views: [
      {
        path: "/maps/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/maps/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/maps/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
