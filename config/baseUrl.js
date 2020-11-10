let baseUrl = "http://127.0.0.1:7001/";  //这里是一个默认的url，可以没有
// baseUrl = "https://hicar.haier.net/hipassjava"  //开发的线上环境
// baseUrl = "http://2t3xv5.natappfree.cc"  //开发的线上环境
// baseUrl = "http://103.120.225.186:9003/hipassjava"  //开发的线上环境
switch (process.env.NODE_ENV) {
    case 'development':
        // baseUrl = "http://127.0.0.1:7001/"//开发本地环境
        baseUrl = "http://hritnew.haier.net"//开发本地环境
        // baseUrl = "http://3418124391.eicp.vip"//开发本地环境
        // baseUrl = "https://hicar.haier.net/hipassjava"   //生产环境
        // baseUrl = "http://zwvbuw.natappfree.cc/hipassjava"   //生产环境
        break
    case 'dev':
        baseUrl = "http://c3412q4391.zicp.vip:32979"  //开发的线上环境
        break
    case 'try':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://www.cnblogs.com/XHappyness/"  //开发的测试环境
        break
    case 'production':
        baseUrl = "http://hritnew.haier.net"   //生产环境
        break
}

export default baseUrl;
