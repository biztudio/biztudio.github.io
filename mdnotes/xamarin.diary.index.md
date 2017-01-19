### **Xamarin.Forms 从 'Hello, World' 到 App Store**

***


>"爱学习的**[小沈扬同学](https://biztudio.github.io)**又开始学习 [Xamarin.Forms](https://www.xamarin.com/) 啦！

>学习过程正在现场文字直播，搬板凳前排就坐，此篇是个开场及内容索引。"  -- 小沈扬同学



开始之前，我们只要搞清楚几个常识，剩下的事情就简单了:)

1. [Xamarin](https://www.xamarin.com/) 是微软家进行跨平台应用开发的基础平台 (Platform), 支持 iPhone、iPad、Android 设备上应用的开发，主要开发语言是 C#;

2. [Xamarin](https://www.xamarin.com/) 本身是免费的，不过建立在其之上的开发工具 Visual Studio 对于一定规模的商业组织则是收费的, 个人开发者放心用免费的社区版本；

3. [Xamarin](https://www.xamarin.com/) 建立应用项目通常有3大选项：**[Xamarin.iOS](https://developer.xamarin.com/guides/ios/)** \ **[Xamarin.Android](https://developer.xamarin.com/guides/android/)** \ **[Xamarin.Forms](https://developer.xamarin.com/guides/xamarin-forms/)**, 前两款是针对专门系统的对应开发选项，能跨平台的应用则选择 **Xamarin.Forms**. 存在即为合理，前两个开发项目主要是针对需要特定平台才有的API或者特殊界面的场景，而 **Xamarin.Forms** 略少了稍许个性换来了更好的跨平台通用性，请看图秒懂:
![XamarinOptions](https://raw.githubusercontent.com/biztudio/biztudio.github.io/master/mdnotes/img/xamarin.options.png)

4. [Xamarin](https://www.xamarin.com/) 下 **Xamarin.Forms** 声称的跨平台通用性**并不是**说一个应用项目开发完后编译可以直接发布到各种平台。这里的通用性更强调的是代码的可共享复用性，比如业务逻辑代码项目只需要编写一次就可以被 Android \ iOS \ Windows 平台的界面实现代码进行调用，同时部分界面实现代码也有部分可以共用的地方。按官方的说法，对于 Android \ Windows 平台，代码共用程度可以高达 85%, 而 iOS 平台共用程度大致是70%.



节目内容索引:


| 节目                   | 说明                   |
| -------------          |:-------------:         |
| ['Hello Xamarin.Forms'](#) | 安装配置环境     |
| [代码结构](#)          |  细看一下到底是怎么回事      |
| [异步操作](#)          | 有价值的操作往往都是异步的   |
| [本地数据存取](#)          | 总会有些数据需要放在客户端   |
| [Unit Test](#)          | 磨刀不误砍柴工           |
| [应用发布](#)          | 终于等到这一天了           |


