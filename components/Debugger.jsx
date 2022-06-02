import { useState, useEffect } from "react"

export default function Debugger(props) {

    const [isActive, setActive] = useState("false");
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.keyCode == 72)
                setActive(!isActive)
        }
        document.addEventListener("keydown", keyDownHandler);

        // clean up
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        }

    }, [isActive])

    // const [axes, setAxes] = useState({})
    // useEffect(()=>{
    //     props.axes?.map(axis => {
    //         setAxes({
    //             ...axis,
    //             cosa: {
    //                 name: axis.tag
    //             }
    //         })
    //         console.log(axes)
    //     })
    // }, [props.axes])

    const inputs = props.axes?.map(axis => {        
        return (
            <div key={axis.tag}>
                <label htmlFor={axis.tag} style={{display: "inline-block" ,minWidth: 100}}>{axis.name.en}</label>
                <input 
                type="range" name={axis.tag} id={axis.tag}
                min={axis.minValue} max={axis.maxValue} defaultValue={axis.defaultValue}
                // onChange={e => document.querySelectorAll(".variable-type").style.fontVariationSettings = `\"${axis.tag}\" ${e.target.value}`}
                />
                <span>{axis.defaultValue}</span>
            </div>
        )
    })


    return (
        <div className={`debugger ${isActive ? "invisible" : "visible"}`}>

            <span>Variable Axes</span>

            {inputs}

            <style jsx>{`
            .debugger {
                position: fixed;
                right: 60px;
                top: 60px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                background: var(--color-background);
                border: 1px solid var(--color-base);
                padding: 12px;
                z-index: 99;
            }

        `}</style>
        </div>
    )
}
