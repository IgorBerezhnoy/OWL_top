export const API = {
  product: {

    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find'
  },
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/'
  }
};