import { reactive as s, h as f } from "vue";
const e = s({
  components: {
    BUTTON: null,
    CHECKBOX: null,
    DATEPICKER: null,
    INPUT: null,
    NUMBER: null,
    RADIO: null,
    RANGE: null,
    SELECT: null,
    SWITCH: null,
    TEXT: null,
    TEXTAREA: null,
    TIMEPICKER: null,
    UPLOAD: null,
    WYSIWYG: null
  }
}), c = () => ({
  setConfig: ({ components: n }) => e.components = { ...e.components, ...n },
  config: e
}), m = () => {
  const { config: l } = c(), n = (o) => {
    var u;
    const t = l.components[o.component];
    return t ? f(
      t,
      o.props || {},
      (u = o.children) == null ? void 0 : u.map((p) => n(p))
    ) : (console.error(`Component for type "${o.component}" not found.`), null);
  };
  return {
    setSchema: (o) => Array.isArray(o) ? o.map((t) => n(t)) : n(o)
  };
}, E = {
  install(l, n) {
    const { setConfig: r } = c();
    n && r(n);
  }
};
export {
  E as default,
  c as useConfig,
  m as useRender
};
