/* eslint-disable no-restricted-syntax */
import * as components from './components';

const ComponentLibrary = {
  install(Vue, options = {}) {
    // components
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    (components as any).forEach((compName) => {
      const view = components[compName];

      Vue.component(view.name, view);
    });
  },
};

export default ComponentLibrary;