import EditFormPage from "@/components/EditFormPage";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogId = (await params).id;

  return <div>
    <EditFormPage blogId={blogId} />
  </div>;
}
