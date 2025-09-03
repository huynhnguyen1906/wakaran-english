import React from 'react'

/**
 * 文字列内の\n改行文字を<br/>タグに変換してReact要素として返す
 * @param text - 改行文字(\n)を含む可能性のある文字列
 * @returns React要素の配列
 */
export const renderTextWithLineBreaks = (text: string): React.ReactElement => {
    return (
        <>
            {text.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    {index < text.split('\n').length - 1 && <br />}
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
