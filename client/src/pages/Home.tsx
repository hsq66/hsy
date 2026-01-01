import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Zap, Smartphone, Lightbulb, Globe, BarChart3, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { updateSEOMeta, addStructuredData } from "@/lib/seo";

/**
 * Design Philosophy: Modern Tech Company
 * - Primary Color: Crimson Red (#DC143C)
 * - Typography: Poppins (bold titles) + Sora (body text)
 * - Layout: Asymmetric, non-centered design with strategic whitespace
 * - Visual Elements: Gradients, shadows, and subtle animations
 */

export default function Home() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    updateSEOMeta({
      title: "深圳市红盛源科技有限公司 - 智慧物联 健康光环境",
      description: "深圳市红盛源科技有限公司致力于便捷通信、健康光环境的科技型创新公司。基于新型的OLED技术，研究与拓展塑造低碳、环保、节能的照明第四代新型科技应用产品。",
      keywords: "智慧物联,健康光环境,OLED技术,智慧学习手机,智能平板,智能手表,护眼台灯",
      ogTitle: "深圳市红盛源科技有限公司",
      ogDescription: "智慧物联、健康光环境的科技型创新企业",
      canonicalUrl: "https://hongshengyuan.tech",
    });

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "产品中心",
      "description": "红盛源科技的智慧产品系列",
    });
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setFormError("请输入您的姓名");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("请输入有效的邮箱地址");
      return;
    }
    if (!formData.message.trim()) {
      setFormError("请输入您的留言");
      return;
    }

    // Simulate form submission
    console.log("表单数据:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const navLinks = [
    { label: "首页", href: "#home" },
    { label: "关于我们", href: "#about" },
    { label: "产品中心", href: "#products" },
    { label: "解决方案", href: "#solutions" },
  ];

  const products = [
    {
      id: 1,
      slug: "smart-phone",
      icon: "📱",
      title: "智慧学习手机",
      description: "为学生设计的专业学习工具",
    },
    {
      id: 2,
      slug: "smart-tablet",
      icon: "📲",
      title: "智能学习平板",
      description: "沉浸式学习体验",
    },
    {
      id: 3,
      slug: "smart-watch",
      icon: "⏰",
      title: "智能手表",
      description: "健康监测与学习助手",
    },
    {
      id: 4,
      slug: "oled-lamp",
      icon: "💫",
      title: "OLED护眼台灯",
      description: "第四代健康光源技术",
    },
  ];
  const solutions = [
    {
      id: 1,
      title: "车辆定位等物联网",
      description: "打造创新的定位系统，实时监测车辆位置、路况以及交通状况",
      icon: <MapPin className="w-12 h-12 text-red-600" />,
    },
    {
      id: 2,
      title: "中小企业ERP",
      description: "ERP解决方案、CRM解决方案、多系统集成方案、集团解决方案",
      icon: <Globe className="w-12 h-12 text-red-600" />,
    },
    {
      id: 3,
      title: "数字化咨询服务",
      description: "从发展战略、新型能力、系统性解决方案构建体系化关联",
      icon: <BarChart3 className="w-12 h-12 text-red-600" />,
    },
    {
      id: 4,
      title: "新材料与新技术应用",
      description: "OLED第四代光源技术，高纯石英砂，高纯稀有金属应用",
      icon: <Zap className="w-12 h-12 text-red-600" />,
    },
  ];

  const news = [
    {
      id: 1,
      title: "一文读懂美国分级阅读体系：Lexile蓝思、AR、GRL、ORT、DRA",
      date: "2024-12-20",
      category: "教育资讯",
    },
    {
      id: 2,
      title: "最合适中国学生的课程居然是：A-Level课程？",
      date: "2024-12-19",
      category: "课程分析",
    },
    {
      id: 3,
      title: "体育总局办公厅 教育部办公厅关于印发招生管理办法的通知",
      date: "2024-12-18",
      category: "政策通知",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={import.meta.env.BASE_URL + "images/logo.png"} alt="红盛源科技 Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="inline-block">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                联系我们
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 transition font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="inline-block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  联系我们
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block text-red-600 font-semibold text-sm mb-4">
                  科技创新 · 健康生活
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  智慧物联
                  <br />
                  <span className="text-red-600">健康光环境</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                深圳市红盛源科技有限公司致力于便捷通信、健康光环境的科技型创新公司。基于新型的OLED技术，研究与拓展塑造低碳、环保、节能的照明第四代新型科技应用产品。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  了解更多 <ChevronRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg border-red-600 text-red-600 hover:bg-red-50 rounded-lg">
                  产品展示
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-full">
              <img
                src={import.meta.env.BASE_URL + "images/hero-banner.jpg"}
                alt="Hero Banner"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              作为南海之滨的创新型企业，我们将集公司多年的技术积累和行业经验，致力于为全球用户提供高品质的智慧物联产品和解决方案，推动数字化转型和健康生活方式的发展。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "技术创新", desc: "基于OLED第四代光源技术的研究与应用" },
              { title: "品质保证", desc: "严格的质量管理体系和完善的售后服务" },
              { title: "生态融合", desc: "与全球合作伙伴共同构建智慧生态" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm mb-4">产品中心</span>
            <h2 className="text-4xl font-bold text-gray-900">智慧产品系列</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <button
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="inline-flex items-center text-red-600 font-semibold text-sm hover:gap-2 transition cursor-pointer"
                >
                  了解详情 <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-12 text-center">
            <img
              src={import.meta.env.BASE_URL + "images/products-showcase.jpg"}
              alt="Products Showcase"
              className="w-full h-80 object-cover rounded-xl mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">完整的产品生态</h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              我们的产品系列覆盖智慧学习、健康监测、环保照明等多个领域，为用户提供一站式的智慧生活解决方案。
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              浏览全部产品
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm mb-4">解决方案</span>
            <h2 className="text-4xl font-bold text-gray-900">行业解决方案</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border-l-4 border-red-600"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">{solution.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-red-600 font-semibold hover:gap-2 transition">
                  了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center">
            <img
              src={import.meta.env.BASE_URL + "images/solutions-bg.jpg"}
              alt="Solutions Background"
              className="w-full h-80 object-cover rounded-xl mb-8"
            />
            <h3 className="text-3xl font-bold mb-4">数字化转型伙伴</h3>
            <p className="text-red-100 max-w-2xl mx-auto mb-6">
              我们提供从战略规划到实施落地的完整数字化转型服务，帮助企业在新时代实现业务创新和价值提升。
            </p>
            <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 font-semibold">
              咨询专家
            </Button>
          </div>
        </div>
      </section>

      {/* News Section - Hidden */}
      <section id="news" className="py-20 bg-white hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-red-600 font-semibold text-sm mb-4">新闻资讯</span>
            <h2 className="text-4xl font-bold text-gray-900">最新动态</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer group"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 h-32 flex items-center justify-center">
                  <span className="text-white text-4xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition line-clamp-2">
                    {item.title}
                  </h3>
                  <a href="#" className="inline-flex items-center text-red-600 font-semibold text-sm hover:gap-2 transition">
                    阅读全文 <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
              <p className="text-lg text-gray-600">
                有任何问题或建议？我们很乐意为您服务。
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-gray-50 rounded-xl p-8 shadow-sm">
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">感谢您的留言！我们会尽快与您联系。</p>
                </div>
              )}

              {formError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">{formError}</p>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="请输入您的邮箱地址"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  留言 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="请输入您的留言或问题..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
              >
                发送消息
              </Button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">☎</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">电话</h3>
                <p className="text-gray-600">18923719468</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">@</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">邮箱</h3>
                <p className="text-gray-600">info@hongshengyuan.tech</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">📍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">地址</h3>
                <p className="text-gray-600 text-sm">深圳市龙岗区龙岗街道祥情世纪城市广场二楼</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">准备好开始了吗？</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，了解如何通过我们的产品和解决方案为您的业务创造价值。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block">
              <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-6 text-lg font-semibold rounded-lg">
                立即咨询
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg"
            >
              了解更多
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
                    <li><a href="#about" className="hover:text-red-400 transition">公司简介</a></li>
                <li><a href="#about" className="hover:text-red-400 transition">企业文化</a></li>
                <li><a href="#about" className="hover:text-red-400 transition">发展历程</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">产品与服务</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-red-400 transition">产品中心</a></li>
                <li><a href="#solutions" className="hover:text-red-400 transition">解决方案</a></li>
                <li><a href="#solutions" className="hover:text-red-400 transition">技术支持</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>电话: 18923719468</li>
                <li>邮箱: info@hongshengyuan.tech</li>
                <li>地址: 深圳市龙岗区龙岗街道</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2026 深圳市红盛源科技有限公司 · 版权所有
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-red-400 transition">隐私政策</a>
              <a href="#" className="text-sm text-gray-400 hover:text-red-400 transition">服务条款</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-red-400 transition">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
