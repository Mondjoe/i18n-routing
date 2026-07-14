type Lang = "en" | "de" | "cs";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return <>{children}</>;
}