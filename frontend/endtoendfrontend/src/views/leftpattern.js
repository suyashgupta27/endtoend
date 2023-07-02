import React from 'react'

function leftpattern() {
  return (
    <svg
        className="absolute left-0 max-w-md mt-24 -ml-64 left-svg"
        viewBox="0 0 423 423"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="100%"
            y1="0%"
            x2="4.48%"
            y2="0%"
            id="linearGradient-1"
          >
            <stop stopColor="#5C54DB" offset="0%" />
            <stop stopColor="#6A82E7" offset="100%" />
          </linearGradient>
          <filter
            x="-9.3%"
            y="-6.7%"
            width="118.7%"
            height="118.7%"
            filterUnits="objectBoundingBox"
            id="filter-3"
          >
            <feOffset dy={8} in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              stdDeviation={8}
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              in="shadowBlurOuter1"
            />
          </filter>
          <rect id="path-2" x={63} y={504} width={300} height={300} rx={40} />
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
          opacity=".9"
        >
          <g id="Desktop-HD" transform="translate(-39 -531)">
            <g id="Hero" transform="translate(43 83)">
              <g id="Rectangle-6" transform="rotate(45 213 654)">
                <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2" />
                <use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
              </g>
            </g>
          </g>
        </g>
      </svg>
  )
}

export default leftpattern