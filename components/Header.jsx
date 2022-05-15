import Link from 'next/link'
import { useState, useEffect } from "react"
import container from "../styles/Containers.module.css"

export default function Header(props) {

    const [themeIndex, setThemeIndex] = useState(0)

    const themes = [
        "white",
        "black",
        "green",
        "purple",
        "brown"
    ]

    useEffect(() => {
        document.body.dataset.theme = themes[themeIndex%themes.length]
    }, [themeIndex])

    return (
        <div className={`${container.fixed} ${container["padding-small"]} ${container["space-between"]} header`}>
            <div>{props.date}</div>
            <div>
                <Link href="/record"><a>Record</a></Link>
                <button onClick={() => setThemeIndex(themeIndex + 1)}>theme switch</button>
            </div>

            <style jsx>{`
                .header {
                    top: 0px;
                
                    padding-top: 12px;
                    padding-bottom: 12px;
                
                    background: var(--color-foreground);
                    border-bottom: 1px solid var(--color-base);
                    border-top: 1px solid var(--color-base);

                    z-index: 10;
                }

            `}</style>

        </div>

    )
}