/** @type {{experimental: {serverActions: boolean}}} */
const nextConfig = {
  experimental: {
    serverActions: true, // server action을 사용하려면 활성화
    // serverActionsBodySizeLimit: '2mb', // 최대 요청 본문은 기본적으로 1MB이며 필요한 경우 제한할 수 있음
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'https:/loremflickr.com'],
  },
};

module.exports = nextConfig;
