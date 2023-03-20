import Home from '~/pages/Home';
import Drops from '~/pages/Drops';
import Stats from '~/pages/Stats';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/drops', component: Drops },
    { path: '/ranking', component: Stats },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
