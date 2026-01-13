declare module "*.json" {
  const value: unknown;
  export default value;
}

declare module "@assets/*.json" {
  const value: unknown;
  export default value;
}
