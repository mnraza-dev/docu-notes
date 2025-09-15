import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Code2Icon, Edit, Settings2 } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl"> 
                  
                  🛠️ Build your mind like Developer</h2>
                    <p className="mt-4">
                        Docu Notes is built to make note-taking effortless and organized — so you can focus on your ideas, not the tool.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Edit
                                    className="size-8"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Quick Notes</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Write and format your notes with a clean, distraction-free editor.</p>
                        </CardContent>
                    </Card>
                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Code2Icon
                                    className="size-8"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Developer Friendly</h3>
                        </CardHeader>

                        <CardContent>
                            <p className=" text-sm">Markdown, code blocks, CLI shortcuts, and Git-style versioning — it all feels like home.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-background">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-8"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Secure By Design </h3>
                        </CardHeader>

                        <CardContent>
                            <p className=" text-sm">End-to-end encryption, zero-trust principles, and safe sync — your notes stay private by default.</p>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
