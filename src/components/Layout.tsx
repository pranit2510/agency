import Navbar from './Navbar'
import Footer from './Footer'
import ScrollIndicator from './ScrollIndicator'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        {children}
      </main>
      <ScrollIndicator />
      <Footer />
    </div>
  )
} 