import React from 'react'

const htmlEntityMap: Record<string, string> = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: '\u00A0',
    hellip: '…',
    laquo: '«',
    raquo: '»',
    ldquo: '“',
    rdquo: '”',
    lsquo: '‘',
    rsquo: '’',
    mdash: '—',
    ndash: '–',
    middot: '·',
}

/**
 * HTMLエンティティを通常の文字にデコードします
 * @param text - HTMLエンティティを含む可能性のある文字列
 * @returns デコードされた文字列
 */
export const decodeHtmlEntities = (text: string): string => {
    if (!text || !text.includes('&')) {
        return text
    }

    return text.replace(/&(#(?:x[0-9a-fA-F]+|\d+)|[a-zA-Z][\w:-]*);/g, (match, entity) => {
        if (entity.startsWith('#x') || entity.startsWith('#X')) {
            const codePoint = parseInt(entity.slice(2), 16)
            if (!Number.isNaN(codePoint)) {
                return String.fromCodePoint(codePoint)
            }
        } else if (entity.startsWith('#')) {
            const codePoint = parseInt(entity.slice(1), 10)
            if (!Number.isNaN(codePoint)) {
                return String.fromCodePoint(codePoint)
            }
        } else {
            const normalized = entity.toLowerCase()
            if (normalized in htmlEntityMap) {
                return htmlEntityMap[normalized]
            }
        }

        return match
    })
}

/**
 * 文字列内の\n改行文字を<br/>タグに変換してReact要素として返す
 * @param text - 改行文字(\n)を含む可能性のある文字列
 * @returns React要素の配列
 */
export const renderTextWithLineBreaks = (text: string): React.ReactElement => {
    const decodedText = decodeHtmlEntities(text)
    const lines = decodedText.split('\n')

    return (
        <>
            {lines.map((line, index) => (
                <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                </span>
            ))}
        </>
    )
}

/**
 * サーバーとクライアント間で一貫した日付フォーマットを提供します
 * @param date - DateオブジェクトまたはDate文字列
 * @returns YYYY/MM/DD形式の文字列
 */
export const formatDate = (date: string | Date): string => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
}
