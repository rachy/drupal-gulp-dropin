# Gulp starter for Drupal 8 Themes
A very basic gulp starter for use on drupal themes. Can be dropped into any theme directory folder and used. Includes browsersync for js, scss, and twig files. 
<br>
## Guide
This guide assumes you have node.js and gulp installed globally on your system. Reference https://nodejs.org/en/download/ and https://gulpjs.org/getting-started.html on intalling globally. 
<br>
1. Navigate to the appropriate folder of where your theme is located.

```
$ cd directory/my-theme
```

2. Clone the gulp dropin into your parent folder with the following command:

```
git clone https://github.com/rachy/drupal-gulp-dropin.git temp
mv temp/.git code/.git
rm -rf temp
```
3. Update package.json info to reflect your own project information. 

4. Update the localpath of your project in gulpfile.js found online 4.

```
const path = 'http://localthost:8888/path';
```

5. initialize npm 

```
$ npm install
```

6. Install Gulp

```
$ npm install gulp
```

7. Install browser-sync

```
$ npm install browser-sync
```

8. Install gulp-sass

```
$ npm install gulp-sass
```

9.  Develop locally with localserver and browser-sync

```
$ gulp
```
 
### Plugins
* browser-sync
* gulp-sass



