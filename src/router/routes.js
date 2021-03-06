
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'alarms', component: () => import('pages/Alarm.vue') },
      { path: 'colors', component: () => import('pages/Color.vue') },
      { path: 'animations', component: () => import('pages/Animation.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
