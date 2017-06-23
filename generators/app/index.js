'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the slick ' + chalk.red('generator-react-ts') + ' generator!'));
  }

  writing() {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(this.templatePath('settings.json'), this.destinationPath('.vscode/settings.json'));
  }

  installingDependecies() {
    this.yarnInstall(['mobx', 'mobx-react', 'react-navigation', 'styled-components'], {
      dev: false
    });
  }

  installingDevDependencies() {
    this.yarnInstall(
      [
        '@types/jest',
        '@types/react',
        '@types/react-native',
        '@types/react-navigation',
        'jest',
        'tslint',
        'tslint-eslint-rules',
        'tslint-react',
        'tslint-eslint-rules',
        'typescript'
      ],
      { dev: true }
    );
  }
};
