import pafy

url = "https://www.youtube.com/watch?v=RxCEMy022Do"
video = pafy.new(url)

audios = video.getbestaudio()
audios.download()