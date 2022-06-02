import Link from 'next/link'
import { useState, useEffect } from "react"
import container from "../styles/Containers.module.css"
import iconThemeSwitch from './icons/iconThemeSwitch'

export default function Header(props) {

    const [dateState, setDateState] = useState()
    const [themeIndex, setThemeIndex] = useState(0)

    const themes = [
        "white",
        "black",
        "green",
        "purple",
        "brown"
    ]

    useEffect(() => {
        const fetchTime = async () => {
          const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Madrid")
          const data = await res.json()
          setDateState(data)
        }
        fetchTime()
        setInterval(() => fetchTime(), 1000)
      }, [])

    useEffect(() => {
        document.body.dataset.theme = themes[themeIndex % themes.length]
    }, [themeIndex])

    useEffect(() => {
        if(props.theme)
            props.theme(themes[themeIndex % themes.length])
    }, [props.theme])

    return (
        <div className={`${container.fixed} ${container["padding-small"]} ${container["space-between"]} ${container["vertical-center"]} header`}>
            <div>{`${dateState?.datetime.split("T")[1].split("+")[0].split(".")[0]} [${dateState?.abbreviation}]`}</div>
            <div className={`record-theme ${container["flex"]} ${container["vertical-center"]}`}>
                <Link href="/record"><a>Record</a></Link>
                <button className="icon-button" onClick={() => setThemeIndex(themeIndex + 1)}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.8582" cy="10.9292" r="10" stroke="var(--color-base)" strokeWidth="1.5" />
                        <path fillRule="evenodd" clipRule="evenodd" fill="var(--color-base)" d="M3.85815 18.0704C5.6731 19.922 8.20236 21.0708 10.9999 21.0708C16.5228 21.0708 20.9999 16.5936 20.9999 11.0708C20.9999 8.27322 19.8512 5.74396 17.9996 3.92901L3.85815 18.0704Z" />
                    </svg>

                </button>
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
                .record-theme a {
                    margin-right: 24px;
                }

            `}</style>

        </div>

    )
}