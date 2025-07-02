const plugin = require("../plugin.json");
const { boilerplate } = require("./boilerplate.js");

class ActionBarHtmlBoilerplate {
  constructor(options = {}) {
    this.injectedBtn = null;
    this.replacedSlot = null;
    // Allow row/col customization via options
    this.row = options.row || 1;
    this.col = options.col || 8;
    // Icon can be set via options; default is "<!>"
    this.icon = options.icon || "<svg xmlns='http://www.w3.org/2000/svg' width='1.1em' height='1.1em' viewBox='0 0 24 24'><path fill='currentColor' d='M10.5 2h3l.5 6H10l.5-6zM7 8.5l-5.5 9l1.5 1.5l8-6l8 6l1.5-1.5L17 8.5V19H7V8.5z'/></svg>";
    this.tooltip = options.tooltip || "Insert HTML5 Boilerplate";
    this.retryCount = options.retryCount || 20;
    this.retryDelay = options.retryDelay || 300; // ms
    this.selectionMenuId = "html5-boilerplate-selection";
    this.selectionMenuLabel = options.selectionMenuLabel || "<!> HTML5 Boilerplate";
    this.selectionMenuType = "all";
    this.isSelectionMenuAdded = false;
  }

  insertHtmlBoilerplate() {
    const { editor } = editorManager;
    if (!editor) {
      acode.require("toast")("No active editor!", 2000);
      return;
    }
    let selectionRange = editor.getSelectionRange();
    let selectedText = editor.getSelectedText();
    const indent = "    ";
    let bodyContent = selectedText
      ? selectedText.split("\n").map(line => indent.repeat(2) + line).join("\n")
      : indent.repeat(2) + "<!-- Start building your page here -->\n";
    let htmlBoilerplate = boilerplate(bodyContent);
    editor.getSession().replace(selectionRange, htmlBoilerplate);
    acode.require("toast")("HTML5 Boilerplate inserted!", 2000);
  }

  injectButtonToQuickTools() {
    // row/col: 1-based. Default: row 1, column 8 (adjust as needed in options)
    const selector = `#quick-tools #row${this.row} .section:first-child button:nth-child(${this.col})`;
    const slot = root.get(selector);
    if (!slot) return false;

    // Hide the existing button in that slot, if any
    slot.style.display = "none";
    this.replacedSlot = slot;

    // Create your button
    const btn = document.createElement("button");
    btn.className = "cmd-btn";
    btn.innerHTML = this.icon;
    btn.title = this.tooltip;
    btn.onclick = this.insertHtmlBoilerplate.bind(this);

    // Insert before the hidden button
    slot.insertAdjacentElement("beforebegin", btn);
    this.injectedBtn = btn;
    return true;
  }

  tryInjectButton() {
    let tries = 0;
    const tryInject = () => {
      if (this.injectButtonToQuickTools()) return;
      if (++tries < this.retryCount) setTimeout(tryInject, this.retryDelay);
    };
    tryInject();
  }

  cleanUpInjectedButton() {
    if (this.injectedBtn) this.injectedBtn.remove();
    if (this.replacedSlot) this.replacedSlot.style.display = "";
    this.injectedBtn = null;
    this.replacedSlot = null;
  }

  addSelectionMenu() {
    if (this.isSelectionMenuAdded) return;
    const selectionMenu = acode.require("selectionMenu");
    if (!selectionMenu) return;
    selectionMenu.add(
      this.insertHtmlBoilerplate.bind(this),
      this.selectionMenuLabel,
      this.selectionMenuType
    );
    this.isSelectionMenuAdded = true;
  }

  removeSelectionMenu() {
    // As of now, Acode's selectionMenu API does not support removing items programmatically.
    // If it ever does, implement cleanup here.
    this.isSelectionMenuAdded = false;
  }

  addBoilerplateCommand() {
    const { editor } = editorManager;
    if (!editor) return;
    if (editor.commands && !editor.commands.commands["html5_boilerplate"]) {
      editor.commands.addCommand({
        name: "html5_boilerplate",
        bindKey: { win: "Ctrl-Shift-B", mac: "Command-Shift-B" },
        exec: this.insertHtmlBoilerplate.bind(this),
        readOnly: false,
        description: "Insert the HTML5 boilerplate"
      });
    }
  }

  removeBoilerplateCommand() {
    const { editor } = editorManager;
    if (!editor) return;
    if (editor.commands && editor.commands.commands["html5_boilerplate"]) {
      editor.commands.removeCommand("html5_boilerplate");
    }
  }

  showAboutDialog() {
    acode.require("dialog")({
      title: "About HTML5 Boilerplate",
      content: `<b>HTML5 Boilerplate</b><br>
        Quickly insert a modern HTML5 starter template into your current file.<br>
        <ul>
          <li><b>Insert via Action Bar</b> (bottom): Tap the <span style="color:#09c;">${this.icon}</span> button.</li>
          <li><b>Insert via Selection Menu</b>: Select text (or not!), then long-press or use the selection menu.</li>
          <li><b>Keyboard Shortcut:</b> Ctrl+Shift+B (or Command+Shift+B on Mac)</li>
        </ul>
        <small style="color:#999;">by Buids</small>`,
      btns: ["OK"]
    });
  }

  addAboutMenu() {
    // Optionally add a menu item in the selection menu for About
    const selectionMenu = acode.require("selectionMenu");
    if (!selectionMenu) return;
    selectionMenu.add(
      this.showAboutDialog.bind(this),
      "About HTML5 Boilerplate",
      "all"
    );
  }

  async init() {
    this.tryInjectButton();
    this.addSelectionMenu();
    this.addBoilerplateCommand();
    this.addAboutMenu();
  }

  async destroy() {
    this.cleanUpInjectedButton();
    this.removeSelectionMenu();
    this.removeBoilerplateCommand();
    // Optionally remove About menu if API supports removal in future
  }
}

// Plugin registration
if (window.acode) {
  const boilerPlugin = new ActionBarHtmlBoilerplate();
  acode.setPluginInit(plugin.id, async function () {
    await boilerPlugin.init();
  });
  acode.setPluginUnmount(plugin.id, async function () {
    await boilerPlugin.destroy();
  });
}