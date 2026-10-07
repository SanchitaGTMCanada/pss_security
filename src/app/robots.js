const BASE_URL = "https://preventativesecurityservices.ca";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}