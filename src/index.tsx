import { Avatar } from './lib/components/avatar';

export default {
  multiply(a: number, b: number, c: number) {
    return Promise.resolve(a * b * c * Avatar);
  },
};
