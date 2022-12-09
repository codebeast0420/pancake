import { useMemo } from 'react'
import { useActiveIfoWithBlocks } from 'hooks/useActiveIfoWithBlocks'
import { useCurrentBlock } from 'state/block/hooks'

export const useMenuItemsStatus = (): Record<string, string> => {
  const currentBlock = useCurrentBlock()
  const activeIfo = useActiveIfoWithBlocks()

  const ifoStatus =
    null

  return useMemo(() => {
    return ifoStatus
      ? {
          '/ifo': ifoStatus === 'coming_soon' ? 'soon' : ifoStatus,
        }
      : null
  }, [ifoStatus])
}
