export type LegalPageBundleItem = {
  label: string
  /** Gatsby の内部パス（先頭スラッシュ） */
  to: string
}

export type LegalPageBundle = {
  id: string
  /** メニュー見出し（例: アプリ名・プロダクト名） */
  title: string
  items: LegalPageBundleItem[]
}

export const LEGAL_PAGE_BUNDLES: Record<string, LegalPageBundle> = {
  saikuru: {
    id: "saikuru",
    title: "SAIKURU",
    items: [
      { label: "Support", to: "/saikuru/support" },
      { label: "Privacy Policy", to: "/saikuru/privacy-policy" },
      { label: "Terms & Conditions", to: "/saikuru/terms" },
      // LP 追加時: { label: '…', to: '/saikuru' },
    ],
  },
}

export function getLegalPageBundle(id: string): LegalPageBundle | undefined {
  return LEGAL_PAGE_BUNDLES[id]
}
