// components/seo/organization-schema.tsx

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://refinix.in/#organization",
    name: "Refinix Solutions",
    url: "https://refinix.in",
    description:
      "Refinix Solutions provides web development, custom software, app development, SEO, digital marketing and social media services.",
    email: "contact@refinix.in",
    sameAs: [
      // Add your real profile URLs here
      // "https://www.linkedin.com/company/...",
      // "https://www.instagram.com/...",
      // "https://www.facebook.com/...",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
