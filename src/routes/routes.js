
export const routes = {
  signin: { path: '/signin', isPublic: true},
  signup: { path: '/signup', isPublic: true},

  home: { path: '/home', isPublic: false},
  user: { path: '/user', isPublic: false},
}

export const isPublicRoute = path => {
  let isPublic = false;
  for (var key in routes) {
      if (ROUTES.hasOwnProperty(key) && !_.isNil(ROUTES[key].path) && ROUTES[key].path === path) {
          isPublic = ROUTES[key].isPublic === true;
          break;
      }
  }
  return isPublic;
}
