function FindProxyForURL(url, host) {
    var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT";
    var direct = "DIRECT";

    // 判断是否为 IP 地址的简单函数
    function isIPAddress(h) { return /^\d{1,3}(\.\d{1,3}){3}$/.test(h); }

    // 过滤本地/局域网/host为无后缀域名
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        (isIPAddress(host) && (
            isInNet(host, "127.0.0.0", "255.0.0.0") ||
            isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "10.135.0.0", "255.255.0.0") ||        // 新增 10.135.*
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||       // 包含 192.168.* 及 192.168.0.117
            isInNet(host, "169.254.0.0", "255.255.0.0") ||       // 新增 169.254/16
            isInNet(host, "202.105.190.2", "255.255.255.255") || // 精确匹配 202.105.190.2
            isInNet(host, "154.12.18.74", "255.255.255.255") ||  // 新增 154.12.18.74
            isInNet(host, "103.101.204.53", "255.255.255.0")
        ))
    ) {
        return direct;
    }

    // 判断是否以指定后缀结尾
    function endsWith(host, suffix) {
        return host.length >= suffix.length && host.substring(host.length - suffix.length) === suffix;
    }
    if (
        endsWith(host, ".cn") || endsWith(host, ".com.cn") || endsWith(host, ".net.cn") ||
        endsWith(host, ".org.cn") || endsWith(host, ".gov.cn")
    ) {
        return direct;
    }

    // 常见中国站点及新增站点
    var chinaSites = [
        "baidu.com", "*.baidu.com", "bdstatic.com", "*.bdstatic.com",
        "taobao.com", "*.taobao.com", "alicdn.com", "*.alicdn.com", "alibaba.com", "*.alibaba.com",
        "alipay.com", "*.alipay.com", "tmall.com", "*.tmall.com",
        "qq.com", "*.qq.com", "tencent.com", "*.tencent.com", "gtimg.com", "*.gtimg.com", "wechat.com", "*.wechat.com",
        "jd.com", "*.jd.com", "360buyimg.com", "*.360buyimg.com",
        "sina.com.cn", "*.sina.com.cn", "sinaimg.cn", "*.sinaimg.cn", "weibo.com", "*.weibo.com",
        "163.com", "*.163.com", "netease.com", "*.netease.com",
        "zhihu.com", "*.zhihu.com", "zhimg.com", "*.zhimg.com",
        "bilibili.com", "*.bilibili.com", "hdslb.com", "*.hdslb.com",
        "meituan.com", "*.meituan.com", "dpfile.com", "*.dpfile.com",
        "amap.com", "*.amap.com", "autonavi.com", "*.autonavi.com",
        "*.long.kim", "as.long.kim" // 新增域名匹配
    ];
    for (var i = 0; i < chinaSites.length; i++) {
        if (shExpMatch(host, chinaSites[i])) {
            return direct;
        }
    }

    return proxy;
}
