export async function getFaqs(sanityClient: any) {
	return await sanityClient.fetch(
		`*[_type == "faq"] {
  question,
  answer
}`,
	);
}



