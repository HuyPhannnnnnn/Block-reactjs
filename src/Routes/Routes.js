//PublicRoutes
import Homes from '../pages/home/home';
import MyMusic from '../pages/myMusic/myMusic';
import Zingchart from '../pages/zingchart/zingchart';
import Login from '../pages/login/login';
import Etiam from '../pages/etiam/etiam';
import Aenean from '../pages/Aenean/Aenean';
import Curabitur from '../pages/curabitur/curabitur';
import Sed from '../pages/sed/sed';
import Phasellus from '../pages/phasellus/phasellus';
import Aboutme from '../pages/aboutme/aboutme';

import configRoutes from './configRoutes';
import HeaderOnly from '../Layout/headerOnly/headerOnly';
import LayoutOnly from '../Layout/layoutOnly/layoutOnly';

const PublicRoutes = [
    { path: configRoutes.home, component: Homes },
    { path: configRoutes.myMusic, component: MyMusic },
    { path: configRoutes.zingchart, component: Zingchart },
    { path: configRoutes.login, component: Login, layout: HeaderOnly },
    { path: configRoutes.aboutme, component: Aboutme, layout: HeaderOnly },
    { path: configRoutes.etiam, component: Etiam, layout: LayoutOnly },
    { path: configRoutes.aenean, component: Aenean, layout: LayoutOnly },
    { path: configRoutes.curabitur, component: Curabitur, layout: LayoutOnly },
    { path: configRoutes.sed, component: Sed, layout: LayoutOnly },
    { path: configRoutes.phasellus, component: Phasellus, layout: LayoutOnly },
];

export { PublicRoutes };
