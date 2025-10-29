/**
 * Structured Data (JSON-LD) Utility
 *
 * Generates Schema.org structured data for SEO optimization.
 * Implements LocalBusiness (ChildCare) and EducationalOrganization schemas
 * to enable rich search results and improved local SEO.
 *
 * @see https://schema.org/ChildCare
 * @see https://schema.org/EducationalOrganization
 */

// TypeScript interfaces for type safety
interface PostalAddress {
  "@type": "PostalAddress"
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

interface GeoCoordinates {
  "@type": "GeoCoordinates"
  latitude: string
  longitude: string
}

interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification"
  dayOfWeek: string[]
  opens: string
  closes: string
}

interface ContactPoint {
  "@type": "ContactPoint"
  telephone: string
  contactType: string
  availableLanguage: string[]
}

interface LocalBusinessSchema {
  "@context": "https://schema.org"
  "@type": "ChildCare"
  name: string
  alternateName: string
  description: string
  url: string
  telephone: string
  email: string
  address: PostalAddress
  geo: GeoCoordinates
  openingHoursSpecification: OpeningHoursSpecification[]
  priceRange: string
  servesCuisine: string
  hasMap: string
}

interface EducationalOrganizationSchema {
  "@context": "https://schema.org"
  "@type": "EducationalOrganization"
  name: string
  alternateName: string
  url: string
  logo: string
  description: string
  address: Omit<PostalAddress, "streetAddress" | "postalCode">
  contactPoint: ContactPoint
  areaServed: string[]
}

/**
 * Verified NAP (Name, Address, Phone) information
 * Critical for local SEO consistency
 */
const NAP_DATA = {
  name: "こども学園 / Kodomo Gakuen",
  alternateName: "Kodomo Gakuen Preschool",
  streetAddress: "2-409 Narahashi",
  addressLocality: "Higashiyamato",
  addressRegion: "Tokyo",
  postalCode: "207-0031",
  addressCountry: "JP",
  telephone: "+81-42-590-3715",
  email: "info@kodomogakuen.com",
  latitude: "35.754746",
  longitude: "139.424596",
} as const

/**
 * Generates LocalBusiness (ChildCare) structured data schema
 *
 * This schema enables:
 * - Rich snippets in Google search (hours, phone, ratings)
 * - Google Maps integration
 * - Local pack results
 * - Business Knowledge Panel
 *
 * @returns LocalBusiness JSON-LD schema object
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: NAP_DATA.name,
    alternateName: NAP_DATA.alternateName,
    description: "Bilingual preschool serving Higashi Yamato and surrounding areas",
    url: "https://www.kodomogakuen.com",
    telephone: NAP_DATA.telephone,
    email: NAP_DATA.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP_DATA.streetAddress,
      addressLocality: NAP_DATA.addressLocality,
      addressRegion: NAP_DATA.addressRegion,
      postalCode: NAP_DATA.postalCode,
      addressCountry: NAP_DATA.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP_DATA.latitude,
      longitude: NAP_DATA.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "07:30",
        closes: "18:00",
      },
    ],
    priceRange: "¥¥",
    servesCuisine: "Japanese",
    hasMap: "https://maps.google.com/?q=Kodomo+Gakuen+Higashiyamato",
  }
}

/**
 * Generates EducationalOrganization structured data schema
 *
 * This schema enables:
 * - Educational organization recognition
 * - Service area coverage in search
 * - Language capability display
 * - Program type classification
 *
 * @returns EducationalOrganization JSON-LD schema object
 */
export function generateEducationalOrganizationSchema(): EducationalOrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: NAP_DATA.name,
    alternateName: "Kodomo Gakuen International Preschool",
    url: "https://www.kodomogakuen.com",
    logo: "https://www.kodomogakuen.com/images/logo.png",
    description: "Bilingual early childhood education serving Japanese and international families",
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP_DATA.addressLocality,
      addressRegion: NAP_DATA.addressRegion,
      addressCountry: NAP_DATA.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: NAP_DATA.telephone,
      contactType: "Admissions",
      availableLanguage: ["Japanese", "English"],
    },
    areaServed: [
      "Higashi Yamato",
      "Higashi Murayama",
      "Musashi Murayama",
      "Kodaira",
      "Tokorozawa",
      "Tachikawa",
      "Yokota Air Base",
    ],
  }
}

/**
 * Generates combined structured data for both schemas
 * Returns array of schemas for multiple JSON-LD scripts
 *
 * @returns Array of structured data schemas
 */
export function generateAllStructuredData(): [LocalBusinessSchema, EducationalOrganizationSchema] {
  return [
    generateLocalBusinessSchema(),
    generateEducationalOrganizationSchema(),
  ]
}

/**
 * Converts structured data to JSON-LD script tag content
 * Use this for embedding in Next.js layout or head
 *
 * @param schema - Schema object to convert
 * @returns JSON string suitable for script tag
 */
export function schemaToJsonLd(schema: LocalBusinessSchema | EducationalOrganizationSchema): string {
  return JSON.stringify(schema, null, 2)
}
