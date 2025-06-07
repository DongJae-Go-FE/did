import Empty from "@/components/Empty";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw] bg-white">
      <Empty description="404 Error 해당 페이지가 없습니다." />
    </div>
  );
}
