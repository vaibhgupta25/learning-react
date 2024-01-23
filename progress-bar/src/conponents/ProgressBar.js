import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value = 0 }) => {
    const [percent, setPercent] = useState(value)
    useEffect(() => {
        setPercent(Math.min(100, Math.max(0, value)));
    }, [value])
    return (
        <>
            <div className='w-96 h-6 border rounded-full mt-3 relative overflow-hidden'>
                <span className={`absolute w-full h-full flex justify-center items-center ${percent > 49 ? "text-white" : "text-black"} z-10`}>
                    {percent.toFixed()}%
                </span>
                <div
                    className={`h-full bg-slate-500 transition-all origin-left`}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={percent}
                    style={{transform:`scaleX(${percent/100})`}}
                     />
            </div>
            <div>{percent === 100 ? "Completed!" : "Loading...."}</div>
        </>
    )
}

export default ProgressBar
