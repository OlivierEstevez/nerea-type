import container from "../styles/Containers.module.css"

export default function Footer(props) {
  return (
    <div className={`${container.fixed} ${container["padding-small"]} ${container["space-between"]} footer`}>
        <p>Download font: {props.font}</p>
        <button>icon</button>

        <style jsx>{`
                .footer {
                    bottom: 0px;
                  
                    padding-top: 12px;
                    padding-bottom: 12px;
                
                    background: var(--color-accent);
                    color: var(--color-black);
                    border-bottom: 1px solid var(--color-black);
                    border-top: 1px solid var(--color-black);

                    z-index: 10;
                }

            `}</style>
    </div>
  )
}
