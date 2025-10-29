import type { Metadata } from 'next'
import { generatePageMetadata, METADATA_CONFIGS } from '@/utils/metadata'

export const metadata: Metadata = generatePageMetadata(METADATA_CONFIGS.menu)

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
