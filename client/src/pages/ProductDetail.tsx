import { Button } from "@/components/ui/button";
import { ChevronLeft, Check, Smartphone, Lightbulb, Watch, Tablet } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { updateSEOMeta, addStructuredData, generateProductSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * Design Philosophy: Modern Tech Company
 * - Primary Color: Crimson Red (#DC143C)
 * - Typography: Poppins (bold titles) + Sora (body text)
 * - Layout: Asymmetric, non-centered design with strategic whitespace
 * - Visual Elements: Gradients, shadows, and subtle animations
 */

const productDetails: Record<
  string,
  {
    name: string;
    subtitle: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    applications: string[];
    image: string;
  }
> = {
  "smart-phone": {
    name: "智慧学习手机",
    subtitle: "为学生设计的专业学习工具",
    icon: <Smartphone className="w-12 h-12" />,
    description:
      "我们的智慧学习手机专为学生设计，集成了先进的学习管理系统、护眼屏幕技术和丰富的教育资源。帮助学生提高学习效率，保护视力健康。",
    features: [
      "护眼OLED屏幕，减少蓝光伤害",
      "内置学习管理系统，智能课程推荐",
      "支持多种学习应用和资源库",
      "长续航电池，满足全天学习需求",
      "安全防护功能，家长可控制使用时间",
      "轻薄便携设计，方便携带",
    ],
    specs: [
      { label: "屏幕尺寸", value: "6.5 英寸 OLED" },
      { label: "处理器", value: "高通骁龙 8 Gen 2" },
      { label: "内存", value: "8GB / 12GB" },
      { label: "存储", value: "256GB / 512GB" },
      { label: "电池", value: "5000mAh" },
      { label: "重量", value: "约 185g" },
    ],
    applications: [
      "在线课程学习",
      "作业完成与提交",
      "学习资源查阅",
      "考试准备",
      "知识竞赛参与",
    ],
    image: import.meta.env.BASE_URL + "images/products-showcase.jpg",
  },
  "smart-tablet": {
    name: "智能学习平板",
    subtitle: "沉浸式学习体验",
    icon: <Tablet className="w-12 h-12" />,
    description:
      "智能学习平板提供沉浸式的学习体验，大屏幕设计适合长时间学习，搭配专业教学应用和互动课程。是学生和教师的理想教学工具。",
    features: [
      "大屏幕设计，提供沉浸式学习体验",
      "高分辨率 OLED 显示屏",
      "支持手写笔输入，自然书写体验",
      "强大的处理性能，流畅运行应用",
      "长续航设计，支持全天使用",
      "预装丰富的教学应用和资源",
    ],
    specs: [
      { label: "屏幕尺寸", value: "12.9 英寸 OLED" },
      { label: "分辨率", value: "2732 x 2048" },
      { label: "处理器", value: "高通骁龙 8 Gen 2" },
      { label: "内存", value: "8GB / 12GB" },
      { label: "存储", value: "256GB / 512GB" },
      { label: "电池", value: "10000mAh" },
    ],
    applications: [
      "在线教学",
      "远程学习",
      "创意设计",
      "视频制作",
      "数据分析",
    ],
    image: import.meta.env.BASE_URL + "images/products-showcase.jpg",
  },
  "smart-watch": {
    name: "智能手表",
    subtitle: "健康监测与学习助手",
    icon: <Watch className="w-12 h-12" />,
    description:
      "智能手表集健康监测和学习辅助功能于一身。实时监测心率、睡眠、运动数据，同时提供学习提醒和课程通知，是学生的贴身健康卫士。",
    features: [
      "24小时心率监测",
      "睡眠质量分析",
      "运动数据追踪",
      "学习提醒功能",
      "课程通知推送",
      "防水设计，适应各种环境",
    ],
    specs: [
      { label: "屏幕尺寸", value: "1.4 英寸 AMOLED" },
      { label: "防水等级", value: "5ATM" },
      { label: "电池续航", value: "7-10 天" },
      { label: "传感器", value: "心率、加速度、陀螺仪等" },
      { label: "连接", value: "蓝牙 5.3" },
      { label: "重量", value: "约 35g" },
    ],
    applications: [
      "健康监测",
      "运动追踪",
      "学习提醒",
      "消息通知",
      "支付功能",
    ],
    image: import.meta.env.BASE_URL + "images/products-showcase.jpg",
  },
  "oled-lamp": {
    name: "OLED护眼台灯",
    subtitle: "第四代健康光源技术",
    icon: <Lightbulb className="w-12 h-12" />,
    description:
      "采用第四代 OLED 光源技术的护眼台灯，提供无频闪、无蓝光危害的健康照明。适合长时间学习和工作，有效保护眼睛健康。",
    features: [
      "OLED 第四代光源技术",
      "无频闪设计，保护眼睛",
      "低蓝光模式，减少眼睛疲劳",
      "智能亮度调节，自适应环境光",
      "触控开关，操作便捷",
      "节能环保，低功耗设计",
    ],
    specs: [
      { label: "光源类型", value: "OLED 第四代" },
      { label: "色温范围", value: "2700K - 6500K" },
      { label: "最大亮度", value: "1000 Lux" },
      { label: "功率", value: "15W" },
      { label: "材质", value: "铝合金 + 塑料" },
      { label: "高度", value: "可调节 40-60cm" },
    ],
    applications: [
      "学生学习",
      "办公工作",
      "阅读",
      "创意设计",
      "夜间工作",
    ],
    image: import.meta.env.BASE_URL + "images/products-showcase.jpg",
  },
};

export default function ProductDetail() {
  const [location, navigate] = useLocation();
  const productId = location.split("/").pop();
  const product = productId ? productDetails[productId] : null;

  useEffect(() => {
    if (product) {
      updateSEOMeta({
        title: `${product.name} - 深圳市红盛源科技有限公司`,
        description: product.description,
        keywords: `${product.name},红盛源科技,智慧物联,OLED,健康光环境`,
        ogTitle: product.name,
        ogDescription: product.subtitle,
        canonicalUrl: `https://hongshengyuan.tech/product/${productId}`,
      });

      addStructuredData(generateProductSchema({
        name: product.name,
        description: product.description,
        image: product.image,
      }));
    }
  }, [product, productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，我们找不到您要查看的产品。</p>
          <Button
            onClick={() => navigate("/")}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            返回首页
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-500 transition font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <img src={import.meta.env.BASE_URL + "images/logo.png"} alt="红盛源科技 Logo" className="h-12 w-auto" />
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block text-amber-500 font-semibold text-sm mb-4">
                  产品详情
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600">{product.subtitle}</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

              <div className="flex gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-lg">
                  立即购买
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-50 px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  咨询详情
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">主要特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-500 mt-1" />
                </div>
                <div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">技术规格</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.specs.map((spec, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">{spec.label}</p>
                  <p className="text-lg text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">应用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-900">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">准备好体验了吗？</h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，了解更多产品信息和购买选项。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-500 hover:bg-amber-50 px-8 py-6 text-lg font-semibold rounded-lg">
              立即购买
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg"
            >
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={import.meta.env.BASE_URL + "images/logo.png"} alt="红盛源科技 Logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-400">
                致力于智慧物联、健康生活的科技型创新公司
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    公司简介
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    企业文化
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    发展历程
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">产品与服务</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    产品中心
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    解决方案
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-300 transition">
                    技术支持
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>电话: 18923719468</li>
                <li>邮箱: info@hongshengyuan.tech</li>
                <li>地址: 深圳市龙岗区龙岗街道祥情世纪城市广场二楼</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 深圳市红盛源科技有限公司 · 版权所有
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/" className="text-sm text-gray-400 hover:text-amber-300 transition">
                隐私政策
              </a>
              <a href="/" className="text-sm text-gray-400 hover:text-amber-300 transition">
                服务条款
              </a>
              <a href="/" className="text-sm text-gray-400 hover:text-amber-300 transition">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
