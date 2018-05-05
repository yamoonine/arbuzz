import type from './utils/index';
import '../sass/main.sass';

let result = type(Symbol('type checker'));

console.log(result);