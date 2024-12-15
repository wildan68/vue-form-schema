import { reactive as s } from "vue";
const o = s({
  components: []
}), c = () => ({
  setComponents: ({ components: n }) => o.components.splice(0, o.components.length, ...n)
}), p = {
  install(t, n) {
    const { setComponents: e } = c();
    n && e(n);
  }
};
export {
  p as default,
  c as useConfig
};
