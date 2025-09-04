interface Params {
  params: { slug: string[] };
}

export default function AppCatchAll({ params }: Params) {
  return (
    <section>
      <h1>Страница приложения</h1>
      <p>Путь: {"/" + params.slug.join("/")}</p>
    </section>
  );
}
