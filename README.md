# Flexomatic CSS Framework

At the moment its only a stripped down [Bulma](http://bulma.io/) with some slight modification but planning to developed it further as a personal css framework with automated tests and maybe a gui build system to set some default variables..

## Usage

Check `src/scss/vars/variables.scss` and `src/scss/vars/colors.scss` and add those to your variables (remove the `!default` statement and import them first):

```scss
@import 'my-vars';
@import '../bower_components/flexomatic/src/scss/flexomatic';

@import 'layout';
...
```
