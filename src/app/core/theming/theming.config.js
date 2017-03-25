/**
 * Created by rahul j jadav on 3/11/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
    $mdThemingProvider.definePalette('defaultBlueTheme', {
      '50': 'e4f2fe',
      '100': 'bce0fb',
      '200': '90cbf9',
      '300': '64b6f7',
      '400': '42a6f5',
      '500': '2196f3',
      '600': '1d8ef1',
      '700': '1883ef',
      '800': '1479ed',
      '900': '0b68ea',
      'A100': 'ffffff',
      'A200': 'e1ecff',
      'A400': 'aeccff',
      'A700': '95bcff',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200',
        '300',
        '400',
        'A100',
        'A200',
        'A400',
        'A700'
      ],
      'contrastLightColors': [
        '500',
        '600',
        '700',
        '800',
        '900'
      ]
    });

    $mdThemingProvider.definePalette('accentTheme', {
      '50': 'ffebe4',
      '100': 'ffcdbd',
      '200': 'ffab91',
      '300': 'ff8964',
      '400': 'ff7043',
      '500': 'ff5722',
      '600': 'ff4f1e',
      '700': 'ff4619',
      '800': 'ff3c14',
      '900': 'ff2c0c',
      'A100': 'ff5722',
      'A200': 'ff5722',
      'A400': 'ff5722',
      'A700': 'ff5722',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500'
      ],
      'contrastLightColors': [
        '600',
        '700',
        '800',
        '900',
        'A100',
        'A200',
        'A400',
        'A700'
      ]
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('defaultBlueTheme')
      .accentPalette('accentTheme')
  }
})();
