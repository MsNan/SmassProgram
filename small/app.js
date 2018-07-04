//app.js
App({

    globalData: {
        deviceHeight: 0,
        deviceWidth: 0
    },

    onLaunch() {
        this.getDeviceInfo();
    },

    getDeviceInfo() {
        try {
            var res = wx.getSystemInfoSync()
            this.globalData.deviceHeight = res.windowHeight;
            this.globalData.deviceWidth = res.windowWidth;
        } catch (e) {
            // Do something when catch error
        }
    }
})