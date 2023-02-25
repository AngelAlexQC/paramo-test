export function getHighlightedResume(content, value) {
  const withoutTags = content.replace(/(<([^>]+)>)/gi, "");
  const withoutTagsResum = withoutTags.slice(0, 100);
  // highlight search term occurrences
  const highlight = withoutTagsResum.replace(
    new RegExp(value, "gi"),
    (match) => `<strong>${match}</strong>`
  );
  return `${highlight}...`;
}
