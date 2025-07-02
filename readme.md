# Advanced HTML Boilerplate Plugin for Acode

## YOU NO LONGER HAVE TO WRITE HTML HEAD AND META TAGS.

This plugin instantly inserts a modern, robust, and stylish HTML5 boilerplate into your current file or selection. This plugin is perfect for web developers who want a quick and professional starting point for their HTML projects, including best practices, meta tags, favicon support, accessibility, and a minimal CSS reset—all with a single click!

---

## Features

- **One-click HTML5 Boilerplate:**  
  Instantly replaces your selected text (or inserts at the cursor) with a beautiful, production-ready HTML5 template.

- **Modern & Professional:**  
  Includes meta tags for charset, viewport, SEO, and browser compatibility. A favicon link and sensible defaults for accessibility and mobile responsiveness.

- **Minimal CSS Reset:**  
  Built-in CSS reset and base styles for better cross-browser consistency.

- **Pretty Indentation:**  
  Boilerplate and your inserted content are indented for readability.

- **No Fuss:**  
  No settings required. Just install, activate, and use from Acode's selection menu.

---

## Usage

1. **Install the Plugin:**  
   Place the plugin files in your Acode plugins directory.

2. **Activate the Plugin:**  
   Enable the plugin from Acode’s plugin settings.

3. **Insert Boilerplate:**
   - **Wrap selection:** Select any text, open the selection menu, and choose **"<!>"**. Your selection will be placed inside the `<body>` of the boilerplate.
   - **No selection:** If nothing is selected, the boilerplate is inserted with a helpful comment in the `<body>` for you to start building your page.

---

## Example Output

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="A new web page">
    <meta name="robots" content="index, follow">
    <link rel="icon" href="favicon.ico">
    <title>Document</title>
    <style>
        /* Minimal CSS Reset */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: system-ui, sans-serif; background: #fafbfc; color: #222; min-height: 100vh; line-height: 1.6; }
    </style>
</head>
<body>
        <!-- Start building your page here -->
</body>
</html>
```

If you have selected text, it will appear (properly indented) in place of the comment.

---

## Why Use This Plugin?

- **Save Time:** Start new HTML projects in seconds.
- **Best Practices:** Boilerplate includes all essential tags and meta for SEO and compatibility.
- **Consistent Formatting:** Automatically indents your content for readability.
- **Lightweight:** No configuration required, no bloat.

---

## Installation

---

## How It Works on Installation

- Adds an entry to Acode's selection menu called **"HTML Boilerplate"**.
- When selected, the plugin replaces your current selection (or inserts at the cursor) with a robust HTML5 boilerplate.  
- Selected text is indented and placed inside the `<body>` tag.

---

## Customization

Want more features?  
- You can edit the boilerplate template in the JS file to add more meta tags, Open Graph, or custom styles.
- Fork and improve as needed!

---

## Support

- For issues or suggestions, please open an issue on the GitHub repository [Html5 BoilerPlate](https://github.com/Buids/).
- For help with Acode in general, see [Acode's documentation](https://acode.foxdebug.com/).

---

## License

MIT

---