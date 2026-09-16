import React from 'react'
import Home from "@/pages/Homepage"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Digital Growth",
  description:
    "Refinix Solutions helps businesses build high-performance websites, custom software, apps and digital growth systems through web development, SEO and digital marketing.",
};

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page