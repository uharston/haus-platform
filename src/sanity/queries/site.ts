export async function getSiteConfig(sanityClient: any) {
    return await sanityClient.fetch(
        `*[_type == "siteConfig" && _id == "siteSettings"][0] {
  title,
  "primaryColor": primaryColor.hex,
  "logo": {
    "url": logo.asset->url,
    "width": logo.asset->metadata.dimensions.width,
    "height": logo.asset->metadata.dimensions.height
  },
  // Mapping the array of social objects
  "socials": social[] {
    platform,
    url
  },
  "seo": {
    "title": metaTitle,
    "description": metaDescription
  }
}`,
    );
}
