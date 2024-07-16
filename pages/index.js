import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <div className="logo">
          <img src="/logo.png" alt="Site Logo" className="h-12" />
        </div>
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold mb-2">
            YouTube Thumbnail Downloader
          </h1>
          <p className="text-gray-600">
            Download high-quality thumbnails from YouTube videos.
          </p>
        </div>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">YouTube Thumbnail Downloader</h2>
        <p>▷ Save YT Video Thumbnails</p>
        <p>
          Get free thumbnail images of any YouTube videos in Full HD (1080), HD (720), SD, and also in small size. Currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos.
        </p>

        <h3 className="text-xl font-semibold mt-6">What is the use of this YouTube Thumbnail Grabber website?</h3>
        <p>
          People use this YouTube thumbnail downloader website to get thumbnails from any YouTube videos. These thumbnails can be used in presentations, animation work, or various other activities.
        </p>

        <h3 className="text-xl font-semibold mt-6">How to use this YouTube thumbnail downloader website?</h3>
        <p>
          Paste the YouTube URL in the input box; the moment you paste the link, it will automatically generate different sizes of thumbnails for you. Click on the thumbnail download button, and it will be automatically downloaded to your system. If you are using an Android phone, you have to save the images, and if you are using an iPhone, the process may vary.
        </p>

        <h3 className="text-xl font-semibold mt-6">Is it legal to download YouTube thumbnails?</h3>
        <p>
          Of course, it's 100% legal to download any YouTube video thumbnails, but keep in mind that both the thumbnail and the video are copyrighted products. You should seek author permissions before reusing them.
        </p>

        <h3 className="text-xl font-semibold mt-6">Compatibility of this YT thumbnail grabber website</h3>
        <p>
          This YouTube thumbnail downloader website works well on all devices except iPhones, as iPhones don't allow saving images. However, if you are using a jailbroken iPhone, there should be no problem. It also works fine on almost all kinds of Android devices and laptop or desktop systems.
        </p>

        <h3 className="text-xl font-semibold mt-6">Is there any Copyright risk on YouTube Thumbnails?</h3>
        <p>
          Any YouTube screenshot you download is subject to the copyright of the respective video owner. If you want to use it in your work, you should ask for permission. While reusing on YouTube can potentially create problems, using these thumbnails on websites for creating logos or other design work usually does not lead to copyright issues.
        </p>

        <h3 className="text-xl font-semibold mt-6">Is reusing YouTube thumbnails SEO friendly?</h3>
        <p>
          Reusing YouTube thumbnails is not SEO friendly because most thumbnails on YouTube are indexed by Google. Google can distinguish between unique and duplicate thumbnails, so it's not recommended for SEO. However, you can make your thumbnail unique by adding effects using software like Photoshop, making it more suitable for SEO.
        </p>

        <p className="text-xl font-semibold mt-6">YouTube video thumbnail download</p>
      </section>

      <footer className="text-center mt-12">
        <p>Copyright 2024</p>
      </footer>
    </div>
  );
};

export default Index;
