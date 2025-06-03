// @ts-check

/** @type {import("prettier").Config} */
const config = {
    // 末尾のカンマ設定
    // es5 - オブジェクトや配列の最後の要素にカンマを付与
    trailingComma: 'es5',

    // インデントの幅を4スペースに設定
    tabWidth: 4,

    // 文末のセミコロンを省略
    semi: false,

    // 文字列をシングルクォートで囲む
    singleQuote: true,

    // JSXでもシングルクォートを使用
    jsxSingleQuote: true,

    // 1行の最大文字数を120文字に設定
    printWidth: 120,

    // JSX/HTMLの属性を1行に1つずつ記述
    // 複数の属性がある場合に可読性が向上
    singleAttributePerLine: true,

    // 三項演算子の改行を改善する実験的機能を有効化
    // 長い三項演算子をより読みやすく整形
    experimentalTernaries: true,

    // Prettier プラグイン
    plugins: [
        // import文の順序を制御
        '@trivago/prettier-plugin-sort-imports',
        // Tailwind CSSのクラスを整形
        'prettier-plugin-tailwindcss',
    ],

    // import文の順序を定義
    importOrder: [
        // Reactライブラリの import を最優先
        '^(react/(.*)$)|^(react$)',
        // Next.js関連の import を2番目に
        '^(next/(.*)$)|^(next$)',
        // サードパーティのモジュール
        '<THIRD_PARTY_MODULES>',
        // 内部コンポーネント
        '^@/components/(.*)$',
        // ユーティリティ関数
        '^@/lib/(.*)$',
        // スタイル関連
        '^@/styles/(.*)$',
        // その他の相対インポート
        '^[./]',
    ],

    // import文のグループ間に空行を挿入
    importOrderSeparation: true,

    // import文内の要素をアルファベット順にソート
    importOrderSortSpecifiers: true,
}

module.exports = config
