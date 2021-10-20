export const routes = {
  signin: { path: '/signin', isPublic: true},
  signup: { path: '/signup', isPublic: true},

  home: { path: '/home', isPublic: false},
  user: { path: '/user', isPublic: false},
}

export const isPublicRoute = path => {
  let isPublic = false;
  for (var key in routes) {
      if (routes.hasOwnProperty(key) && !_.isNil(routes[key].path) && routes[key].path === path) {
          isPublic = routes[key].isPublic === true;
          break;
      }
  }
  return isPublic;
}
