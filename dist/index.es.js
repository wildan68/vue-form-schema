import { reactive as a, h as l } from "vue";
const i = a({
  components: {}
}), m = () => ({
  setConfig: ({ components: o }) => i.components = { ...i.components, ...o },
  config: i
}), S = () => {
  const { config: c } = m(), o = ({ schema: n, data: e, onUpdate: t }) => {
    var f;
    const r = c.components[n.component];
    return console.log("component schema", r), l(
      r ?? "div",
      (() => {
        const s = n.config;
        if (s && e) {
          const u = s.key, g = (d) => {
            if (t)
              return t(u, d);
          };
          return { ...n.props, modelValue: e[u], "onUpdate:modelValue": g };
        }
        return n.props;
      })() || {},
      n.slots ? n.slots : (f = n.children) == null ? void 0 : f.map((s) => o({ schema: s, data: e, onUpdate: t }))
    );
  };
  return {
    setSchema: ({ schema: n, data: e, onUpdate: t }) => Array.isArray(n) ? l(
      "div",
      {},
      n.map((r) => o({ schema: r, data: e, onUpdate: t }))
    ) : o({ schema: n, data: e, onUpdate: t })
  };
}, v = {
  install(c, o) {
    const { setConfig: p } = m();
    o && p(o);
  }
};
export {
  v as default,
  m as useConfig,
  S as useRender
};
