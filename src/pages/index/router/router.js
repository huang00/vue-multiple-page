import publicRouter from '@/router'

const home = {
  path: '/',
  name: 'HelloWorld',
  component: () => import('../components/HelloWorld')
}

export const routers = [ home ].concat(publicRouter)
