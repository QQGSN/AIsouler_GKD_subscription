import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12620568',
            'https://i.gkd.li/i/12621997',
          ],
        },
        {
          key: 1,
          name: '另一种倒计时广告', // 此广告要点击文字相邻的图片,如果直接点击文字会无反应或者触发广告跳转
          matches:
            '[id="com.dongqiudi.news:id/ad_skip_time"] + [id="com.dongqiudi.news:id/scale_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12620583',
            'https://i.gkd.li/i/12621953',
          ],
        },
        {
          key: 2,
          matches: '[text^="跳过"][childCount=0][text.length<10]',
          exampleUrls:
            'https://m.gkd.li/57941037/de316c34-dac0-4ee6-91e7-164432e49a1f',
          snapshotUrls: 'https://i.gkd.li/i/12620577',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.DownloadActivity',
          matches: 'TextView[text*="新版本"] +3 TextView[text="下次提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/12620586',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-首页信息流广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      fastQuery: true,
      rules: [
        {
          preKeys: [1, 2],
          name: '首页信息流广告-反馈理由',
          matches:
            'TextView[text="诱导点击"][id="com.dongqiudi.news:id/text_item"]',
          snapshotUrls: 'https://i.gkd.li/i/12620656',
        },
        {
          key: 1,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_label"] +(n) ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12620654',
        },
        {
          key: 2,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_title"] +(2) RelativeLayout > ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12620788',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dongqiudi.news.MainActivity',
          matches: '[id="com.dongqiudi.news:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13260467',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-数据页弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dongqiudi.news.MainActivity',
      rules: [
        {
          key: 1,
          name: '腾讯广告SDK',
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13626900',
        },
        {
          key: 2,
          name: '快手广告磁力智投SDK',
          fastQuery: true,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13627105',
        },
        {
          key: 3,
          name: '字节广告穿山甲SDK-1',
          matches: 'View[text="反馈"] -2 @View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13627106',
        },
        {
          key: 4,
          name: '字节广告穿山甲SDK-2', //合并key3
          matches: 'FrameLayout[desc^="webview-close"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12620588',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="notification_button_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/81cea4de-9288-4ec8-97ea-7c4a9b19fd08',
          snapshotUrls: 'https://i.gkd.li/i/19666282',
        },
      ],
    },
  ],
});
