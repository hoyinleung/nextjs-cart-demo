import Title from "@/components/Title";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
    <Title txt={`多謝購買`} />

    <div className="flex justify-center py-32">
      <Link href={`/`} className='text-2xl bg-slate-100 px-10 py-2 rounded-lg text-slate-700'>返回首頁</Link>
    </div>
    </>
  )
}
