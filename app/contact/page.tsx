


import React from 'react'
import ContactPage from "@/pages/contactpage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US | Start Your Project",
  description:
    "Have a website, software, app or digital growth project in mind? Contact Refinix Solutions to discuss your requirements and find the right next step.",
};

const page = () => {
  return (
    <div>
      <ContactPage/>
    </div>
  )
}

export default page