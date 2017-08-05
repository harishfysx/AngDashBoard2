export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
  },
  {
    title: 'State',
    icon: {
      class: 'fa fa-home',
      bg: '#ea8080',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/members/state',
    badge: {
      text: 'New',
      color: '#fff',
      bg: '#E57373'
    },
    sub: [
      {
        title: 'Search',
        routing: '/members/state'
      },
      {
        title: 'Analytics',
        routing: '/members/state-analytics'
      }
    ]
  },
  {
    title: 'Widgets',
    icon: {
      class: 'fa fa-th',
      bg: '#E1BEE7',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/members/widgets'
  }
];
