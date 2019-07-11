import React from 'react'
import './Footer.css'

export default () => (
  <div>

    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Todos direitos reservados. Crafted by{' '}
          <a href="https://github.com/fdiogoc">Diogo</a>.
        </span>
      </div>
    </footer>
  </div>
)
