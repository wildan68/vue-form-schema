import { reactive as C, h as p } from "vue";
const s = C({
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
    WYSIWYG: null,
    TABLE: null
  }
}), E = () => ({
  setConfig: ({ components: o }) => s.components = { ...s.components, ...o },
  config: s
}), g = () => {
  const { config: t } = E(), o = ({ schema: n, data: l, onUpdate: e }) => {
    var i;
    const u = t.components[n.component];
    return p(
      u ?? "div",
      (() => {
        const r = n.config;
        if (r && l) {
          const f = r.key, T = (m) => {
            if (e)
              return e(f, m);
          };
          return { ...n.props, modelValue: l[f], "onUpdate:modelValue": T };
        }
        return n.props;
      })() || {},
      n.slots ? n.slots : (i = n.children) == null ? void 0 : i.map((r) => o({ schema: r, data: l, onUpdate: e }))
    );
  };
  return {
    setSchema: ({ schema: n, data: l, onUpdate: e }) => Array.isArray(n) ? p(
      "div",
      {},
      n.map((u) => o({ schema: u, data: l, onUpdate: e }))
    ) : o({ schema: n, data: l, onUpdate: e })
  };
}, I = {
  install(t, o) {
    const { setConfig: c } = E();
    o && c(o);
  }
};
export {
  I as default,
  E as useConfig,
  g as useRender
};
