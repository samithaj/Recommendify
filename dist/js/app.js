var searchForm=$("#searchform"),input=$('input[name="username"]'),result=$(".search-result");searchForm.submit(function(e){e.preventDefault(),hideContainers(),$.getJSON("https://crossorigin.me/http://www.last.fm/player/station/user/"+input.val()+"/recommended?ajax=1").done(process).fail(function(){$("#error-message").html("<p>Error fetching your data. This may be due wrong username or api connection error.</p><p>Please refresh the page and try again</p>").show(),$("#message-container").fadeIn("fast")})});var timer;input.on("keyup",function(){clearTimeout(timer),timer=setTimeout(function(){input.val().length>2&&searchForm.submit()},500)}),input.on("keydown",function(){clearTimeout(timer)}),result.click(function(){result.select()});var process=function(e){for(var t=[],r=0;r<e.playlist.length;r++)for(var n=!1,a=0;a<e.playlist[r].playlinks.length;a++)if("spotify"==e.playlist[r].playlinks[a].affiliate){t.push(e.playlist[r].playlinks[a].id),n=!0;break}$("#result-link").attr("href","spotify:trackset:Playlist:"+t.join(",")),$("#result-textarea").val($.map(t,function(e,t){return"spotify:track:"+e}).join("\n")),$("#result-container").fadeIn("fast")},hideContainers=function(){$('div[rel="alert"], div[rel="container"]').hide()};