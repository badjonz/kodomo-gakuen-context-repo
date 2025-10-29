import type { Metadata } from 'next'
import { generatePageMetadata, METADATA_CONFIGS } from '@/utils/metadata'

export const metadata: Metadata = generatePageMetadata(METADATA_CONFIGS.privacy)

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
