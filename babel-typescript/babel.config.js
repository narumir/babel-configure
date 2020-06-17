/**
 * isTSX tsx 파일 사용 여부
 * jsxPragma 거... tsconfig.json에 jsx 옵션 그거...
 * allExtensions isTSX 옵션에 따라 모든 파일을 TS 또는 TSX로 구문 분석해야 함을 나타냅니다.
 * allowNamespaces typescript namespace 컴파일 옵션
 * allowDeclareFields 활성화시 class를 type으로만 사용하는 필드에서 제거 babel 8 기본 활성화
 * onlyRemoveTypeImports === import type {} from "";
 */
const tscOption = {
  isTSX: false,
  jsxPragma: "React",
  allExtensions: false,
  allowNamespaces: true,
  allowDeclareFields: true,
  onlyRemoveTypeImports: true,
};
/**
 * preset env는 stage-x 플러그인을 지원하지 않는다.
 * 또한 환경에 맞도록 설정하면 알맞게 컴파일을 한다.
 * targets.esmodules = true, 브라우져가 <script type="module"></script>를 지원 하는 경우에만,
 * targets.browsers 는 브라우져 리스트에 따른 설정 https://github.com/ai/browserslist
 * bugfixes 가 활성화 되면 대상 브라우져에서 오류난 구문을 지원하는 가장 가까운 최신 구문으로 컴파일 합니다.
 * spec은 plugins 나 presets 의 구문을 모두 지킵니다. 잠재적으로 느리게 만듬니다.
 * loose https://2ality.com/2015/12/babel6-loose-mode.html
 * debug 사용된 target 및 plugins 에 지정된 버전을 console.log에 출력 합니다.
 * include 항상 포함될 플러그인 배열
 * exclude 항상 제외될 플러그인 배열
 * useBuiltIns 은 entry는 모든 폴리필을 포함, usage는 사용되는 폴리필을 포함, false는 변환 하지 않음,
 * corejs 사용할 core-js 버전 {version: 2|3, proposals: boolean} 기본값 2 
 * forceAllTransforms 강제로 모두 대상 환경에 필요한 변경을 실행 UglifyJS 또는 ES5만 지원하는경우 유용
 * configPath 설정이 browserlist 시작점이 발견 할때까지 올라갑니다. 기본값 prcess.cwd(),
 * ignoreBrowserslistConfig browserlist 설정 무시. 기본값 false
 * browserslistEnv https://github.com/browserslist/browserslist#configuring-for-different-environments
 * shippedProposals 기본 값 false
 * When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
 * Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.
 */
const envOption = {
  targets: {
    node: "current",
  },
  useBuiltIns: "usage",
  bugfixes: true,
  corejs: {
    version: 3,
    proposals: true,
  },
};
const aliasOption = {
  root: [
    "./src",
  ],
  alias: {
    src: "./src",
  },
};
/**
 * tsconfig.json에서 noEmit이 활성화 되어야 합니다. 그래야 ts가 지 멋대로 컴파일 되는거 막음... 그리고 제대로 동작함...
 */
module.exports = {
  presets: [
    ["@babel/preset-typescript", tscOption],
    ["@babel/preset-env", envOption],
  ],
  plugins: [
    ["module-resolver", aliasOption],
  ],
};
