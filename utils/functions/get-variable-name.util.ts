export function getVariableName(variable: any): string {
  const obj = { variable };
  console.log(Object.keys(obj)[0]);
  return Object.keys(obj)[0];
}
