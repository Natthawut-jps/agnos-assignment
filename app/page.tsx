import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            ระบบฟอร์มข้อมูลคนไข้แบบ Real-time
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            ระบบบันทึกข้อมูลคนไข้ที่ทำงานแบบ real-time ด้วย Next.js และ Socket.IO
          </p>
          
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
              href="/patient"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white transition-colors hover:bg-blue-700"
            >
              ฟอร์มคนไข้
            </Link>
            <Link
              href="/staff"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              หน้าเจ้าหน้าที่
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
