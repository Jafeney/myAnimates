# 内部使用的css3动画类库
> 基础类库 `basic` 里单一（原子）动画有92种,囊括了目前常见的一些动画效果。
> 组合类库 `comb` 里没有单一的动画，而是应对特殊的场景定制的一些动画效果，目前正在开发中...

> 注意：本项目所有的预编译和打包操作都是基于gulp的，clone之后请先在项目根目录执行：
>  `npm install`，当然要启动应用你必须全局安装gulp，即执行 `sudo npm install gulp -g`，gulp全局安装完成后，执行 `gulp` 即可在本地9000端口开启监听服务。

## less结构
``` 
    |- less
        |- basic
            |- Attention seekers
                |- bounce
                |- flash
                |- pulse
                |- popIn *
                |- rubberBand ＊
                |- shake
                |- tada 
                |- swing
                |- wobble
                |- wiggle
                |- jello ＊
            |- Bouncing entrances
                |- bounceIn
                |- bounceInUp
                |- bounceInDown
                |- bounceInLeft
                |- bounceInRight
            |- Bouncing exits
                |- bounceOut
                |- bounceOutUp
                |- bounceOutDown
                |- bounceOutLeft
                |- bounceOutRight
            |- Drop
                |- dropUp
                |- dropDown
            |- EaseIn entrances
                |- easeInLeft
                |- easeInRight
            |- EaseOut exits
                |- easeOutLeft
                |- easeOutRight
            |- Flippers
                |- flip
                |- flipInX
                |- flipInY
                |- flipOutX
                |- flipOutY
            |- Fading entrances
                |- fadeIn
                |- fadeInUp
                |- fadeInDown
                |- fadeInLeft
                |- fadeInRight
                |- fadeInUpBig
                |- fadeInDownBig
                |- fadeInLeftBig
                |- fadeInRightBig
            |- Fading exits
                |- fadeOut 
                |- fadeOutUp
                |- fadeOutDown
                |- fadeOutLeft
                |- fadeOutRight
                |- fadeOutUpBig
                |- fadeOutDownBig
                |- fadeOutLeftBig
                |- fadeOutRightBig
            |- Lightspeed
                |- lightSpeedIn
                |- lightSpeedOut
            |- Rotating entrances
                |- rotateIn
                |- rotateInUpLeft
                |- rotateInUpRight
                |- rotateInDownLeft
                |- rotateInDownRight
            |- Rotating exits
                |- rotateOut
                |- rotateOutUpLeft
                |- rotateOutUpRight
                |- rotateOutDownLeft
                |- rotateOutDownRight
            |- Scaling entrances
                |- scaleIn
                |- scaleInBig
            |- Scaling exits
                |- scaleOut
                |- scaleOutBig
            |- Sliding entrances
                |- slideInUp ＊
                |- slideInDown ＊
                |- slideInLeft ＊
                |- slideInRight ＊
            |- Sliding exits
                |- slideOutUp ＊
                |- slideOutDown ＊
                |- slideOutLeft ＊
                |- slideOutRight ＊
            |- Specials
                |- hingeLeft
                |- hingeRight
                |- rollIn
                |- rollOut
            |- Zoom entrances
                |- zoomIn ＊
                |- zoomInUp ＊
                |- zoomInDown ＊
                |- zoomInLeft ＊
                |- zoomInRight ＊
            |- zoom exits
                |- zoomOut ＊
                |- zoomOutUp ＊
                |- zoomOutDown ＊
                |- zoomOutLeft ＊
                |- zoomOutRight ＊
        |- comb 
            |- 
        animates.less //类库文件（可以自行配制） 
        demo.less //demo页面的样式
```

