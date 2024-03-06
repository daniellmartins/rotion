import { Link } from 'react-router-dom'

import { ToC } from '../components/toc'

export function DocumentPage() {
  return (
    <div className="flex flex-1 py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs uppercase">
          Table of content
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
        </ToC.Root>
      </aside>
      <h1>Documento</h1>

      <Link to="/">Voltar</Link>
    </div>
  )
}
