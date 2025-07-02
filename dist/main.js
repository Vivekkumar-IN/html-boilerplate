"use strict";(()=>{var r=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var s=r((f,p)=>{p.exports={id:"Advanced_html_boilerplate",name:"HTML5 Boilerplate",main:"main.js",version:"1.0.0",readme:"readme.md",icon:"icon.png",files:["main.js","boilerplate.js","plugin.json","readme.md","icon.png"],minVersionCode:290,license:"MIT",changelogs:"changelogs.md",keywords:["html","boilerplate","template","snippet"],price:0,author:{name:"Buids",email:"studiodewsvisual@gmail.com",github:"Buids",permissions:["editor"]}}});var c=r((M,a)=>{"use strict";function b(n=`        <!-- Start building your page here -->
`){return`<!DOCTYPE html>
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
${n}
</body>
</html>`}a.exports={boilerplate:b}});var d=s(),{boilerplate:g}=c(),o=class{constructor(e={}){this.injectedBtn=null,this.replacedSlot=null,this.row=e.row||1,this.col=e.col||8,this.icon=e.icon||"<svg xmlns='http://www.w3.org/2000/svg' width='1.1em' height='1.1em' viewBox='0 0 24 24'><path fill='currentColor' d='M10.5 2h3l.5 6H10l.5-6zM7 8.5l-5.5 9l1.5 1.5l8-6l8 6l1.5-1.5L17 8.5V19H7V8.5z'/></svg>",this.tooltip=e.tooltip||"Insert HTML5 Boilerplate",this.retryCount=e.retryCount||20,this.retryDelay=e.retryDelay||300,this.selectionMenuId="html5-boilerplate-selection",this.selectionMenuLabel=e.selectionMenuLabel||"<!> HTML5 Boilerplate",this.selectionMenuType="all",this.isSelectionMenuAdded=!1}insertHtmlBoilerplate(){let{editor:e}=editorManager;if(!e){acode.require("toast")("No active editor!",2e3);return}let t=e.getSelectionRange(),i=e.getSelectedText(),l="    ",m=i?i.split(`
`).map(h=>l.repeat(2)+h).join(`
`):l.repeat(2)+`<!-- Start building your page here -->
`,u=g(m);e.getSession().replace(t,u),acode.require("toast")("HTML5 Boilerplate inserted!",2e3)}injectButtonToQuickTools(){let e=`#quick-tools #row${this.row} .section:first-child button:nth-child(${this.col})`,t=root.get(e);if(!t)return!1;t.style.display="none",this.replacedSlot=t;let i=document.createElement("button");return i.className="cmd-btn",i.innerHTML=this.icon,i.title=this.tooltip,i.onclick=this.insertHtmlBoilerplate.bind(this),t.insertAdjacentElement("beforebegin",i),this.injectedBtn=i,!0}tryInjectButton(){let e=0,t=()=>{this.injectButtonToQuickTools()||++e<this.retryCount&&setTimeout(t,this.retryDelay)};t()}cleanUpInjectedButton(){this.injectedBtn&&this.injectedBtn.remove(),this.replacedSlot&&(this.replacedSlot.style.display=""),this.injectedBtn=null,this.replacedSlot=null}addSelectionMenu(){if(this.isSelectionMenuAdded)return;let e=acode.require("selectionMenu");e&&(e.add(this.insertHtmlBoilerplate.bind(this),this.selectionMenuLabel,this.selectionMenuType),this.isSelectionMenuAdded=!0)}removeSelectionMenu(){this.isSelectionMenuAdded=!1}addBoilerplateCommand(){let{editor:e}=editorManager;e&&e.commands&&!e.commands.commands.html5_boilerplate&&e.commands.addCommand({name:"html5_boilerplate",bindKey:{win:"Ctrl-Shift-B",mac:"Command-Shift-B"},exec:this.insertHtmlBoilerplate.bind(this),readOnly:!1,description:"Insert the HTML5 boilerplate"})}removeBoilerplateCommand(){let{editor:e}=editorManager;e&&e.commands&&e.commands.commands.html5_boilerplate&&e.commands.removeCommand("html5_boilerplate")}showAboutDialog(){acode.require("dialog")({title:"About HTML5 Boilerplate",content:`<b>HTML5 Boilerplate</b><br>
        Quickly insert a modern HTML5 starter template into your current file.<br>
        <ul>
          <li><b>Insert via Action Bar</b> (bottom): Tap the <span style="color:#09c;">${this.icon}</span> button.</li>
          <li><b>Insert via Selection Menu</b>: Select text (or not!), then long-press or use the selection menu.</li>
          <li><b>Keyboard Shortcut:</b> Ctrl+Shift+B (or Command+Shift+B on Mac)</li>
        </ul>
        <small style="color:#999;">by Buids</small>`,btns:["OK"]})}addAboutMenu(){let e=acode.require("selectionMenu");e&&e.add(this.showAboutDialog.bind(this),"About HTML5 Boilerplate","all")}async init(){this.tryInjectButton(),this.addSelectionMenu(),this.addBoilerplateCommand(),this.addAboutMenu()}async destroy(){this.cleanUpInjectedButton(),this.removeSelectionMenu(),this.removeBoilerplateCommand()}};if(window.acode){let n=new o;acode.setPluginInit(d.id,async function(){await n.init()}),acode.setPluginUnmount(d.id,async function(){await n.destroy()})}})();
