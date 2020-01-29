import React from 'react';
import { useTrail, animated } from 'react-spring';
import MediaQuery from "react-responsive";

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
              {/**PC画面サイズ */}
              <MediaQuery query="(min-width: 768px)">
                <div className="min-width">
                <animated.div style={{ height }}><h1>{items[index]}</h1></animated.div>
                </div>
              </MediaQuery>
              {/**スマホ画面サイズ */}
              <MediaQuery query="(max-width: 767px)" className="max-width">
                <div className="max-width">
                  <animated.div style={{ height }}><h1>{items[index]}</h1></animated.div>
                </div>
              </MediaQuery>
          </animated.div>
        ))}
        <style jsx>{`
            .trails-main {
              height: 100%;
              display: flex;
              justify-content: center;
              line-height: 80px;
              font-family: 'Comic Sans MS', cursive;
              margin: 0;
              padding-top: 80px;
              padding-bottom: 160px;
            }
            .min-width h1 {
              color: #7ebc59;
              font-size: 150px;
            }
            .max-width h1 {
              color: #7ebc59;
              font-size: 90px;
            }
        `}</style>
    </div>
  )
}
export default Title;
