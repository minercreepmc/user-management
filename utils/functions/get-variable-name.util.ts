export function getVariableName(variable: any): string {
  const obj = { variable };
  return Object.keys(obj)[0];
}
