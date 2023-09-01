export const routes = {
  home: '/',
  create: 'create',
  details: 'details',
  login: 'login',
  registration: 'registration',
}

const sizes = {
  small: 640,
  medium: 768,
  large: 1024,
  xlarge: 1280,
}

export const device = {
  mobile: `(max-width: ${sizes.small}px)`,
  tablet: `(min-width: ${sizes.medium}px)`,
  laptop: `(min-width: ${sizes.large}px)`,
  desktop: `(min-width: ${sizes.xlarge}px)`,
}
