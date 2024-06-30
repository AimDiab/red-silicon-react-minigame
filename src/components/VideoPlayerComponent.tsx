import './VideoPlayerComponent.css';

// FUTURE IMPROVEMENT: Pass in autoplay and controls as props as well to maximize reusability
interface Props {
    videoSource: string;
    videoWidth: number;
    videoHeight: number;
}

/**
 * A simple reusable HTML5 video component.
 */
function VideoPlayerComponent({videoSource, videoWidth, videoHeight}: Props) {
    return (
        <>
        <div className="video-player-container">
            <video width={videoWidth} height={videoHeight} controls autoPlay>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        </>
    );
    
}

export default VideoPlayerComponent