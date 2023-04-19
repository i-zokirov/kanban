import { useEffect, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { addMediaToTask } from '../../../redux/features/media/media-slice'
import { useUploadFileMutation } from '../../../redux/features/upload/uploadFile-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Alert from '../Alert/Alert'
import Spinner from '../Spinner/Spinner'

interface IFormData {
  file: File | null
}

type APIError = {
  status: number
  data: {
    message: string
    statusCode: number
  }
}

const initialFormData: IFormData = {
  file: null
}

const MultipartForm = () => {
  const [formData, setFormData] = useState<IFormData>(initialFormData)
  const [apiError, setError] = useState<APIError | null>(null)
  const [uploadFile, { data, isLoading, isError, error }] =
    useUploadFileMutation()
  const task = useAppSelector((state) => state.modal.content)
  const dispatch = useAppDispatch()
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        file:
          e.target && e.target.files && e.target.files.length > 0
            ? e.target.files[0]
            : null
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formDataToSend = new FormData()
    formDataToSend.append('file', formData.file as File)
    formDataToSend.append('mediaId', task ? task._id : '')
    await uploadFile({ formData: formDataToSend })
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      setFormData(initialFormData)
      dispatch(
        addMediaToTask({
          taskId: task ? task._id : '',
          media: [
            { publicUrl: data.publicUrl, filename: data.metadata.fileName }
          ]
        })
      )
    }
    if (isError) {
      console.log(isError)
      console.log(error)
      setError(error as APIError)
    }
  }, [data, isError, error])
  return (
    <form onSubmit={handleSubmit}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Default size
      </label>
      <input
        className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileInputChange}
      />

      {isError && apiError && (
        <Alert type="danger" message={apiError.data.message} />
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <button
          className="flex items-center disabled border border-red-500 text-red-500 rounded px-3 py-1 hover:bg-red-500 hover:text-white focus:outline-none"
          type="submit"
          disabled={formData.file === null}
        >
          <AiOutlineUpload />
          Upload file
        </button>
      )}
    </form>
  )
}

export default MultipartForm
