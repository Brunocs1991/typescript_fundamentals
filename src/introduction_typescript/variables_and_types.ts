export const variablesAndTypesExample = () => {
  let b: string = 'b';
  let n: number = 1;
  let x: boolean = true;

  console.log(b);
  console.log(n);
  console.log(x);

  let m: any = 2;
  console.log(m);
  m = 'Text';
  console.log(m);
  m = true;
  console.log(m);
};
