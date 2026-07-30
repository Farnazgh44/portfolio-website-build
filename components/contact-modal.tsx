'use client'

import { useState } from 'react'
import { X, Mail, FileText, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/site'

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.open(`${CONTACT.mailto}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
      onClose()
    }, 2000)
  }

  if (!open) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(25,28,32,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-ink/30 transition-colors hover:text-ink"
        >
          <X className="size-5" strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_180px]">

          {/* ── Left: form ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-ink">Name*</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-ink/40 focus:ring-2 focus:ring-ink/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Email*</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-ink/40 focus:ring-2 focus:ring-ink/10"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-lg border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-ink/40 focus:ring-2 focus:ring-ink/10"
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-full border border-ink/25 px-6 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {sent ? 'Opening email…' : 'Submit'}
              </button>
            </div>
          </form>

          {/* ── Right: links + status ── */}
          <div className="flex flex-col rounded-xl border border-ink/10 bg-ink/[0.03] px-4 py-3">

            {/* Email */}
            <a
              href={CONTACT.mailto}
              className="flex items-start gap-3 py-3 transition-opacity hover:opacity-70"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-ink" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-medium text-ink">Email</p>
                <p className="mt-0.5 break-all text-[11px] font-light text-ink/55">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            <div className="h-px bg-ink/8" />

            {/* LinkedIn */}
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 py-3 transition-opacity hover:opacity-70"
            >
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-[11px] font-bold text-ink">
                in
              </span>
              <div>
                <p className="text-sm font-medium text-ink">LinkedIn</p>
                <p className="mt-0.5 text-[11px] font-light text-ink/55">Connect with me</p>
              </div>
            </a>

            <div className="h-px bg-ink/8" />

            {/* Resume */}
            <a
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 py-3 transition-opacity hover:opacity-70"
            >
              <FileText className="mt-0.5 size-4 shrink-0 text-ink" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-medium text-ink">Resume</p>
                <p className="mt-0.5 text-[11px] font-light text-ink/55">Download CV</p>
              </div>
            </a>

            {/* Status + Location */}
            <div className="mt-auto border-t border-ink/10 pt-3">
              <div className="flex items-center gap-2 py-1">
                <span className="size-2 shrink-0 rounded-full bg-green-500" />
                <p className="text-[11px] text-ink/65">Open For Projects</p>
              </div>
              <div className="flex items-center gap-2 py-1">
                <MapPin className="size-3 shrink-0 text-ink/45" strokeWidth={1.75} />
                <p className="text-[11px] text-ink/65">Vancouver, BC</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
