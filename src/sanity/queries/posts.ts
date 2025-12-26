export async function getAllPosts(sanityClient: any) {
	return await sanityClient.fetch(
		`*[_type == "post"] | order(pubDate desc) {
        ...,
        "image": {
            "source": image.source.asset->url,
            "alt": image.alt
        }
    }`,
	);
}
