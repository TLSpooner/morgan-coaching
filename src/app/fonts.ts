import { Jomolhari } from 'next/font/google'
import localFont from 'next/font/local'

// Jomolhari only has one weight (400) available from Google Fonts
// We're using font-synthesis to allow bold/bolder rendering
export const jomolhari = Jomolhari({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const twkLausanne = localFont({
  src: [
    {
      path: '../../public/fonts/TWKLausanne-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-100Italic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-200Italic.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-300Italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-400Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-500Italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-600Italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-700Italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-800Italic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/TWKLausanne-900.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TWKLausanne-900Italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
