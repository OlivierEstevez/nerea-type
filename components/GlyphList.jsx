export function GlyphListContainer(props) {
    return (
      <div className="glyphsContainer">
          {props.children}
  
          <style jsx>{`
              .glyphsContainer {
                  display: grid;
                  grid-template-columns: repeat(16, 1fr);
                  gap: 0px;
                  margin: 72px 0px;     
              }
          `}</style>
      </div>
    )
  }

export function GlyphList(props) {
    const rawString = String.raw`${props.children}`
  return (
    <div className="glyph variable-type" id={props.id}>
        {rawString}

        <span>{rawString}</span>

        <style jsx>{`
            .glyph{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                aspect-ratio: 1;
                font-size: 4.8rem;
                position: relative;
                cursor: crosshair;
            }
            .glyph span {
                position: absolute;
                height: 0%;
                width: 0%;
                font-size: 250%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                background-color: var(--color-foreground);
                border: 1px solid var(--color-base);
                pointer-events: none;
                z-index: 1;
                box-sizing: border-box;
                display: none;
            }
            .glyph:hover span {
                height: 250%;
                width: 250%;
                display: inherit;
            }
        `}</style>
    </div>
  )
}