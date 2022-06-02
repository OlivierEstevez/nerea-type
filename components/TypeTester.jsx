import { useState } from "react"
import container from "../styles/Containers.module.css"
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default function TypeTester(props) {

  const [typeSize, setTypeSize] = useState(150)
  const [spacing, setSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(180)
  const [caps, setCaps] = useState("none")
  const [justify, setJustify] = useState("left");


  return (
    <div>
      <div className={`${container.fullpage} ${container["padding-small"]} typeControls`}>
        <div className={`${container.default} ${container["space-between"]} ${container["vertical-center"]} `}>

          <div>
            <label htmlFor="typesize">Typesize</label>
            <input type="range" name="typesize" id="typesize" min={80} max={220} defaultValue={typeSize} onChange={e => setTypeSize(e.target.value)} />
            {/* <span>{typeSize}</span> */}
          </div>

          <div>
            <label htmlFor="spacing">Spacing</label>
            <input type="range" name="spacing" id="spacing" step={0.1} min={-10} max={10} defaultValue={spacing} onChange={e => setSpacing(e.target.value)} />
            {/* <span>{spacing}</span> */}
          </div>

          <div>
            <label htmlFor="lineHeight">Line Height</label>
            <input type="range" name="lineHeight" id="lineHeight" min={100} max={260} defaultValue={lineHeight} onChange={e => setLineHeight(e.target.value)} />
            {/* <span>{lineHeight}</span> */}
          </div>

          <ToggleGroup.Root
            type="single"
            value={caps}
            onValueChange={(value) => {
              if (value) setCaps(value);
            }}
            className={container.gap16}
          >
            <ToggleGroup.Item value="none" className="icon-button">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2231 15L6.21913 0.959999H4.94113L0.00912502 15H1.62913L3.01513 10.95H8.16313L9.58513 15H11.2231ZM5.26513 4.362C5.42713 3.858 5.44513 3.462 5.44513 2.886V2.454C5.44513 2.364 5.48113 2.328 5.55313 2.328C5.62513 2.328 5.66113 2.364 5.66113 2.454V2.886C5.66113 3.462 5.66113 3.84 5.84113 4.362L7.65913 9.546H3.50113L5.26513 4.362ZM12.2884 12.138C12.2884 13.776 13.4224 15.252 15.3664 15.252C16.8064 15.252 18.2284 14.352 18.9484 11.742C18.9664 11.688 19.0024 11.652 19.0564 11.652C19.1104 11.652 19.1464 11.688 19.1464 11.76C19.1464 12.012 18.5344 13.362 18.7324 14.424L18.8404 15H20.1364V7.818C20.1364 5.712 18.6604 4.326 16.4464 4.326C14.5564 4.326 13.3504 5.226 12.5404 6.666L13.8184 7.44C14.4844 6.396 15.0244 5.658 16.4824 5.658C17.6524 5.658 18.6964 6.108 18.6964 7.548C18.6964 8.376 18.3184 8.466 15.9064 8.736C13.8364 8.97 12.2884 10.284 12.2884 12.138ZM13.8004 12.048C13.8004 10.644 15.0424 9.924 16.2484 9.78C17.2384 9.654 18.1024 9.672 18.6964 9.42C18.3184 12.57 16.9864 13.938 15.4924 13.938C14.3404 13.938 13.8004 13.164 13.8004 12.048Z" fill="var(--color-base)" />
              </svg>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="uppercase" className="icon-button">
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2895 15L6.28553 0.959999H5.00753L0.0755313 15H1.69553L3.08153 10.95H8.22953L9.65153 15H11.2895ZM5.33153 4.362C5.49353 3.858 5.51153 3.462 5.51153 2.886V2.454C5.51153 2.364 5.54753 2.328 5.61953 2.328C5.69153 2.328 5.72753 2.364 5.72753 2.454V2.886C5.72753 3.462 5.72753 3.84 5.90753 4.362L7.72553 9.546H3.56753L5.33153 4.362ZM23.1548 15L18.1508 0.959999H16.8728L11.9408 15H13.5608L14.9468 10.95H20.0948L21.5168 15H23.1548ZM17.1968 4.362C17.3588 3.858 17.3768 3.462 17.3768 2.886V2.454C17.3768 2.364 17.4128 2.328 17.4848 2.328C17.5568 2.328 17.5928 2.364 17.5928 2.454V2.886C17.5928 3.462 17.5928 3.84 17.7728 4.362L19.5908 9.546H15.4328L17.1968 4.362Z" fill="var(--color-base)" />
              </svg>
            </ToggleGroup.Item>
          </ToggleGroup.Root>

          <ToggleGroup.Root
            type="single"
            value={justify}
            onValueChange={(value) => {
              if (value) setJustify(value);
            }}
            className={container.gap16}
          >
            <ToggleGroup.Item value="left" className="icon-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5V5.5ZM19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM5 6.5H19V5.5H5V6.5Z" fill="var(--color-base)" />
                <path d="M5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5V11.5ZM13 12.5C13.2761 12.5 13.5 12.2761 13.5 12C13.5 11.7239 13.2761 11.5 13 11.5V12.5ZM5 12.5H13V11.5H5V12.5Z" fill="var(--color-base)" />
                <path d="M5 17.5C4.72386 17.5 4.5 17.7239 4.5 18C4.5 18.2761 4.72386 18.5 5 18.5V17.5ZM17 18.5C17.2761 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.2761 17.5 17 17.5V18.5ZM5 18.5H17V17.5H5V18.5Z" fill="var(--color-base)" />
              </svg>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="center" className="icon-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5V5.5ZM19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM5 6.5H19V5.5H5V6.5Z" fill="var(--color-base)" />
                <path d="M8 11.5C7.72386 11.5 7.5 11.7239 7.5 12C7.5 12.2761 7.72386 12.5 8 12.5V11.5ZM16 12.5C16.2761 12.5 16.5 12.2761 16.5 12C16.5 11.7239 16.2761 11.5 16 11.5V12.5ZM8 12.5H16V11.5H8V12.5Z" fill="var(--color-base)" />
                <path d="M6 17.5C5.72386 17.5 5.5 17.7239 5.5 18C5.5 18.2761 5.72386 18.5 6 18.5V17.5ZM18 18.5C18.2761 18.5 18.5 18.2761 18.5 18C18.5 17.7239 18.2761 17.5 18 17.5V18.5ZM6 18.5H18V17.5H6V18.5Z" fill="var(--color-base)" />
              </svg>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="right" className="icon-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5V5.5ZM19 6.5C19.2761 6.5 19.5 6.27614 19.5 6C19.5 5.72386 19.2761 5.5 19 5.5V6.5ZM5 6.5H19V5.5H5V6.5Z" fill="var(--color-base)" />
                <path d="M11 11.5C10.7239 11.5 10.5 11.7239 10.5 12C10.5 12.2761 10.7239 12.5 11 12.5V11.5ZM19 12.5C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5V12.5ZM11 12.5L19 12.5V11.5L11 11.5V12.5Z" fill="var(--color-base)" />
                <path d="M7 17.5C6.72386 17.5 6.5 17.7239 6.5 18C6.5 18.2761 6.72386 18.5 7 18.5V17.5ZM19 18.5C19.2761 18.5 19.5 18.2761 19.5 18C19.5 17.7239 19.2761 17.5 19 17.5V18.5ZM7 18.5H19V17.5H7V18.5Z" fill="var(--color-base)" />
              </svg>

            </ToggleGroup.Item>
          </ToggleGroup.Root>

        </div>
      </div>

      <div className={`variable-type ${container.default} ${container["padding-big"]}`}
        style={{
          marginTop: 48,
          marginBottom: 48,
          fontSize: `${typeSize}px`,
          letterSpacing: `${spacing / 100}em`,
          lineHeight: `${lineHeight / 150}`,
          textAlign: justify,
          textTransform: `${caps}`
        }}
      >
        {props.children}
      </div>

      <style jsx>{`
        .typeControls {
          background-color: var(--color-foreground);
          border-top: 1px solid var(--color-base);
          border-bottom: 1px solid var(--color-base);
          padding-top: 12px;
          padding-bottom: 12px;
        }
      `}</style>
    </div>
  )
}
