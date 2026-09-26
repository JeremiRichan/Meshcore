// Editorial content faithfully preserved from https://meshcore.io

export const LINKS = {
  home: 'https://meshcore.io/',
  blog: 'https://blog.meshcore.io/',
  docs: 'https://docs.meshcore.io/',
  flasher: 'https://meshcore.io/flasher',
  webFlasher: 'https://flasher.meshcore.io/',
  map: 'https://map.meshcore.io/',
  merch: 'https://merch.meshcore.io/',
  app: 'https://app.meshcore.nz/',
  github: 'https://github.com/meshcore-dev/meshcore',
  discord: 'https://meshcore.gg/',
  reddit: 'https://reddit.com/r/meshcore',
  facebook: 'https://facebook.com/groups/meshcore',
  mastodon: 'https://mastodon.social/@meshcore',
  x: 'https://x.com/mesh_core',
  logo: 'https://meshcore.io/assets/images/meshcore.svg',
  appIcon: 'https://meshcore.io/assets/images/app_icon.png',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/', internal: true },
  { label: 'Blog', href: '/blog', internal: true },
  { label: 'Docs', href: '/docs', internal: true },
  { label: 'Flasher', href: '/flasher', internal: true },
  { label: 'Map', href: '/map', internal: true },
  { label: 'Merch', href: '/merch', internal: true },
];

export const FEATURES = [
  { icon: 'CodeBranch', title: 'Open Source', text: 'MIT licensed firmware, tooling and libraries you can trust and contribute to.' },
  { icon: 'Lock', title: 'Encrypted Messaging', text: 'Messages are end-to-end encrypted to ensure your chats stay private.' },
  { icon: 'RadioTower', title: 'Long Range', text: 'Uses LoRa, long range, low power radio technology for true off-grid connectivity.' },
  { icon: 'Zap', title: 'Low Power', text: 'Optimized power consumption allows batteries to last over a week on a single charge.' },
  { icon: 'Hash', title: 'Public Channels', text: 'Join public group channels and discuss interesting topics with the mesh community.' },
  { icon: 'Key', title: 'Private Channels', text: 'Create private encrypted group channels for securely talking with friends and family.' },
  { icon: 'Sun', title: 'Solar Powered Repeaters', text: 'Expand the range of your MeshCore network with solar powered repeaters in high locations.' },
  { icon: 'Smartphone', title: 'MeshCore App', text: 'Download our free app, available on Android, iOS, Windows, Mac, Linux and Web.' },
];

export const STEPS = [
  {
    n: 1,
    title: 'Get the App',
    text: 'Install MeshCore on your phone or computer. Keep an offline copy ready to use when the internet is unavailable.',
    cta: 'Get the App',
    href: '#download',
    internal: true,
  },
  {
    n: 2,
    title: 'Buy a Node',
    text: 'Pick a supported LoRa device. Each user needs a "Companion Node" to connect them to the mesh network.',
    cta: 'Buy a Node',
    href: '#hardware',
    internal: true,
  },
  {
    n: 3,
    title: 'Flash & Connect',
    text: 'Use our Web Flasher to install the MeshCore firmware. Once flashed, pair your phone to the node and start chatting.',
    cta: 'Launch Flasher',
    href: LINKS.webFlasher,
  },
];

export const PLATFORMS = [
  { icon: 'Play', over: 'Get it On', label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.liamcottle.meshcore.android' },
  { icon: 'Apple', over: 'Get it On', label: 'App Store', href: 'https://apps.apple.com/nz/app/meshcore/id6742354151' },
  { icon: 'Globe', over: 'Open the', label: 'Web App', href: LINKS.app },
  { icon: 'Monitor', over: 'Download .exe', label: 'Windows', href: 'https://files.liamcottle.net/MeshCore/v1.49.0/' },
  { icon: 'Apple', over: 'Download .app', label: 'macOS', href: 'https://files.liamcottle.net/MeshCore/v1.49.0/' },
  { icon: 'HardDriveDownload', over: 'View All', label: 'Offline Installers', href: 'https://files.liamcottle.net/MeshCore/v1.49.0/' },
];

export const SCREENSHOTS = [
  { src: 'https://meshcore.io/assets/images/screenshots/1.png', alt: 'MeshCore app — contact list with companion nodes and repeaters' },
  { src: 'https://meshcore.io/assets/images/screenshots/2.png', alt: 'MeshCore app — direct encrypted message conversation' },
  { src: 'https://meshcore.io/assets/images/screenshots/3.png', alt: 'MeshCore app — public channel messages' },
  { src: 'https://meshcore.io/assets/images/screenshots/4.png', alt: 'MeshCore app — network map with node coverage' },
];

export const GUIDES = [
  { icon: 'FileText', label: 'App Quick Start Guide', href: 'https://files.liamcottle.net/MeshCore/Documentation/MeshCore_Quick_Start_Guide.pdf' },
  { icon: 'FolderOpen', label: 'Ripple User Guides', href: 'https://files.liamcottle.net/MeshCore/Documentation/Ripple/' },
];

const BRANDS = {
  seeed: { name: 'SeeedStudio', logo: 'https://meshcore.io/assets/images/brands/seeed_studio.png' },
  elecrow: { name: 'Elecrow', logo: 'https://meshcore.io/assets/images/brands/elecrow.png' },
  heltec: { name: 'Heltec Automation', logo: 'https://meshcore.io/assets/images/brands/heltec.png' },
  rak: { name: 'RAKwireless', logo: 'https://meshcore.io/assets/images/brands/rak_wireless.png' },
  lilygo: { name: 'LilyGO', logo: 'https://meshcore.io/assets/images/brands/lilygo.png' },
};

export const CATEGORIES = [
  { id: 'companion', label: 'Companion Nodes', description: 'Connect to the MeshCore App to send and receive messages' },
  { id: 'repeater', label: 'Repeater Nodes', description: 'Expand the range of your MeshCore network by placing a repeater in a high location' },
  { id: 'standalone', label: 'Standalone Nodes', description: 'Powered by Ripple Firmware. No phone required!' },
];

export const PRODUCTS = [
  {
    name: 'Wio Tracker L1 Pro',
    category: 'companion',
    brand: BRANDS.seeed,
    image: 'https://meshcore.io/assets/images/devices/seeed_studio_wio_tracker_l1_pro_meshcore.png',
    vendors: [
      { label: 'Buy from SeeedStudio', href: 'https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html?sensecap_affiliate=lLZqP0c&referring_service=meshcore.io', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c4TAGehd' },
    ],
    flash: 'https://flasher.meshcore.io/seeed-studio-wio-tracker-l1-pro/',
  },
  {
    name: 'ThinkNode M1',
    category: 'companion',
    brand: BRANDS.elecrow,
    image: 'https://meshcore.io/assets/images/devices/THINKNODE_M1.png',
    vendors: [
      { label: 'Buy from Elecrow', href: 'https://tidd.ly/3ROOXxM', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c2JERZBT' },
    ],
    flash: 'https://flasher.meshcore.io/elecrow-thinknode-m1/',
  },
  {
    name: 'Heltec v3',
    category: 'companion',
    brand: BRANDS.heltec,
    image: 'https://meshcore.io/assets/images/devices/HELTEC_V3.png',
    vendors: [
      { label: 'Buy from Heltec Automation', href: 'https://heltec.org/project/wifi-lora-32-v3/', primary: true },
      { label: 'Buy from AliExpress', href: 'https://www.aliexpress.com/item/1005005443005152.html' },
    ],
    flash: 'https://flasher.meshcore.io/heltec-v3/',
  },
  {
    name: 'WisMesh Pocket',
    category: 'companion',
    brand: BRANDS.rak,
    image: 'https://meshcore.io/assets/images/devices/rak_wismesh_pocket.png',
    vendors: [
      { label: 'Buy from RAKwireless', href: 'https://store.rakwireless.com/products/wismesh-pocket?ref=meshcore', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c3cffcHn' },
    ],
    flash: 'https://flasher.meshcore.io/rak-wisblock-wismesh-rak-4631/',
  },
  {
    name: 'WisMesh Tag',
    category: 'companion',
    brand: BRANDS.rak,
    image: 'https://meshcore.io/assets/images/devices/rak_wismesh_tag.png',
    vendors: [
      { label: 'Buy from RAKwireless', href: 'https://store.rakwireless.com/products/wismesh-tag-meshtastic-gps-lora-tracker-ip66?ref=meshcore', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c4C4rI3t' },
    ],
    flash: 'https://flasher.meshcore.io/rak-wismesh-tag/',
  },
  {
    name: 'SenseCAP Solar Node P1 Pro',
    category: 'repeater',
    brand: BRANDS.seeed,
    image: 'https://meshcore.io/assets/images/devices/SOLAR_NODE_P1_PRO.png',
    vendors: [
      { label: 'Buy from SeeedStudio', href: 'https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html?sensecap_affiliate=lLZqP0c&referring_service=meshcore.io', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c3hb71vB' },
    ],
    flash: 'https://flasher.meshcore.io/seeed-studio-sensecap-solar/',
  },
  {
    name: 'T-Deck Plus',
    category: 'standalone',
    brand: BRANDS.lilygo,
    image: 'https://meshcore.io/assets/images/devices/lilygo_tdeck_plus.png',
    vendors: [
      { label: 'Buy from LilyGO', href: 'https://www.lilygo.cc/ix40vk', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c3QNoVB9' },
    ],
    flash: 'https://flasher.meshcore.io/lilygo-t-deck/',
  },
  {
    name: 'T-Deck Pro',
    category: 'standalone',
    brand: BRANDS.lilygo,
    image: 'https://meshcore.io/assets/images/devices/lilygo_tdeck_pro.png',
    vendors: [
      { label: 'Buy from LilyGO', href: 'https://www.lilygo.cc/skguuf', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c35PVCCF' },
    ],
    flash: 'https://flasher.meshcore.io/lilygo-t-deck-pro/',
  },
  {
    name: 'T-LoRa Pager',
    category: 'standalone',
    brand: BRANDS.lilygo,
    image: 'https://meshcore.io/assets/images/devices/lilygo_tlora_pager.png',
    vendors: [
      { label: 'Buy from LilyGO', href: 'https://www.lilygo.cc/w4petm', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c2yPwfl1' },
    ],
    flash: 'https://flasher.meshcore.io/lilygo-t-lora-pager/',
  },
  {
    name: 'T-Watch S3 Plus',
    category: 'standalone',
    brand: BRANDS.lilygo,
    image: 'https://meshcore.io/assets/images/devices/lilygo_twatch_s3_plus.png',
    vendors: [
      { label: 'Buy from LilyGO', href: 'https://www.lilygo.cc/ppud9p', primary: true },
      { label: 'Buy from AliExpress', href: 'https://s.click.aliexpress.com/e/_c3kNi0vr' },
    ],
    flash: 'https://flasher.meshcore.io/lilygo-t-watch-s3-plus/',
  },
];

export const BLOG_POSTS = [
  { slug: 'kiss-modem-intro', title: 'The KISS Modem', date: 'August 27, 2026', author: 'Michael Overhorst (ViezeVingertjes)', image: 'https://blog.meshcore.io/assets/images/2026/08/27/kiss-modem-hero.png', excerpt: 'A look at the KISS TNC modem integration bringing classic packet radio compatibility to MeshCore.' },
  { slug: 'release-1-17-1', title: 'Release v1.17.1', date: 'August 14, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/firmware_release.jpg', excerpt: 'Maintenance release with bug fixes and stability improvements across companion and repeater nodes.' },
  { slug: 'release-1-17-0', title: 'Release v1.17.0', date: 'August 09, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/firmware_release.jpg', excerpt: 'New features and refinements in the v1.17 firmware line.' },
  { slug: 'thankyou', title: 'Thank You', date: 'July 28, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/2026/07/28/thankyou-icon.png', excerpt: 'A message of gratitude to the growing MeshCore community and contributors.' },
  { slug: 'help-us-save-meshcore', title: 'Help Us Save MeshCore', date: 'July 04, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/icon.png', excerpt: 'A call for community support to keep the MeshCore project alive and independent.' },
  { slug: 'drone-ota', title: 'OTA Updates by Drone', date: 'June 22, 2026', author: 'Rastislav Vysoky (recrof)', image: 'https://blog.meshcore.io/assets/images/2026/06/22/xiao_drone.jpg', excerpt: 'Delivering over-the-air firmware updates to remote nodes using a drone relay.' },
  { slug: 'release-1-16-0', title: 'Release v1.16.0', date: 'June 06, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/firmware_release.jpg', excerpt: 'Firmware release v1.16.0 with new capabilities and fixes.' },
  { slug: 'pymc-intro', title: 'pyMC Introduction', date: 'May 12, 2026', author: 'Rightup', image: 'https://blog.meshcore.io/assets/images/2026/05/12/control-room.png', excerpt: 'Introducing pyMC, a Python library for scripting and automating MeshCore nodes.' },
  { slug: 'ripple-9-7', title: 'Ripple UI v9.7', date: 'April 30, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/04/30/t-pager-9.7.png', excerpt: 'The latest Ripple UI update brings a refreshed interface for standalone devices.' },
  { slug: 'the-split', title: 'Meshcore.io — Why The Split?', date: 'April 23, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/icon.png', excerpt: 'Explaining the reasoning behind the project reorganization and domain split.' },
  { slug: 'release-1-15-0', title: 'Release v1.15.0', date: 'April 19, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/firmware_release.jpg', excerpt: 'Firmware release v1.15.0 notes.' },
  { slug: 'default-scope', title: 'Default Scope Region', date: 'April 17, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/04/17/banner.png', excerpt: 'How default region scoping helps reduce cross-region interference on the mesh.' },
  { slug: 'otafix-bootloader', title: 'Installing the OTAFix Bootloader', date: 'April 06, 2026', author: 'Huw Duddy (Taco)', image: 'https://blog.meshcore.io/assets/images/2026/04/06/otafix-banner.jpg', excerpt: 'A step-by-step guide to installing the OTAFix bootloader for reliable OTA updates.' },
  { slug: 'heltecv4-maps', title: 'Ripple v9.4 for HeltecV4', date: 'April 05, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/04/05/HeltecV4-preview.png', excerpt: 'Ripple firmware v9.4 brings map support to the Heltec V4 board.' },
  { slug: 'meshcore-map', title: 'The MeshCore Map', date: 'April 04, 2026', author: 'Rastislav Vysoky (recrof)', image: 'https://blog.meshcore.io/assets/images/2026/04/04/map-may-2025.png', excerpt: 'Behind the scenes of the global MeshCore node map and how it aggregates community data.' },
  { slug: 'nrf-ota-update', title: 'OTA Updates on nRF Devices', date: 'April 02, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/04/02/nRF-DFU.webp', excerpt: 'How over-the-air updates work on nRF52-based MeshCore devices.' },
  { slug: 'esp-ota-update', title: 'OTA Updates on ESP32 Devices', date: 'April 01, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/04/01/repeater-ota.png', excerpt: 'How over-the-air updates work on ESP32-based repeater and companion nodes.' },
  { slug: 'twatch-s3-plus', title: 'LilyGo T-Watch S3 Plus', date: 'March 28, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/03/28/twatchs3plus.jpg', excerpt: 'A closer look at the T-Watch S3 Plus as a wearable standalone MeshCore node.' },
  { slug: 'release-1-14-1', title: 'Release v1.14.1', date: 'March 20, 2026', author: 'Admin', image: 'https://blog.meshcore.io/assets/images/firmware_release.jpg', excerpt: 'Firmware release v1.14.1 notes.' },
  { slug: 'path-diagnostics-improvements', title: 'Path Diagnostics Improvements', date: 'March 06, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/03/06/meshgraph.png', excerpt: 'Improved path diagnostics help visualize message routing across the mesh.' },
  { slug: 'off-grid-client-repeat-mode', title: 'Off-grid (client repeat) Mode', date: 'February 13, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/02/13/offgridmode.jpg', excerpt: 'A new mode that lets client nodes repeat messages for true off-grid resilience.' },
  { slug: 'region-filtering', title: 'Region Filtering', date: 'January 20, 2026', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2026/01/20/image_2.jpg', excerpt: 'Filtering traffic by region to keep local meshes clean and relevant.' },
  { slug: 'the-year-in-review', title: 'The Year In Review', date: 'December 12, 2025', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2025/12/12/year_in_review.jpg', excerpt: 'A retrospective on a year of growth, releases, and community milestones.' },
  { slug: 'kid-mode', title: 'Kid Mode & Remote Admin', date: 'October 02, 2025', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2025/10/02/kidmodehome.png', excerpt: 'A simplified Kid Mode and remote admin tools for families and fleet operators.' },
  { slug: 'meshcore-philosophy', title: 'MeshCore Philosophy', date: 'March 01, 2025', author: 'Scott Powell', image: 'https://blog.meshcore.io/assets/images/2025/03/01/techphilosophybyGrok.jpg', excerpt: 'The founding philosophy behind MeshCore: open, off-grid, encrypted, community-owned.' },
];

export const DOCS_SECTIONS = [
  { slug: 'faq', title: 'Frequently Asked Questions', description: 'Answers to the most common questions about MeshCore hardware, firmware, and the app.', href: 'https://docs.meshcore.io/faq/', icon: 'HelpCircle' },
  { slug: 'cli_commands', title: 'CLI Commands', description: 'Reference for the MeshCore command-line interface and configuration tools.', href: 'https://docs.meshcore.io/cli_commands/', icon: 'Terminal' },
  { slug: 'companion_protocol', title: 'Companion Protocol', description: 'Technical specification of the protocol between companion nodes and the MeshCore app.', href: 'https://docs.meshcore.io/companion_protocol/', icon: 'Cable' },
  { slug: 'packet_format', title: 'Packet Format', description: 'How MeshCore packets are structured and encoded over the LoRa radio link.', href: 'https://docs.meshcore.io/packet_format/', icon: 'Package' },
  { slug: 'qr_codes', title: 'QR Codes', description: 'Using QR codes to share contacts, channels, and node configurations.', href: 'https://docs.meshcore.io/qr_codes/', icon: 'QrCode' },
];

export const FLASHER_FIRMWARE = [
  { id: 'ripple', title: 'Ripple Firmware', subTitle: 'Freemium firmware by Ripple Radios', icon: 'Radio', href: 'https://buymeacoffee.com/ripplebiz' },
  { id: 'meshos', title: 'MeshOS Firmware', subTitle: 'Freemium firmware by Andy Kirby', icon: 'Cpu', href: null },
  { id: 'community', title: 'Community Firmware', subTitle: 'Open Source firmware on GitHub', icon: 'Github', href: 'https://github.com/meshcore-dev/MeshCore' },
];

export const MAP_STATS = {
  total: 60453,
  clients: 11468,
  repeaters: 45990,
  rooms: 2966,
  h24: 508,
  d7: 3054,
  d30: 12686,
};

export const MERCH_PRODUCTS = [
  { name: 'MeshCore T-Shirt', price: '$30.00', colors: ['Black', 'Navy', 'Dark Grey', 'Team Purple'], href: 'https://merch.meshcore.io/products/meshcore-t-shirt', image: 'https://imgproxy.fourthwall.dev/4TK2SwSATkxXljFC_u_6MeMUCVjBtbVHFcej6WAT8MY/w:720/sm:1/enc/-OUxQ-3i7OTp99Sa/g9o1OAdSUM1C4CDV/7qlcT-VHX0xzM05O/vwNm8aT_ogOonL3x/bG6lvHdFhe3glftt/TIjNdyiMwxrQWgjv/SiiVU-XsN9n2DYad/ktaZt_YtEGe7GS4-Y/O2GLRXXOjGhYlak3/9beqWxmB5LNBwJsc/4QpCITVdkXJUQlv3/6IGvQRPlnPabDVKl/jZkLM5Az-oKwPTiN/e9rAOKTBTiXfUfBL/gt9Inh9L1K8.jpg' },
  { name: 'MeshCore Embroidered T-Shirt', price: '$30.00', colors: ['Black', 'Navy', 'Dark Grey', 'Team Purple'], href: 'https://merch.meshcore.io/products/meshcore-embroidered-t-shirt', image: 'https://imgproxy.fourthwall.dev/ACYkO4pav4Kyhiw3UA8ShvGiLEg7fGelWUfhg0kGVks/w:720/sm:1/enc/vIzEhWEDlf7bWodC/p54E4Lin9lYRYAXc/awOJd1VWw2kcJILP/rIfhILjLCYl3So3Y/FHURXO64QoAi4kAJ/v0sMWnmeHngybWS1/t_V5q81Y1vsl3bTR/Siip1hyKE8cAEZP0/9ov5-oSaJtl3F0QT/feAxCbpZHKVXhaRm/kpAq5joU_ATxBSW5/_fPYMDJDfm8LfMw-/isbDbpiIEZ3u7H54/SZWQaBUomMac6z-9/KswFnH6pDEw.jpg' },
  { name: 'MeshCore Premium Hoodie', price: '$55.00', colors: ['Black', 'French Navy', 'Dark Heather Grey', 'Anthracite'], href: 'https://merch.meshcore.io/products/meshcore-premium-hoodie', image: 'https://imgproxy.fourthwall.dev/ZqSQbBeqU7bsWqp-Ga0922AvkyJLGGMoZ-SeOjz5t3U/w:720/sm:1/enc/3LRU0XSUyp9aaS1b/24RoxIlZIY1l7Soi/KBgjfEiOQgMjiuUB/MlbUN_OwTkO9W_Ae/Sx9RMwslzE4F6jaJ/c7QTbxuTVnrOjJjk/dq4owjTUKiWLdVfC/YSN3o6y8gD1O-eX/05HKAvWZV_8SEBv6/C4DmiPh-78RqmNeS/ppfjfbBwfK9QoCHG/d50SSAo04LEqhFmf/1E9chffEwFSS4LFe/66kR7igtoPC1cAp/R9M5ZImal3s.jpg' },
  { name: 'MeshCore Premium Zip Hoodie', price: '$55.00', colors: ['Black', 'Charcoal Heather', 'Navy'], href: 'https://merch.meshcore.io/products/meshcore-premium-zip-hoodie', image: 'https://imgproxy.fourthwall.dev/MKf8Zs5p5K9J7wbh_ungLLh_5uJZO8w_ZaJwjh9-i1c/w:720/sm:1/enc/L5Q7QJm7rzeedk84/VPQbtjo-Su1SdtVE/HlIcE28UlyODGV/YpHi320pc38hAaj1/5xrxvUia6HbB-Hur/WIhsAFgkTe8Bxw07/UHXBmvOqQ_1um_1U/3J8p8KBsaeeExXDl/_vGqMB3NtKVryReH/aw3AodFxH7WSQkIs/54EY3Ii_b4QEvsuh/asHIvYMdeRMR2b7S/JC9EBmclnIln0TyW/fm7xRKXp5IRY8KN3/PqByBBunfEo.jpg' },
  { name: 'MeshCore Hat', price: '$30.00', colors: ['Black', 'Navy', 'Dark Grey', 'White'], href: 'https://merch.meshcore.io/products/meshcore-hat', image: 'https://imgproxy.fourthwall.dev/B18Lvzh37gv6imoKNeykSy5P347LjDr5vg4Zxw6An6Y/w:720/sm:1/enc/kqNHT8tCxnm4vUlz/1E8uUW8dzxWyVvUT/dzeMkq77TErlGl0K/KoYKu6g05usQwTr/anRlBZqWhj3Eue7c/kjKDSFj3YqXZvH7/aI02xyqnKXic5WzF/DUGp5JSP_vBfp6pS/42KuH27xt-TvHt3/_umQWUP9heVfK8IU/1-UJgbrRBcsUtyzk/GZeF4OWZIw8y5pY3/B46xDnOVe-VHNgxn/fjbKADWmqoM93cds/Qhk3tpEt1mg.jpg' },
  { name: 'MeshCore Mug', price: '$17.00', colors: [], href: 'https://merch.meshcore.io/products/meshcore-mug', image: 'https://imgproxy.fourthwall.dev/okRMFpCkuxksDgU3nNswj6He33nHGHpjgUr5K7Ufk2A/w:720/sm:1/enc/P_-FmLaQ9k51xkm/udXGAk5j3I-oWWon/cvDdfmSKZirilwqD/MFfFbKuq98U73ump/ZFcaneaP6tVzqlOK/H2peOEdlzRE3a0F/CH5s0Rh_c959XWWr/55BI2BjyKApxKYxZ/SMJslB-46Ky6oG6/dy_jkuIn9dES2PKl/US4O10uYOYlmpSVG/0ymjnVQHTGvqp43/zbzAcWFWXpcCzxp/nashiNIIRphe4NCE/91SY99nW0CM.jpg' },
  { name: 'MeshCore Patch', price: '$25.00', colors: [], href: 'https://merch.meshcore.io/products/meshcore-patch', image: 'https://imgproxy.fourthwall.dev/k17Qcph5ql2KK1kxZx7rLkk-mjczpxDVrvvVg0Em3_s/w:720/sm:1/enc/7HmSBwUPcFG2duvV/sKY5mwWUO1YGZGkU/HGNFv3dK4gDauvqw/oxLMcnKdYxRsk3x/jEi0TZINom9YnzYY/XcBwAnswTvpanv0/9JKcxUa09MzIfcX/QDdXT_GCpIbx-pj0/cLYLm4BPmEQsPj8/Gc6jpCIHDMvhvRHU/Cf6uMPyN1fQ2d1qa/ysRqgUHdBTckP6SL/vbgBs3I4brWoSph/MBugn6OEb7GqPWX/Rd8sh17TQ_Y.webp' },
  { name: 'Collection of MeshCore Pins', price: '$25.00', colors: [], href: 'https://merch.meshcore.io/products/collection-of-meshcore-pins', image: 'https://imgproxy.fourthwall.dev/UJaxH56ORMCYNSP6V0e-BCq64tztOkAGIeg4-oKLbmU/w:720/sm:1/enc/gA_lcFn-CwF8dew3/rWphYQwd91UNKhOi/tdE7MbyaRUnYscGY/zUIhqaaxNO5CaqA/nDV92GJv7eUTe4s8/Xb-nDGeoZUx_68DV/9PF8-w0mcipSTo2O/oODCzQNJD-LBT3Eq/IWRRwTziZx36-_PA/FlVZC1G4N7-YjxYL/Mbt8JuKe8yIWstez/4aI_h4REu31iZCOK/NaBGxH_8g3QL72Xo/w5BMWMbBBOU9Ni1/4WW5ayNFs-M.webp' },
  { name: 'MeshCore Sticker', price: '$9.00', colors: [], href: 'https://merch.meshcore.io/products/meshcore-sticker', image: 'https://imgproxy.fourthwall.dev/-3V57iJ-cCZ7LaUCJXcASgEjp4vdxzCvkyV60lfTriA/w:720/sm:1/enc/TefcbOUzudPXXEx/epC5vISGEWbt8hZ/MOLz00I9qc4Wy74/STD7HFqBsEMofAH-/h3IPLC2lChb2k6z/1ImOxBvUdiGhfo9/9k9SUMgU2NHkMb/CTbtXrVUxPiNXBh1/rwO3er1Db-AABnve/v8OFT8keknjO0svR/4DTFFQ64OTqfOTTW/2L6oRL45rWmla1N5/CPwhEVOxI7t0Upq6/bibZ4Ngx83Bpy60/ZFQ84MO97dY.webp' },
];

export const VIDEOS = [
  { id: 'iaFltojJrAc', title: "There's a newcomer to the Mesh world", author: 'The Comms Channel' },
  { id: 'DNNcvm4RHSk', title: 'Recommended MeshCore Companion Devices', author: 'The Comms Channel' },
  { id: 'ems9_XvdPX8', title: 'MeshCore Companion Flashing', author: 'The Comms Channel' },
  { id: 'PeThXmxLE4k', title: 'MeshCore App', author: 'The Comms Channel' },
  { id: 'P1ICskazOzw', title: 'MeshCore Channels', author: 'The Comms Channel' },
  { id: 'LC_R0vYFMKQ', title: 'MeshCore Stand Alone Devices', author: 'The Comms Channel' },
  { id: 'axMCA7GTvt0', title: 'MeshCore Repeater Flashing and Config', author: 'The Comms Channel' },
  { id: 'OwmkVkZQTf4', title: 'MeshCore Presentation by Liam Cottle', author: 'Liam Cottle' },
];
