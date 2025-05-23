import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.iftech.android.box',
  name: '小组件盒子',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14204126',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12706209',
        },
        {
          key: 1,
          activityIds: 'io.iftech.android.box.main.HomeActivity',
          matches: 'ImageView - FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12706209',
        },
        {
          key: 2,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches:
            '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/i/12706228',
        },
        {
          key: 3,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12706236',
        },
        {
          key: 4,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12706240',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-会员限时优惠弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'io.iftech.android.box.main.HomeActivity',
          matches:
            '@[id="io.iftech.android.box:id/ivClose"] + [text^="限时"][text$="特惠"]',
          snapshotUrls: 'https://i.gkd.li/i/12706226',
        },
      ],
    },
  ],
});
