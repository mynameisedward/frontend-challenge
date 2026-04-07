declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.jsx" {
  const component: React.ComponentType<any>; // Генеральный тип для компонентов
  export default component;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.css" {
  const styles: { [key: string]: string };
  export default styles;
}
