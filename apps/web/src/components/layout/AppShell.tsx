import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { publicAsset } from '../../utils/publicAsset'
import { SiteFooter } from './SiteFooter'

export function AppShell() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
    }

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 60)
  }

  return (
    <div className="app-shell">
      <header className="app-header" aria-label="南望玉叙主导航">
        <Link className="brand-link" to="/" aria-label="返回南望玉叙首页">
          <span className="brand-logo-frame" aria-hidden="true">
            <img
              className="brand-logo"
              src={publicAsset('brand/logo-mark.png')}
              alt=""
              width="44"
              height="44"
              decoding="async"
            />
          </span>
          <span className="brand-name">南望玉叙</span>
        </Link>
        <nav className="header-nav" aria-label="页面导航">
          <button type="button" onClick={() => scrollToSection('products')}>
            作品
          </button>
          <button type="button" onClick={() => scrollToSection('contact')}>
            咨询
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}
