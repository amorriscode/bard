import Nav from 'components/Nav'

export default function withLayout(PageComponent) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <div className="max-w-3xl mx-auto space-y-10">
        <header>
          <h1 className="font-bold text-6xl text-primary mt-4">bard.</h1>

          <Nav />
        </header>

        <PageComponent {...pageProps} />
      </div>
    )
  }
  return PageComponentWithLayout
}
