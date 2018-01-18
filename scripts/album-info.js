{
	// added the album title to the HTMKL
	$('#album-title').text(album.title);
	//added the album photo to the html by using .attr to add the src that was missing
	$('img#album-cover-art').attr('src', album.albumArtUrl);
	//now add artist info (pablo picaso) <h2 class="artist"></h2>
	$('.artist').text(album.artist);
	//now add the release info <div id="release-info"></div>
	$('#release-info').text(album.releaseInfo);
}