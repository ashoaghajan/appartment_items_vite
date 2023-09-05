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

export const colors = [
  { value: '#FFA500', name: 'Orange', textColor: 'black' },
  { value: '#800080', name: 'Purple', textColor: 'white' },
  { value: '#8B4513', name: 'Brown', textColor: 'white' },
  { value: '#FFC0CB', name: 'Pink', textColor: 'black' },
  { value: '#808080', name: 'Gray', textColor: 'black' },
  { value: '#008080', name: 'Teal', textColor: 'white' },
  { value: '#000000', name: 'Black', textColor: 'white' },
  { value: '#FFFFFF', name: 'White', textColor: 'black' },
]
