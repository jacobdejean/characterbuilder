import styled, { css } from 'styled-components'

import { useEffect, useState, useRef } from 'react'

export default function Mask(props) {
    const [top, setTop] = useState(1440 * 0.20)
    const [left, setLeft] = useState(2560 * 0.30)
    const [right, setRight] = useState(2560 * 0.20)
    const [bottom, setBottom] = useState(1440 * 0.20)
    const [screen, setScreen] = useState({ width: 0, height: 0 })

    let areas = []

    let resized = false;

    for (let i = 0; i < 4; i++) {
        areas.push({
            shade: useRef(0),
            grabber: useRef(0),
            active: false,
            resize: (areaIndex, mx, my) => {
                areaIndex == 0 && setRight(screen.width - mx)
                areaIndex == 1 && setTop(my)
                areaIndex == 2 && setLeft(mx)
                areaIndex == 3 && setBottom(screen.height - my)
            }
        })
    }

    useEffect(() => {
        setScreen({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {

        window.addEventListener('resize', _ => {
            setScreen({ width: window.innerWidth, height: window.innerHeight })
            resized = true
        })
        window.addEventListener('mouseup', _ => { areas.forEach(a => a.active = false) });
        window.addEventListener('mousemove', evt => {
            for (let i = 0; i < 4; i++) {
                if (areas[i].active)
                    areas[i].resize(i, evt.clientX, evt.clientY)
            }
        })
    })

    if (!resized) {

        useEffect(() => {
            areas[0].shade.current.style.left = (screen.width - right) + 'px';
            areas[1].shade.current.style.right = right + 'px'
            areas[3].shade.current.style.right = right + 'px'

            areas[0].grabber.current.style.left = (screen.width - right - 16) + 'px'
            areas[1].grabber.current.style.right = right + 'px'
            areas[3].grabber.current.style.right = right + 'px'
        }, [right])

        useEffect(() => {
            areas[1].shade.current.style.bottom = (screen.height - top) + 'px';

            areas[0].grabber.current.style.top = top + 'px'
            areas[1].grabber.current.style.top = top + 'px'
            areas[2].grabber.current.style.top = top + 'px';
        }, [top])

        useEffect(() => {
            areas[1].shade.current.style.left = left + 'px'
            areas[2].shade.current.style.right = (screen.width - left) + 'px';
            areas[3].shade.current.style.left = left + 'px'

            areas[1].grabber.current.style.left = left + 'px'
            areas[2].grabber.current.style.left = left + 'px'
            areas[3].grabber.current.style.left = left + 'px'
        }, [left])

        useEffect(() => {
            areas[3].shade.current.style.top = (screen.height - bottom) + 'px';

            areas[0].grabber.current.style.bottom = bottom + 'px'
            areas[2].grabber.current.style.bottom = bottom + 'px';
            areas[3].grabber.current.style.top = (screen.height - bottom) + 'px';
        }, [bottom])

    }

    return (
        <>
            <Shade ref={areas[0].shade} />
            <VerticalGrabber
                ref={areas[0].grabber}
                onMouseDown={_ => areas[0].active = true} />

            <Shade ref={areas[1].shade} />
            <HorizontalGrabber
                ref={areas[1].grabber}
                onMouseDown={_ => areas[1].active = true} />

            <Shade ref={areas[2].shade} />
            <VerticalGrabber
                ref={areas[2].grabber}
                onMouseDown={_ => areas[2].active = true} />

            <Shade ref={areas[3].shade} />
            <HorizontalGrabber
                ref={areas[3].grabber}
                onMouseDown={_ => areas[3].active = true} />
        </>
    )
}

const Shade = styled.div`
    background-color: black;
    opacity: 80%;

    position: absolute;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    z-index: 1;
`

const VerticalGrabber = styled.div`
    width: 1rem;
    background-color: #3D00B8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    cursor: ew-resize;

    &:hover {
        filter: invert(100%);
    }
`

const HorizontalGrabber = styled.div`
    height: 1rem;
    background-color: #3D00B8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    cursor: ns-resize;

    &:hover {
        filter: invert(100%);
    }
`