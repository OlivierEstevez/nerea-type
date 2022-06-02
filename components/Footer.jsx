import container from "../styles/Containers.module.css"

export default function Footer(props) {
  return (
    <div className={`${container.fixed} ${container["padding-small"]} ${container["space-between"]} ${container["vertical-center"]} footer`}>
      <p>Download font: {props.font}</p>
      <button className="icon-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3L12.75 3ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17L11.25 17ZM11.25 3L11.25 17L12.75 17L12.75 3L11.25 3Z" fill="var(--footer-color)" />
          <path d="M7.53033 12.4697C7.23744 12.1768 6.76256 12.1768 6.46967 12.4697C6.17678 12.7626 6.17678 13.2374 6.46967 13.5303L7.53033 12.4697ZM12 18L11.4697 18.5303C11.7626 18.8232 12.2374 18.8232 12.5303 18.5303L12 18ZM17.5303 13.5303C17.8232 13.2374 17.8232 12.7626 17.5303 12.4697C17.2374 12.1768 16.7626 12.1768 16.4697 12.4697L17.5303 13.5303ZM6.46967 13.5303L11.4697 18.5303L12.5303 17.4697L7.53033 12.4697L6.46967 13.5303ZM12.5303 18.5303L17.5303 13.5303L16.4697 12.4697L11.4697 17.4697L12.5303 18.5303Z" fill="var(--footer-color)" />
          <path d="M3 17.5V21.5H22V17.5" stroke="var(--footer-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <style jsx>{`
                .footer {
                    --footer-background: var(--color-accent);
                    --footer-color: var(--color-black);

                    bottom: 0px;
                  
                    padding-top: 12px;
                    padding-bottom: 12px;
                
                    background: var(--footer-background);
                    color: var(--footer-color);
                    border-bottom: 1px solid var(--color-black);
                    border-top: 1px solid var(--color-black);

                    z-index: 10;

                    cursor: pointer;

                }

                .footer:hover {
                  --footer-background: var(--color-base);
                  --footer-color: var(--color-accent);
                }

            `}</style>
    </div>
  )
}
