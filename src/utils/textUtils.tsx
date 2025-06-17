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
