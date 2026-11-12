// Econ Play 앱 설치용 서비스 워커: 아무것도 저장(캐시)하지 않고 늘 인터넷에서 새로 받는다.
// (옛 화면이 남거나 Firebase 저장을 건드리지 않도록 일부러 비워 둠)
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
