import React, { useState } from 'react'
import { Code, RefreshCw } from 'lucide-react'
import { generateResume } from '../utils/generateResume'

type FormData = {
  identity: string
  chain: string
  skills: string
  highlight: string
}

export default function ResumeGenerator() {
  const [form, setForm] = useState<FormData>({
    identity: '',
    chain: '',
    skills: '',
    highlight: '',
  })
  const [resume, setResume] = useState<{
    title: string
    intro: string
    experiences: string[]
    quote: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = () => {
    const res = generateResume(form)
    setResume(res)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center mb-6">
        <Code className="mr-2 text-indigo-600" size={28} />
        <h1 className="text-2xl font-bold text-gray-800">Web3 简历生成器</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleGenerate()
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            你的 Web3 身份
          </label>
          <select
            name="identity"
            value={form.identity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">请选择</option>
            <option value="散户">散户</option>
            <option value="Dev">Dev</option>
            <option value="KOL">KOL</option>
            <option value="VC">VC</option>
            <option value="空投猎人">空投猎人</option>
            <option value="OG">OG</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            常用链
          </label>
          <select
            name="chain"
            value={form.chain}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">请选择</option>
            <option value="ETH">ETH</option>
            <option value="Solana">Solana</option>
            <option value="Base">Base</option>
            <option value="BSC">BSC</option>
            <option value="随便写">随便写</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            擅长技能
          </label>
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            rows={2}
            placeholder="炒币、撸空投、写合约、画饼、发推、做 AMA 等"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            人生高光时刻
          </label>
          <textarea
            name="highlight"
            value={form.highlight}
            onChange={handleChange}
            rows={2}
            placeholder="比如「某年牛市翻 10 倍」「空投吃到大毛」"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RefreshCw className="mr-2" size={18} />
            生成简历
          </button>
        </div>
      </form>

      {resume && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            {resume.title}
          </h2>
          <p className="text-gray-700 mb-4">{resume.intro}</p>

          <h3 className="text-lg font-medium text-indigo-600 mb-2">
            Web3 工作经历
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {resume.experiences.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>

          <blockquote className="mt-6 italic text-gray-600 border-l-4 border-indigo-300 pl-4">
            {resume.quote}
          </blockquote>
        </div>
      )}
    </div>
  )
}
