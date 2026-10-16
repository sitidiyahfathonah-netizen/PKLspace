import DetailTemplate from "@/components/templates/DetailTemplate";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <DetailTemplate slug={id} />;
}