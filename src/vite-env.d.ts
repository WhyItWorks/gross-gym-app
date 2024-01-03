declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module 'react-actioncable-provider'
declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '*.gif' {
  const image: string
  export default image
}

declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}
