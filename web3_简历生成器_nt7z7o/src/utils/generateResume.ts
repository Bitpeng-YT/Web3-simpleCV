import { nanoid } from 'nanoid'

type FormData = {
  identity: string
  chain: string
  skills: string
  highlight: string
}

export function generateResume(data: FormData) {
  const titles = [
    `${data.identity} 之 ${data.chain} 领航者`,
    `${data.identity} 的 ${data.chain} 传奇`,
    `${data.identity} 与 ${data.chain} 的不羁之旅`,
    `${data.identity} 的 ${data.chain} 逆袭`,
  ]

  const intros = [
    `我是一名 ${data.identity}，在 ${data.chain} 领域拥有 ${data.skills} 的独门绝技，曾在 ${data.highlight}，如今正准备开启下一段 Web3 传奇。`,
    `身为 ${data.identity}，我在 ${data.chain} 上的 ${data.skills} 技能堪称无敌，曾经 ${data.highlight}，现在正以 ${data.chain} 为舞台，书写属于自己的史诗。`,
    `我，${data.identity}，在 ${data.chain} 里以 ${data.skills} 为武器，曾经 ${data.highlight}，如今正踏上新的征程。`,
  ]

  const experiences = [
    `在 ${data.chain} 上，曾经用 ${data.skills} 让 ${data.highlight}，并在社区中被称为“${data.identity} 的 ${data.chain} 之星”。`,
    `利用 ${data.skills}，在 ${data.chain} 上完成了 ${data.highlight}，并在一次 AMA 中被问到“如何在 ${data.chain} 上做 ${data.skills}”，我回答：“这就是我的专长！”`,
    `在 ${data.chain} 的某个项目中，我用 ${data.skills} 让团队获得了 ${data.highlight}，并在社交媒体上掀起了“${data.identity} 的 ${data.chain} 之旅”话题。`,
    `曾在 ${data.chain} 上用 ${data.skills} 让项目获得了 ${data.highlight}，并在一次空投中被称为“${data.identity} 的空投猎人”。`,
  ]

  const quotes = [
    `“在 ${data.chain} 的世界里，${data.identity} 只需要保持 ${data.skills} 的热情，牛熊无关紧要。”`,
    `“${data.identity} 的信仰是：在 ${data.chain} 上，${data.skills} 能让你拥有无限可能。”`,
    `“${data.identity} 认为，${data.chain} 的波动是最好的导师，${data.skills} 是最好的武器。”`,
    `“${data.identity} 说：${data.chain} 的牛熊是短暂的，${data.skills} 是永恒的。”`,
  ]

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  return {
    title: random(titles),
    intro: random(intros),
    experiences: Array.from({ length: 3 }, () => random(experiences)),
    quote: random(quotes),
  }
}
