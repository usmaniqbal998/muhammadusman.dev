export async function getViews(slug: string) {
  try {
    let res = await fetch(`/postview/${slug}`);
    const { data } = await res.json();
    if (res.ok) return data.views;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
}

export async function updateViews(slug: string) {
  try {
    if (!window.sessionStorage.getItem(slug)) {
      window.sessionStorage.setItem(slug, "true");

      await fetch(`/postview/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
}
