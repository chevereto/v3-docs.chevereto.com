/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2e4569bb61340f98dc4a0f0420fc5d1e"
  },
  {
    "url": "api/index.html",
    "revision": "4ecc77a8fa5ec7c4c41e455d5eab9fb2"
  },
  {
    "url": "assets/css/0.styles.64db630d.css",
    "revision": "0bc7646ddf791732825b6d894e27139e"
  },
  {
    "url": "assets/img/dashboard_3.19.caa86734.png",
    "revision": "caa867345ef6659241fd6fd40cbfd148"
  },
  {
    "url": "assets/img/databases.f4d298e3.png",
    "revision": "f4d298e33deaac8de2a17bc87ea1d3e1"
  },
  {
    "url": "assets/img/file-manager-upload.dcd56034.png",
    "revision": "dcd56034c7dd2f711ff9c32bb161a8cf"
  },
  {
    "url": "assets/img/file-manager.d1a07884.png",
    "revision": "d1a078845df44c5bfeb978823c601d6c"
  },
  {
    "url": "assets/img/files.4aa4878b.png",
    "revision": "4aa4878b1596ab287dae4417621c2807"
  },
  {
    "url": "assets/img/multiphp-ini-keys.83901b7f.png",
    "revision": "83901b7f141fdb6b99f86b244ee0ad2a"
  },
  {
    "url": "assets/img/multiphp-manager.88fa8221.png",
    "revision": "88fa822191bbb6b068796b609a0c9186"
  },
  {
    "url": "assets/img/mutliphp-ini-editor.859b4a87.png",
    "revision": "859b4a87c13eb1beec0520bbf4f09f90"
  },
  {
    "url": "assets/img/mysql-wizard-create-database.e64fa0ed.png",
    "revision": "e64fa0ed54dff2371928c3e64f6b66c6"
  },
  {
    "url": "assets/img/mysql-wizard-privileges.0eee95f6.png",
    "revision": "0eee95f6fd59926640564c5ef93fe372"
  },
  {
    "url": "assets/img/panel-server-type.a2109131.jpg",
    "revision": "a2109131e978975c90c90bfcd949c85b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/software.77971e2e.png",
    "revision": "77971e2e619a23472449bdd911a762c7"
  },
  {
    "url": "assets/js/10.200c3f06.js",
    "revision": "463ad9fccff4067c558a271f6d7a86dc"
  },
  {
    "url": "assets/js/11.0b2974a8.js",
    "revision": "15602875edf9b5c7f221f8e437560903"
  },
  {
    "url": "assets/js/12.71380a04.js",
    "revision": "d01fb1a02847b89338688c8ed2b10955"
  },
  {
    "url": "assets/js/13.7b4d25c7.js",
    "revision": "6b2bd2afa698cc931ecc6ab71aa3f926"
  },
  {
    "url": "assets/js/14.875863dd.js",
    "revision": "7a301be17e518072d757b3c9984a53d1"
  },
  {
    "url": "assets/js/15.cf42bcd2.js",
    "revision": "876bd3623c25e9c6efe8ecebc7ca2223"
  },
  {
    "url": "assets/js/16.64e33ca1.js",
    "revision": "0a1e935262735abb8a06762bd79e42c2"
  },
  {
    "url": "assets/js/17.ceb6ca8c.js",
    "revision": "bd78c24214ca69ec9ba7d994eb82782e"
  },
  {
    "url": "assets/js/18.b3f74c23.js",
    "revision": "8900ba89f935684e636ddaa827568b7a"
  },
  {
    "url": "assets/js/19.9743178d.js",
    "revision": "1f841712a99503f3682dd894e9d923fd"
  },
  {
    "url": "assets/js/20.071dc3cb.js",
    "revision": "7437f4de6aecd860c3d04ab5187ea623"
  },
  {
    "url": "assets/js/21.3f532b97.js",
    "revision": "faa388d8875594e91e645ba3febb1401"
  },
  {
    "url": "assets/js/22.3f20a95f.js",
    "revision": "549afb423af9863eb2ffe062f26da205"
  },
  {
    "url": "assets/js/23.fbbac555.js",
    "revision": "55a7599ec3c49db63a1d0dba47f86519"
  },
  {
    "url": "assets/js/24.2664e606.js",
    "revision": "fe3fa64ce17f910e87b5deb3f0e00d02"
  },
  {
    "url": "assets/js/25.484404c3.js",
    "revision": "5d704c23b4913a6dd3067f0974b090e4"
  },
  {
    "url": "assets/js/26.5554b75a.js",
    "revision": "f64fbe592c7f2499959d5dc880fa693b"
  },
  {
    "url": "assets/js/27.ea2ff8b8.js",
    "revision": "d342391987a99e4ba64d8659f5f1901e"
  },
  {
    "url": "assets/js/28.06cc3bb1.js",
    "revision": "018c1aaba7c14ec4ba3114b45be69c37"
  },
  {
    "url": "assets/js/29.2e4cd1b2.js",
    "revision": "9f2c6f5ad7fcaddfb113ee55d90b9212"
  },
  {
    "url": "assets/js/3.301bd321.js",
    "revision": "b3eb2a2f442b4e029e9f1557c8ea6f5d"
  },
  {
    "url": "assets/js/30.71743f31.js",
    "revision": "2a69397cfd0a6fdfc11e583167b594fb"
  },
  {
    "url": "assets/js/31.569a555f.js",
    "revision": "622fbc54053e3077ff074d30d5a2ca45"
  },
  {
    "url": "assets/js/32.71e8fe59.js",
    "revision": "eb6eda7e4d7c69b9e84d326b7be5ad66"
  },
  {
    "url": "assets/js/33.93a96b14.js",
    "revision": "e26eb36b1bfb5ca683effd9587cc122d"
  },
  {
    "url": "assets/js/34.dd2a01a6.js",
    "revision": "16724e613b289fb7b044a69042a37008"
  },
  {
    "url": "assets/js/35.fc1cd90f.js",
    "revision": "259bda187da7488d0231a600e2467cdf"
  },
  {
    "url": "assets/js/36.3cf9c66c.js",
    "revision": "e99bdb11ce29efcec09fbd4990b74902"
  },
  {
    "url": "assets/js/37.3851fa3a.js",
    "revision": "e18243a9e444d5606a82bbaaf90fd276"
  },
  {
    "url": "assets/js/38.ec297213.js",
    "revision": "d746816f4199bea1fb74804d99d7b38d"
  },
  {
    "url": "assets/js/39.4c05927c.js",
    "revision": "87774aa298647401cfffe1317bc92408"
  },
  {
    "url": "assets/js/4.e2fa4e36.js",
    "revision": "a7446d3b96cab96b53c17f886f802c68"
  },
  {
    "url": "assets/js/40.b20d98b3.js",
    "revision": "7992d135bc0ab9588584cb0673f89ac1"
  },
  {
    "url": "assets/js/41.6ac5eea3.js",
    "revision": "81eff20c3d88babdb412c4c400cf9489"
  },
  {
    "url": "assets/js/42.eea0a9dd.js",
    "revision": "121183f3c1284dbdcdec0b0de77bbe05"
  },
  {
    "url": "assets/js/43.469b29a2.js",
    "revision": "8176adf9b53de894ed495b6ac18c3fc7"
  },
  {
    "url": "assets/js/44.ad5ab819.js",
    "revision": "8dfdef2e0eafc1422623265b295bf457"
  },
  {
    "url": "assets/js/45.5c866432.js",
    "revision": "f2008a16260985cca993686b5407f055"
  },
  {
    "url": "assets/js/46.413abac8.js",
    "revision": "1d2085930cd5de9e30314f8508d32dbb"
  },
  {
    "url": "assets/js/47.79f78f4a.js",
    "revision": "5a32d49590d96586f26832e5e9f60970"
  },
  {
    "url": "assets/js/48.515cbe50.js",
    "revision": "feede2693fe5dd2078734b6ebdc6a29c"
  },
  {
    "url": "assets/js/49.8ded0a3a.js",
    "revision": "afe2d736107646fa40dbe5315ca1f9c0"
  },
  {
    "url": "assets/js/5.8dc07ee4.js",
    "revision": "4bcf481ae0254e1a4eed75c59e01411b"
  },
  {
    "url": "assets/js/50.49ac44a0.js",
    "revision": "64a8fc35a679a5f3cd4b0ec4d4a1252c"
  },
  {
    "url": "assets/js/51.9ce1a457.js",
    "revision": "19842bd84b45b61089cf6426e3ed452d"
  },
  {
    "url": "assets/js/52.fa3749ff.js",
    "revision": "3a860087704a70a024d4de8dec62b708"
  },
  {
    "url": "assets/js/53.a82913fe.js",
    "revision": "7f96edd9ca0b1aa883f0f09bbc5af43b"
  },
  {
    "url": "assets/js/54.b27307a8.js",
    "revision": "f1970a20c4e22ad2eea8f90474ed6361"
  },
  {
    "url": "assets/js/55.048a25e5.js",
    "revision": "d54c9164d2284279b02bd33af31fcad7"
  },
  {
    "url": "assets/js/56.b2953e1b.js",
    "revision": "9a9fae2d2de5ea0880a73a79df1d0528"
  },
  {
    "url": "assets/js/57.1d91088a.js",
    "revision": "1a73503350c8128e64ded0ff61e45311"
  },
  {
    "url": "assets/js/58.ed61492e.js",
    "revision": "791f494a0b8cc696188b533ee2153214"
  },
  {
    "url": "assets/js/59.ad755809.js",
    "revision": "1818a31b64893815fd9a14da2b163027"
  },
  {
    "url": "assets/js/6.ef43ed8f.js",
    "revision": "394fe653e8e7b18897c3ec4804235edf"
  },
  {
    "url": "assets/js/60.2c1bd319.js",
    "revision": "12711666b6fff5b23a4ae5a4dbb58181"
  },
  {
    "url": "assets/js/61.b2c3b0c1.js",
    "revision": "94069aa496dbb74d80a7206e171a75d9"
  },
  {
    "url": "assets/js/62.6cb06b2e.js",
    "revision": "2d2bed6d9686fbec86b3451b83575739"
  },
  {
    "url": "assets/js/63.c3e76db6.js",
    "revision": "2249c77a655d78dd37af51d7eee69bec"
  },
  {
    "url": "assets/js/64.d92bffe1.js",
    "revision": "3c50ea433957fb52cac3d51217714d69"
  },
  {
    "url": "assets/js/65.609170d7.js",
    "revision": "f59c9c0f2f0d5584f2621b5500ae80b5"
  },
  {
    "url": "assets/js/7.56fb9e95.js",
    "revision": "8dab6c14cb8b357fc4ec8229b937a3ea"
  },
  {
    "url": "assets/js/8.6cbdc962.js",
    "revision": "2b243d7e6750f12e9849167a4aebfa52"
  },
  {
    "url": "assets/js/9.5c08d48e.js",
    "revision": "a9733cdadffbf1b020b836dbf1d5754a"
  },
  {
    "url": "assets/js/app.c5d0234a.js",
    "revision": "e28cd88c1ade974b9efe504eeb6e1696"
  },
  {
    "url": "assets/js/vendors~docsearch.6cb0424f.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "features/content/bulk-content-importer.html",
    "revision": "d71b8d7ebabc8129746ac2c37f529cc3"
  },
  {
    "url": "features/customization/language.html",
    "revision": "dbb49f9440eb65feaf685dec52d20f59"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "da63c86fcad4ee2da67da1e387d52d51"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "522757cfa22909df964830fa03714016"
  },
  {
    "url": "features/integrations/external-storage.html",
    "revision": "5f9651ad1316029cbfe03492f79c8fab"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "e608c518238573d9098c90004fe27c17"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "ac7f6f9cfb7e23a09e6599f96b2f8c04"
  },
  {
    "url": "features/integrations/social-login.html",
    "revision": "cc6da1c9d104c3f2b0adceb72fdc09ad"
  },
  {
    "url": "features/reference/security.html",
    "revision": "51f5bad580b164429f2e5322065af281"
  },
  {
    "url": "get-started/deploy.html",
    "revision": "35cc84ddbfb991680dde9867616fcf12"
  },
  {
    "url": "get-started/index.html",
    "revision": "9937275b7b2c7336b9342c42c3d72478"
  },
  {
    "url": "get-started/status.html",
    "revision": "f0078114ccb3dd4c39b543f8bb50452e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "32716be686f759cb96749563dc9595c0"
  },
  {
    "url": "logo.png",
    "revision": "2179105dc8009814831fae6afa9c1024"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/first-steps/initial-setup.html",
    "revision": "29a61e995fa76c49abad056a3906e3e0"
  },
  {
    "url": "manual/first-steps/setup-cron.html",
    "revision": "1d520818b841bcb3a4c885ec3107fb77"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "30e3fe6d8b07f736b0688795bfcb8559"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "5fef2ca09350b524a8337639b4929ec0"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "83ad1ab345b54281fc4d3b541cd80dc6"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "0adb8012c2dcad72082fe807a2af8645"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "c4ff1e98cb4a79acb0aa5413d4ad32f0"
  },
  {
    "url": "settings/api.html",
    "revision": "d7fbde37e4d979a640613e51a4bfce8e"
  },
  {
    "url": "settings/banners.html",
    "revision": "88af7a3c24ae56b37b361fa94b0a8cdc"
  },
  {
    "url": "settings/categories.html",
    "revision": "19e4aace527adc88908fd509523d5c97"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "b508609935428ebb1ea0034c329d6566"
  },
  {
    "url": "settings/content.html",
    "revision": "7c024e0e736a02c035cba4d0ad53b45d"
  },
  {
    "url": "settings/email.html",
    "revision": "9f3f2e662693a1b9f4de3b89e2f6020e"
  },
  {
    "url": "settings/external-services.html",
    "revision": "e6e954a91d1958be87d5e54430414be6"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "95f476a1ccabcbb17f3fd4e9fe4c0e1a"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "18131b9889e30a6cacff9f764a2a645d"
  },
  {
    "url": "settings/homepage.html",
    "revision": "9adc590a0c101748bae3413baf47bb7f"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "757857f06e9901255fd8be028d83ae70"
  },
  {
    "url": "settings/index.html",
    "revision": "7612d899061d2ab0970043900d0783ac"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "ff6206fcee3f76d0dd27d0ac9e9cf0c6"
  },
  {
    "url": "settings/languages.html",
    "revision": "cbe5931417b2c776c2dd1776960a98a2"
  },
  {
    "url": "settings/listings.html",
    "revision": "1d48483b56bd28d570f27efc0b8277f2"
  },
  {
    "url": "settings/pages.html",
    "revision": "5513f329fd2edc91a4399b0e3e3e24c3"
  },
  {
    "url": "settings/routing.html",
    "revision": "a47fb7692d4feafa7b781c134a415299"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "e4f5d9ff7200310545e2fd2ba8175969"
  },
  {
    "url": "settings/system.html",
    "revision": "02e8a7bfb3b23f3cffa1e59230537f07"
  },
  {
    "url": "settings/theme.html",
    "revision": "8fb29201459bd10a70e415dbb0b46cf2"
  },
  {
    "url": "settings/tools.html",
    "revision": "5b22f595033a3529422931ad42014b69"
  },
  {
    "url": "settings/users.html",
    "revision": "945d06ae4c588b56a483789e5ec3f486"
  },
  {
    "url": "settings/website.html",
    "revision": "6de3ad9b1fa0de9b7c9133ac7e1199a2"
  },
  {
    "url": "setup/container/bootstrapped.html",
    "revision": "82c997143eba8c5d877455eb98399e1e"
  },
  {
    "url": "setup/container/registry.html",
    "revision": "207c39e9d6d5d7903f316e7b2f4a704f"
  },
  {
    "url": "setup/container/requirements.html",
    "revision": "b017697798d8e71e8e9aee6fa7ca25ac"
  },
  {
    "url": "setup/container/running.html",
    "revision": "06b6e52751621c68299444e5bd6884f0"
  },
  {
    "url": "setup/server/cpanel.html",
    "revision": "168d654de83e6f6687d5062b6077314e"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "2e8abc890d0c8306e0d42f95e8e9adbf"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "92ce90d77451dd123b21bab3ceb18363"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "9d3324b9e1107010ba1f3d08a81b6ebc"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "119ec900b22340d5a0fe143c62527676"
  },
  {
    "url": "setup/server/upgrading.html",
    "revision": "a80a81751a833ad07eeddba866efe308"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "03a29740158c66704d49ba198d25ca9f"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "3352e474decadf0b919c582a0114c33d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
