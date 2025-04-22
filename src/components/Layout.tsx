import Navbar from './Navbar'
import Footer from './Footer'
import ScrollIndicator from './ScrollIndicator'
import PageTransition from './PageTransition'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <PageTransition>{children}</PageTransition>
      </main>
      <ScrollIndicator />
      <Footer />
    </div>
  )
} 