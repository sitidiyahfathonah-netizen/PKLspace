import DetailTemplate from "@/components/templates/DetailTemplate";

type DetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;

  return <DetailTemplate id={id} />;
};

export default DetailPage;