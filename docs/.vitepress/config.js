import * as path from 'path';

module.exports = {
  title: 'Profcomff User Library',
  description: 'Библиотека для работы с пользователями Твой ФФ!',
  themeConfig: {
    repo: 'https://github.com/profcomff/user-uilib',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'Главное', link: '/' },
          { text: 'Начало работы', link: '/guide/' },
        ],
      }, {
        text: 'Компоненты',
        children: [
          { text: 'Селектор пользователя', link: '/components/user-selector' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@profcomff/user-uilib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', 'vuetify', 'pinia'], // avoid error when using dependencies that also use Vue
    }
  }
}
