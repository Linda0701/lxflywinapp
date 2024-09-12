import { defs as mtcDefs, mtc } from './mtc';

(window as any).defs = {
  mtc: mtcDefs,
};
(window as any).API = {
  mtc,
};
