//PublicRoutes
import Homes from '../pages/home/home';
import MyMusic from '../pages/myMusic/myMusic';
import Zingchart from '../pages/zingchart/zingchart';
import Login from '../pages/login/login';

import configRoutes from './configRoutes';
import HeaderOnly from '../Layout/headerOnly/headerOnly';
import LayoutOnly from '../Layout/layoutOnly/layoutOnly';

const PublicRoutes = [
    { path: configRoutes.home, component: Homes },
    { path: configRoutes.myMusic, component: MyMusic, layout: LayoutOnly },
    { path: configRoutes.zingchart, component: Zingchart },
    { path: configRoutes.login, component: Login, layout: HeaderOnly },
];

export { PublicRoutes };
