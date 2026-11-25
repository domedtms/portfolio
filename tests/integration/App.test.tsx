import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import App from '../../src/app/App'

describe('Application composition', () => {
  it('renders the portfolio without throwing errors', () => {
    expect(() => renderToStaticMarkup(<App />)).not.toThrow()
  })

  it('renders the main portfolio sections', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('id="hero"')
    expect(html).toContain('id="projects"')
    expect(html).toContain('id="contact"')
  })
})
