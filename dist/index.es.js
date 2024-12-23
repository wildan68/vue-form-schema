import { reactive as y, h as l } from "vue";
const i = y({
  components: {}
}), m = () => ({
  setConfig: ({ components: o }) => i.components = { ...i.components, ...o },
  config: i
}), a = () => {
  const { config: s } = m(), o = ({ schema: n, data: e, onUpdate: r }) => {
    var p;
    const c = s.components[n.component];
    return l(
      c ?? "div",
      (() => {
        const t = n.config;
        if (t && e) {
          const u = t.key, d = (g) => {
            if (r)
              return r(u, g);
          };
          return { ...n.props, modelValue: e[u], "onUpdate:modelValue": d };
        }
        return n.props;
      })() || {},
      n.slots ? n.slots : (p = n.children) == null ? void 0 : p.map((t) => o({ schema: t, data: e, onUpdate: r }))
    );
  };
  return {
    setSchema: ({ schema: n, data: e, onUpdate: r }) => Array.isArray(n) ? l(
      "div",
      {},
      n.map((c) => o({ schema: c, data: e, onUpdate: r }))
    ) : o({ schema: n, data: e, onUpdate: r })
  };
}, v = {
  install(s, o) {
    const { setConfig: f } = m();
    o && f(o);
  }
};
export {
  v as default,
  m as useConfig,
  a as useRender
};
