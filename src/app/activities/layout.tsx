import type { Metadata } from 'next'
import { generatePageMetadata, METADATA_CONFIGS } from '@/utils/metadata'

export const metadata: Metadata = generatePageMetadata(METADATA_CONFIGS.activities)

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
