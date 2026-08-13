import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from '@/components/Layout'
import { projects } from '@/content/projects'

/**
 * Todas as rotas públicas são pré-renderizadas em HTML estático no build.
 * `entry` aponta o arquivo-fonte para o SSG resolver o CSS de cada chunk
 * (sem isso o estilo pisca antes da hidratação).
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        entry: 'src/pages/Home.tsx',
        lazy: () => import('@/pages/Home').then((m) => ({ Component: m.default })),
      },
      {
        path: 'projetos',
        entry: 'src/pages/Projetos.tsx',
        lazy: () => import('@/pages/Projetos').then((m) => ({ Component: m.default })),
      },
      {
        path: 'projetos/:slug',
        entry: 'src/pages/ProjetoDetalhe.tsx',
        lazy: () => import('@/pages/ProjetoDetalhe').then((m) => ({ Component: m.default })),
        getStaticPaths: () => projects.map((p) => `/projetos/${p.slug}`),
      },
      {
        path: 'arquitetos',
        entry: 'src/pages/Arquitetos.tsx',
        lazy: () => import('@/pages/Arquitetos').then((m) => ({ Component: m.default })),
      },
      {
        path: 'sobre',
        entry: 'src/pages/Sobre.tsx',
        lazy: () => import('@/pages/Sobre').then((m) => ({ Component: m.default })),
      },
      {
        path: 'contato',
        entry: 'src/pages/Contato.tsx',
        lazy: () => import('@/pages/Contato').then((m) => ({ Component: m.default })),
      },
      {
        path: '*',
        entry: 'src/pages/NotFound.tsx',
        lazy: () => import('@/pages/NotFound').then((m) => ({ Component: m.default })),
      },
    ],
  },
]
