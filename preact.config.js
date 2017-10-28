import cssStandards from 'spike-css-standards'
import sugarss from 'sugarss'

export default (config, env, helpers) => {
  helpers.getLoadersByName(
    config,
    'postcss-loader'
  )[0].loader.options = cssStandards({ parser: sugarss })
}
