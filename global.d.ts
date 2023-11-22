// global.d.ts
declare module '*.png' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: StaticImageData;
    export default content;
  }
  
  declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  