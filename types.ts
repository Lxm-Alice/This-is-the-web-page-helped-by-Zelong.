
export type Language = 'en' | 'zh' | 'de';

export interface SectionContent {
  title: string;
  description: string;
}

export interface Content {
  title: string;
  intro: string;
  heroText: string;
  modules: {
    care: SectionContent;
    doing: SectionContent;
    origin: SectionContent;
    connect: SectionContent;
  };
  footer: string;
  reflectionTitle: string;
  loadingReflection: string;
}

export const translations: Record<Language, Content> = {
  en: {
    title: "Welcome to my space",
    intro: "Hey, I'm Alice. I'm currently learning AI programming.",
    heroText: "I'm exploring how AI, the World, and Human-centered Business can work together.",
    modules: {
      care: {
        title: "What I care about",
        description: "The delicate balance between technological efficiency and human emotion, sustainable growth that respects our planet, and the future of work where creativity remains our core."
      },
      doing: {
        title: "What I'm doing",
        description: "A complete novice learning 'vibe coding'. Actively practicing a mid-life transition in the AI era, exploring creativity, and turning business inspirations into reality."
      },
      origin: {
        title: "Where I come from",
        description: "A path paved with diverse experiences, moving from traditional business structures toward a tech-empowered future, driven by a lifelong habit of questioning the status quo."
      },
      connect: {
        title: "Let's chat",
        description: "I am open to collaborations, exchanges, and the collision of ideas. Whether it's a project proposal or a philosophical debate, I'd love to hear from you."
      }
    },
    footer: "A pace in progress • 2024",
    reflectionTitle: "Current Reflection",
    loadingReflection: "Capturing a thought..."
  },
  zh: {
    title: "欢迎来到我的网页",
    intro: "Hey，我是Alice，正在学习AI编程",
    heroText: "我正在探索 AI、世界与以人为本的商业如何协同共生。",
    modules: {
      care: {
        title: "我关心什么",
        description: "技术效率与人类情感之间的微妙平衡，尊重地球的增长方式，以及创意始终作为核心竞争力的未来工作形态。"
      },
      doing: {
        title: "我在做什么",
        description: "完全的小白，正在学习 vibe coding。积极实践 AI 时代的中年转型，探索自己的创造性，并将商业灵感落地生根。"
      },
      origin: {
        title: "我来自哪里",
        description: "由多元经历铺就的道路，从传统的商业结构走向技术赋能的未来，始终受一颗对现状保持追问的好奇心所驱使。"
      },
      connect: {
        title: "如果你想和我聊聊",
        description: "欢迎各种形式的合作、交流与想法碰撞。无论是具体的项目提案还是单纯的思想交流，我都期待与你建立连接。"
      }
    },
    footer: "行进中的脚步 • 2024",
    reflectionTitle: "当下的思考",
    loadingReflection: "正在捕捉灵感..."
  },
  de: {
    title: "Willkommen in meinem Bereich",
    intro: "Hey, ich bin Alice. Ich lerne gerade KI-Programmierung.",
    heroText: "Ich erforsche, wie KI, die Welt und menschenzentriertes Business zusammenarbeiten können.",
    modules: {
      care: {
        title: "Was mir wichtig ist",
        description: "Das feine Gleichgewicht zwischen technologischer Effizienz und menschlicher Emotion, nachhaltiges Wachstum und eine Zukunft, in der Kreativität unser Kern bleibt."
      },
      doing: {
        title: "Was ich mache",
        description: "Ein absoluter Neuling, der 'Vibe Coding' lernt. Ich gestalte aktiv meinen beruflichen Umbruch im KI-Zeitalter, entdecke meine Kreativität und setze Geschäftsideen um."
      },
      origin: {
        title: "Woher ich komme",
        description: "Ein Weg aus vielfältigen Erfahrungen, von traditionellen Geschäftsstrukturen hin zu einer technologiegestützten Zukunft, angetrieben von ständiger Neugier."
      },
      connect: {
        title: "Lass uns reden",
        description: "Offen für Zusammenarbeit, Austausch und den Zusammenprall von Ideen. Ob Projektvorschlag oder Gedankenaustausch – ich freue mich, von dir zu hören."
      }
    },
    footer: "Ein Schritt im Werden • 2024",
    reflectionTitle: "Aktuelle Reflexion",
    loadingReflection: "Gedanken werden gesammelt..."
  }
};
