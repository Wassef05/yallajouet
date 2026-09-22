import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CategoryNav from './components/CategoryNav.jsx'
import HomeSections from './components/HomeSections.jsx'
import CatalogPage from './components/CatalogPage.jsx'
import BikesPage from './components/BikesPage.jsx'
import PromotionsPage from './components/PromotionsPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import CartPage from './components/CartPage.jsx'
import Story from './components/Story.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [catalogCategory, setCatalogCategory] = useState('all')
  const [toastMessage, setToastMessage] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#products' || hash === '#catalog') {
        setCurrentView('catalog')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#bikes') {
        setCurrentView('bikes')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#promotions') {
        setCurrentView('promotions')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#contact') {
        setCurrentView('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#cart') {
        setCurrentView('cart')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleNavigate = (view, sectionId, searchQuery, categoryId) => {
    if (view === 'catalog') {
      setCurrentView('catalog')
      if (categoryId) setCatalogCategory(categoryId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (view === 'bikes') {
      setCurrentView('bikes')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (view === 'promotions') {
      setCurrentView('promotions')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (view === 'contact') {
      setCurrentView('contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (view === 'cart') {
      setCurrentView('cart')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setCurrentView('home')
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setToastMessage(`« ${product.name} » a été ajouté à votre panier !`)
    setTimeout(() => setToastMessage(null), 3200)
  }

  const handleUpdateCart = (productId, delta) => {
    setCartItems((prev) => {
      if (delta <= -999) {
        // Remove completely
        return prev.filter((i) => i.id !== productId)
      }
      return prev
        .map((i) => i.id === productId ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i)
        .filter((i) => i.quantity > 0)
    })
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const goHome = () => handleNavigate('home')

  return (
    <div className="app-root">
      <Header
        currentView={currentView}
        cartCount={cartCount}
        onNavigate={handleNavigate}
      />

      {currentView === 'home' && (
        <main>
          <Hero />
          <CategoryNav onSelectCategory={(catId) => handleNavigate('catalog', null, null, catId)} />
          <HomeSections
            onNavigateToCatalog={(catId) => handleNavigate('catalog', null, null, catId)}
            onAddToCart={handleAddToCart}
          />
          <Story />
          <TrustStrip />
          <Newsletter />
        </main>
      )}

      {currentView === 'catalog' && (
        <main>
          <CatalogPage
            initialCategory={catalogCategory}
            onBackToHome={goHome}
            onAddToCart={handleAddToCart}
          />
          <TrustStrip />
          <Newsletter />
        </main>
      )}

      {currentView === 'bikes' && (
        <main>
          <BikesPage
            onBackToHome={goHome}
            onAddToCart={handleAddToCart}
          />
          <TrustStrip />
          <Newsletter />
        </main>
      )}

      {currentView === 'promotions' && (
        <main>
          <PromotionsPage
            onBackToHome={goHome}
            onAddToCart={handleAddToCart}
          />
          <TrustStrip />
          <Newsletter />
        </main>
      )}

      {currentView === 'contact' && (
        <main>
          <ContactPage onBackToHome={goHome} />
        </main>
      )}

      {currentView === 'cart' && (
        <main>
          <CartPage
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onClearCart={handleClearCart}
            onBackToHome={goHome}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      <Footer onNavigate={handleNavigate} />

      {/* Global Cart Toast */}
      {toastMessage && (
        <div className="cart-toast" role="status">
          <span className="toast-icon">🛍️</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}
