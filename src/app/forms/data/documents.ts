export interface DocumentData {
  title: string
  fileName: string
  downloadName: string
}

export const healthManagementForms: DocumentData[] = [
  {
    title: "登園届",
    fileName: "toentodoke.pdf",
    downloadName: "登園届.pdf"
  },
  {
    title: "意見書", 
    fileName: "ikensho.pdf",
    downloadName: "意見書.pdf"
  },
  {
    title: "与薬連絡票",
    fileName: "yoyaku.pdf", 
    downloadName: "与薬連絡票.pdf"
  },
  {
    title: "登園届（インフルエンザ用）",
    fileName: "infurutouenntodoke.pdf",
    downloadName: "登園届(インフルエンザ用).pdf"
  }
]

export const saturdayCare: DocumentData[] = [
  {
    title: "土曜保育利用申込書",
    fileName: "saturdayuse.pdf",
    downloadName: "土曜保育利用申込書.pdf"
  },
  {
    title: "土曜保育勤務証明書", 
    fileName: "saturdaywork.pdf",
    downloadName: "土曜保育勤務証明書.pdf"
  }
]