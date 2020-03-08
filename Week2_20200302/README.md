### 课堂作业 - JSON数据调研短文 


>**详见** 课堂作业.md


### 课后作业 - 微信小程序练习 - 

------------
>**代码详见Folder**   .\codes

**刘强老师可扫描下面的二维码使用小程序体验版，我已将您加入体验成员。**
![体验版二维码](https://github.com/LowkeyYe/MobileDevelop/blob/master/Week1_20200224/images/体验版二维码.jpg "体验版二维码")

**本周小程序简介**

由于上周相册已经使用列表渲染，所以本周对首页的按钮组进行列表渲染。
方法如下：
1. 使用swiper对按钮组进行滑动，每页只显示3个。
2. 调整按钮的各项值为变量，在data中提取。
3. 使用wxs的module自动计算需要生成的swiper-item的数量。
4. 使用嵌套列表渲染，swiper-item用于页数，button用于生成按钮个数。
5. 由于目前水平限制，采用方法为button的display属性为变量，在wxs中计算判断，如果是本页应当显示的week按钮，则返回display:block；如果不应当显示，则返回display:none。
（如果wx:for可以从第n项开始渲染应该会更简单）
最后效果如下图所示：
![效果展示](https://github.com/LowkeyYe/MobileDevelop/tree/master/Week2_20200302/imgs/效果图.jpg "效果展示")
