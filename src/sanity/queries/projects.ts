export async function getAllProjects(sanityClient: any) {
	return await sanityClient.fetch(
		`*[_type == "project"] | order(pubDate desc) {
  title,
  pubDate,
  description,
  link,
  "imageUrl": image.asset->url,
  "alt": image.alt,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  "service": serviceCategory->title, // Pulls the title from the linked service
  author {
    name,
    link
  }
}`,
	);
}
