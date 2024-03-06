import { Editor } from '../components/editor'
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
          <ToC.Section>
            <ToC.Link>Node.js</ToC.Link>
            <ToC.Link>Express</ToC.Link>
            <ToC.Link>Prisma</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        <Editor />
      </section>
    </div>
  )
}
