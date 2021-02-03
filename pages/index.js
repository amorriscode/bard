export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <h1 className="font-bold text-7xl text-primary mt-10">bard.</h1>

      <main className="text-2xl space-y-2">
        <p>Hey there! 👋</p>

        <p>
          We're working hard to make Bard into a thing that you'll want to use.
          It's not there yet. If you have an idea of what you want in an online
          publishing platform, let me know:{' '}
          <a className="font-bold text-primary hover:cursor-pointer hover:underline">
            amorriscode@gmail.com
          </a>
          .
        </p>
      </main>
    </div>
  )
}
