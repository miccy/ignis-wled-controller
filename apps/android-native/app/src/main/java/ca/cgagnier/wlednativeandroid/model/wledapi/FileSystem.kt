package ca.cgagnier.wlednativeandroid.model.wledapi

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class FileSystem (

	@Json(name = "u") val spaceUsed : Int? = null,
	@Json(name = "t") val spaceTotal : Int? = null,
	@Json(name = "pmt") val presetLastModification : Int? = null
)