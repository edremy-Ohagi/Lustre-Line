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
          <img
            className="brand-logo"
            src={publicAsset('brand/logo-mark.png')}
            alt=""
            aria-hidden="true"
            width="36"
            height="36"
            decoding="async"
          />
          <span>
            <strong className="brand-name">南望玉叙</strong>
            <small>天然材质 · 实物选品</small>
          </span>
        </Link>
        <nav className="header-nav" aria-label="页面导航">
          <button type="button" onClick={() => scrollToSection('catalogue')}>
            选品
          </button>
          <button type="button" onClick={() => scrollToSection('contact')}>
            微信咨询
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
