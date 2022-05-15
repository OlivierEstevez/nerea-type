import { useState } from "react"
import container from "../styles/Containers.module.css"
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default function TypeTester(props) {

  const [typeSize, setTypeSize] = useState(150)
  const [spacing, setSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(180)
  const [value, setValue] = useState('left');

  return (
    <div>

      <div className={`${container.fullpage} typeControls`}>
        <div className={`${container.default}`}>

          <label htmlFor="typesize">typesize</label>
          <input type="range" name="typesize" id="typesize" min={80} max={220} defaultValue={typeSize} onChange={e => setTypeSize(e.target.value)} />
          <span>{typeSize}</span>

          <label htmlFor="spacing">spacing</label>
          <input type="range" name="spacing" id="spacing" min={-10} max={10} defaultValue={spacing} onChange={e => setSpacing(e.target.value)} />
          <span>{spacing}</span>

          <label htmlFor="lineHeight">lineHeight</label>
          <input type="range" name="lineHeight" id="lineHeight" min={100} max={260} defaultValue={lineHeight} onChange={e => setLineHeight(e.target.value)} />
          <span>{lineHeight}</span>


          <button>AllCaps</button>
          <button>Default</button>

          <ToggleGroup.Root
            type="single"
            value={value}
            onValueChange={(value) => {
              if (value) setValue(value);
            }}
          >
            <ToggleGroup.Item value="left">
              <p>Left</p>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="center">
              <p>Center</p>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="right">
              <p>Right</p>
            </ToggleGroup.Item>
          </ToggleGroup.Root>

          <span>{value}</span>

        </div>
      </div>

      <div className={`${container.default} ${container["padding-big"]}`}
        style={{
          marginTop: 50,
          fontSize: `${typeSize}px`,
          letterSpacing: `${spacing / 100}em`,
          lineHeight: `${lineHeight / 150}`,
          textAlign: value
        }}
      >
        {props.children}
      </div>

      <style jsx>{`
        .typeControls {
          background-color: var(--color-foreground);
          border-top: 1px solid var(--color-base);
          border-bottom: 1px solid var(--color-base);
          padding: 12px 0px;
        }


      `}</style>
    </div>
  )
}
