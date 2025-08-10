import ContentLoader from 'react-content-loader'

type Props = { index: number }

export const VideoCardSkeleton = ({ index }: Props) => (
    <ContentLoader
        speed={2.2}
        width={413}
        height={478}
        viewBox='0 0 413 478'
        backgroundColor='#d0d0d0'
        foregroundColor='#f0f0f0'
        style={{ borderRadius: '18px' }}
        uniqueKey={`video-skeleton-${index}`}
        beforeMask={
            <rect
                x='0'
                y='0'
                rx='18'
                ry='18'
                width='413'
                height='478'
                fill='#e6e4e0'
            />
        }
    >
        <rect
            x='20'
            y='400'
            rx='4'
            ry='4'
            width='100'
            height='16'
        />

        <rect
            x='20'
            y='430'
            rx='4'
            ry='4'
            width='260'
            height='22'
        />
    </ContentLoader>
)
