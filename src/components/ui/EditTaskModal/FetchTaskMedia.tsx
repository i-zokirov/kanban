import React, { useEffect } from 'react'
import { Media } from '../../../interfaces'
import { addMediaToTask } from '../../../redux/features/media/media-slice'
import { useGetMediaByIdQuery } from '../../../redux/features/upload/uploadFile-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

const FetchTaskMedia: React.FC<{ taskId: string }> = ({ taskId }) => {
  const { data } = useGetMediaByIdQuery(taskId)
  const media = useAppSelector((state) => state.media)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (data) {
      dispatch(addMediaToTask({ taskId, media: data }))
    }
  }, [data, taskId])
  return (
    <div>
      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Media
      </p>
      {media[taskId] && media[taskId].length ? (
        media[taskId]?.map((media: Media, index: number) => (
          <React.Fragment key={index}>
            <a
              className="font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline"
              href={media.publicUrl}
              target="_blank"
            >
              {media.filename.includes('/')
                ? media.filename.split('/')[2]
                : media.filename}
            </a>
            ,{' '}
          </React.Fragment>
        ))
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No file uploaded
        </p>
      )}
    </div>
  )
}

export default FetchTaskMedia
