import React from "react"
import { UploadButton } from "@/utils/uploadthing"

const ExampleUpload = () => {
	return (
		<UploadButton
			endpoint="imageUploader"
			onClientUploadComplete={(res) => {
				// Do something with the response
				console.log("Files: ", res)
				alert("Upload Completed")
			}}
			onUploadError={(error: Error) => {
				// Do something with the error.
				alert(`ERROR! ${error.message}`)
			}}
		/>
	)
}

export default ExampleUpload
