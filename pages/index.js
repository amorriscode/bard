import withLayout from 'components/withLayout'

function Home() {
  return (
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
  )
}

export default withLayout(Home)
