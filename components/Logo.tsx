import { useTheme } from "@nextui-org/react";

export const Logo = ({ width, height }: { width: number, height: number }) => {
    const { type } = useTheme();

    return (
        <svg viewBox="0 0 500 500" style={{ width: width, height: height}}>
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="30s"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text dy="0" textLength="1220">
              <textPath xlinkHref="#textcircle" style={{
                fontSize: '48px',
                fontFamily:  'EXCRATCH-Thin',
                fill: type == 'dark' ? 'white' : 'black',               
              }}>Olivier • Winkler •</textPath>
            </text>
          </svg>
    )
}