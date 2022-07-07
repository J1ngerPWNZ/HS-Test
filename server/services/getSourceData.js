import fetch from "node-fetch";

export default async function getSourceData({ page, per_page }) {
  const url = `https://api.github.com/repos/facebook/react/commits?per_page=${per_page}&page=${page}`;

  return await fetch(url, {
    method: "GET",
    headers: {
      authorization: "token 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",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}
