const Main       = imports.ui.main;
const Meta       = imports.gi.Meta;
const Shell      = imports.gi.Shell;
const GLib       = imports.gi.GLib;
const Gio        = imports.gi.Gio;
const Mainloop   = imports.mainloop;
const St         = imports.gi.St;
const Clutter    = imports.gi.Clutter;
const Config     = imports.misc.config;
const Util       = imports.misc.util;
const Lang       = imports.lang;
const PanelMenu  = imports.ui.panelMenu;
const DCONF_META = 'org.gnome.desktop.wm.preferences';
const MAXIMIZED  = Meta.MaximizeFlags.BOTH;

let wtracker;
let panel;
let appmenu;
let mtray;
let tray;
let extpath;

function init(extensionMeta) {
  wtracker = Shell.WindowTracker.get_default();
  panel    = Main.panel;
  appmenu  = panel.statusArea.appMenu;
  mtray    = Main.messageTray;
  tray     = Main.legacyTray;
  extpath  = extensionMeta.path;
}

function enable() {
  Main.loadTheme();

  enableShowWindow();
  enableLeftBox();
  enableButtons();
  enableAppMenu();
  enableDecoration();
  enableTopIcons();
}

function disable() {
  disableShowWindow();
  disableLeftBox();
  disableButtons();
  disableAppMenu();
  disableDecoration();
  disableTopIcons();

  Main.loadTheme();
}
