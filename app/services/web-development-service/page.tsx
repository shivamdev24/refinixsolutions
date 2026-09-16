



import WebDevelopmentServicePage from '@/pages/WebDevService'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services ",
  description:
    "Build a fast, modern and conversion-focused website with Refinix Solutions. We create business websites and digital experiences designed for performance, SEO and growth.",
};

const page = () => {
  return (
    <div>
        <WebDevelopmentServicePage />
    </div>
  )
}

export default page