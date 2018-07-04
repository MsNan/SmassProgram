//index.js
//获取应用实例
const app = getApp()

console.log(app.globalData)


Page({

    data: {
        "longitude": "113.324520",
        "latitude": "23.099994",
        // "controls": [{
        //         id: 1,
        //         iconPath: '/resources/pin.png',
        //         position: {
        //             left: (app.globalData.deviceWidth / 2) - 11,
        //             top: ((app.globalData.deviceHeight - 42) / 2) - 31,
        //             width: 22,
        //             height: 31
        //         }
        //     },
        // {
        //     id: 2,
        //     iconPath: '/resources/center.png',
        //     clickable: true,
        //     position: {
        //         left: 20,
        //         top: app.globalData.deviceHeight - 82,
        //         width: 24,
        //         height: 24
        //     }
        // }
        // ]
    },

    onLoad() {
        this.getLocation();
    },

    getLocation() {
        wx.getLocation({
            type: 'gcj02',
            success: this.handlePosSucc.bind(this)
        })
    },


    handlePosSucc(res) {
        this.setData({
            "longitude": res.longitude,
            "latitude": res.latitude
        })
    },

    controlTap(event) {
        console.log(event);
    },

    onShareAppMessage: function() {
        return {
            title: '酷炫的观赏鱼交易平台',
            path: '/pages/index/index'
        }
    }
})