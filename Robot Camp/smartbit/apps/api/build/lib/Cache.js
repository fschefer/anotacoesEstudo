'use strict';const a64_0x3354cd=a64_0x4bde;(function(_0xee2163,_0x5e2cb9){const _0x1b3eea=a64_0x4bde,_0x46ad1a=_0xee2163();while(!![]){try{const _0x46148b=-parseInt(_0x1b3eea(0x78))/0x1+parseInt(_0x1b3eea(0x6e))/0x2*(-parseInt(_0x1b3eea(0x73))/0x3)+-parseInt(_0x1b3eea(0x6a))/0x4+parseInt(_0x1b3eea(0x69))/0x5+-parseInt(_0x1b3eea(0x70))/0x6+-parseInt(_0x1b3eea(0x7c))/0x7*(-parseInt(_0x1b3eea(0x7a))/0x8)+parseInt(_0x1b3eea(0x7b))/0x9;if(_0x46148b===_0x5e2cb9)break;else _0x46ad1a['push'](_0x46ad1a['shift']());}catch(_0x1ee277){_0x46ad1a['push'](_0x46ad1a['shift']());}}}(a64_0x2c49,0xd4ee9));function a64_0x2c49(){const _0x184f52=['3805325MMfphj','2750692NkRRnv','test','get','set','3419542CZdbeR','redis','4671732OGATdH','defineProperty','NODE_ENV','3cFPKXU','replace','REDIS_HOST','cache-test:','ioredis','823087Chrrjg','invalidatePrefix','56QDrFFx','24369822DAAWqb','1402499FDMpYm','__esModule','PREFIX','default','del','keys'];a64_0x2c49=function(){return _0x184f52;};return a64_0x2c49();}function _interopRequireDefault(_0x345e97){const _0x5c800f=a64_0x4bde;return _0x345e97&&_0x345e97[_0x5c800f(0x7d)]?_0x345e97:{'default':_0x345e97};}Object[a64_0x3354cd(0x71)](exports,a64_0x3354cd(0x7d),{'value':!![]});var _ioredis=require(a64_0x3354cd(0x77)),_ioredis2=_interopRequireDefault(_ioredis);function a64_0x4bde(_0x2ea7f5,_0x359b29){const _0x2c4995=a64_0x2c49();return a64_0x4bde=function(_0x4bdeff,_0x409d8f){_0x4bdeff=_0x4bdeff-0x69;let _0x473790=_0x2c4995[_0x4bdeff];return _0x473790;},a64_0x4bde(_0x2ea7f5,_0x359b29);}class Cache{constructor(){const _0x24a273=a64_0x3354cd;this['PREFIX']=process['env'][_0x24a273(0x72)]===_0x24a273(0x6b)?_0x24a273(0x76):'cache:',this['redis']=new(0x0,_ioredis2['default'])({'host':process['env'][_0x24a273(0x75)],'port':process['env']['REDIS_PORT'],'keyPrefix':this[_0x24a273(0x7e)]});}[a64_0x3354cd(0x6d)](_0x101ada,_0x197bf9){const _0x448079=a64_0x3354cd;return this['redis'][_0x448079(0x6d)](_0x101ada,JSON['stringify'](_0x197bf9),'EX',0x3c*0x3c*0x18);}async['get'](_0x5d4e5b){const _0x21528f=a64_0x3354cd,_0xef489a=await this[_0x21528f(0x6f)][_0x21528f(0x6c)](_0x5d4e5b);return _0xef489a?JSON['parse'](_0xef489a):null;}['invalidate'](_0x4565c9){const _0x429c14=a64_0x3354cd;return this[_0x429c14(0x6f)][_0x429c14(0x80)](_0x4565c9);}async[a64_0x3354cd(0x79)](_0x5c1039){const _0x4d5bdd=a64_0x3354cd,_0x20d552=await this['redis'][_0x4d5bdd(0x81)](''+this[_0x4d5bdd(0x7e)]+_0x5c1039+':*'),_0x360e24=_0x20d552['map'](_0x1d88c6=>_0x1d88c6[_0x4d5bdd(0x74)](''+this[_0x4d5bdd(0x7e)],''));return this[_0x4d5bdd(0x6f)][_0x4d5bdd(0x80)](_0x360e24);}}exports[a64_0x3354cd(0x7f)]=new Cache();