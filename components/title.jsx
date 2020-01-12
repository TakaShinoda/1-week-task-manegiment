import React from 'react'
import { useTrail, animated } from 'react-spring'

const items = ['S', 'c', 'h', 'e', 'd', 'u','l','e']
const config = { mass: 5, tension: 1800, friction: 200 }

const Title = () => {
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}><h1>{items[index]}</h1></animated.div>
          </animated.div>
        ))}
        <style jsx>{`
            .trails-main {
                height: 100%;
                display: flex;
                justify-content: center;
                color: #FF7E73;
                line-height: 80px;
                
                font-family: 'Comic Sans MS', cursive;
                font-size: 50px;
                margin: 0;
                padding-top: 80px;
                padding-bottom: 160px;
            }
        `}</style>
    </div>
  )
}
export default Title;
