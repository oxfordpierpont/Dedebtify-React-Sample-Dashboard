=== DEDEBTIFY WORDPRESS INSTALLATION ===

1. Build the React App:
   Run the build command in your terminal:
   > npm run build
   
   This will create a 'dist' or 'build' folder containing your compiled index.js and index.css.

2. Move Files:
   Copy the `dist` folder into your WordPress plugin folder:
   /wp-content/plugins/dedebtify/dist/

3. Activate Plugin:
   Ensure the `dedebtify-plugin.php` file is in:
   /wp-content/plugins/dedebtify/dedebtify-plugin.php
   
   Go to WP Admin > Plugins and activate "Dedebtify Dashboard".

4. View:
   Click the "Dedebtify" menu item in the WordPress admin sidebar.
