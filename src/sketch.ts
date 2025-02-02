import { Styles, styles } from './styles';

interface Sketch extends Styles {
  text: string;
  log: () => void;
}

const target: Styles = {
  ...styles,
};

const handler = {
  get(selfObj: any, prop: string): any {
    if (prop === 'log') {
      return () => console.log(selfObj.text + selfObj.reset);
    } else if (prop === 'text') {
      return selfObj.text + selfObj.reset;
    } else if (typeof selfObj.text === 'string' && prop in selfObj) {
      const newObj = { ...selfObj, text: selfObj[prop as keyof Styles] + selfObj.text };
      return new Proxy(newObj, handler) as Sketch;
    } else {
      console.log('Invalid method');
      return undefined;
    }
  },
};

export const sketch = (payload: string | object) => {
  const initialObj = { ...target, text: typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2) };
  return new Proxy(initialObj, handler);
};

