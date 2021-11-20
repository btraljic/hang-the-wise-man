import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = function ({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
