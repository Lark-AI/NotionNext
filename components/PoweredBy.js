import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered By YUEJI.ORG</span>
      <a
        href='https://yueji.org'
        className='underline justify-start'>
        &nbsp;
      </a>
    </div>
  )
}
