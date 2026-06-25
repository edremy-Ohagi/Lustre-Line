import { Link, Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header" aria-label="南望玉叙主导航">
        <Link className="brand-link" to="/" aria-label="返回南望玉叙首页">
          <span className="brand-logo-frame" aria-hidden="true">
            <img
              className="brand-logo"
              src="/brand/logo-mark.png"
              alt=""
              width="44"
              height="44"
            />
          </span>
          <span className="brand-name">南望玉叙</span>
        </Link>
        <nav className="header-nav" aria-label="页面导航">
          <a href="#products">作品</a>
          <a href="#contact">咨询</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
