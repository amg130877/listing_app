// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Analytics',
    path: '/comingsoon',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Agents',
    path: '/app/agents',
    icon: icon('ic_notification_mail'),
  },
  // {
  //   title: 'Merchant App',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'Marketing',
  //   path: '/comingsoon',
  //   icon: icon('ic_notification_mail'),
  // },
  // {
  //   title: 'Training',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'Underwriting',
  //   path: '/comingsoon',
  //   icon: icon('ic_notification_mail'),
  // },
  // {
  //   title: 'Merchant Onboarding',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Merchants',
    path: '/app/merchants',
    icon: icon('ic_user'),
    subLink : [
      {
        title: 'Merchant Onboarding',
        path: '/app/merchants',
        icon: icon('ic_user'),
      },
    ]
  },
  // {
  //   title: 'Support Tickets',
  //   path: '/comingsoon',
  //   icon: icon('ic_notification_mail'),
  // },
  // {
  //   title: 'Retention Queue',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'Pre-Check Queue',
  //   path: '/comingsoon',
  //   icon: icon('ic_notification_mail'),
  // },
  // {
  //   title: 'Administration',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },

  // {
  //   title: 'Utilities',
  //   path: '/comingsoon',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'user',
  //   path: '/app/user',
  //   icon: icon('ic_user'),
  // },
  /* {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  }, */
];

export default navConfig;