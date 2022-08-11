import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

const config = [
  {
    external: ['bowser'],
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/tallyho-onboarding.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/tallyho-onboarding.es.js',
        format: 'es',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/tallyho-onboarding.bundle.js',
        format: 'iife',
        name: 'TallyHoOnboarding',
      },
    ],
    plugins: [typescript(), resolve()],
  },
];

export default config;
