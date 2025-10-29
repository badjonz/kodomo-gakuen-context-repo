import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Page - こども学園',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
