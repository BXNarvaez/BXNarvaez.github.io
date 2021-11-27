class Soundscape {
    constructor (
        name,
        id,
        video,
        audio
    ) {
        this.name = name;
        this.id = id;
        this.video = video;
        this.audio = audio;
    }
}

const Pelham = new Soundscape (

    "Pelham Parkway",

    "soundscape_0",

    '../mediaVideos/pelham.MP4',

    '../mediaAudio/pelham.WAV'
    
)

const Fordham = new Soundscape (

    "Fordham Road",

    "soundscape_1",

    '../mediaVideos/fordham.MP4',

    '../mediaAudio/fordham.WAV'
)

const Lincoln = new Soundscape (

    "Lincoln Center",

    "soundscape_2",

    '../mediaVideos/lincoln.MP4',
    
    '../mediaAudio/lincoln.WAV'

)

const High = new Soundscape (

    "The High Line",

    "soundscape_3",

    '../mediaVideos/high.MP4',
    
    '../mediaAudio/high.WAV'

)

const River = new Soundscape (

    "East River Park",

    "soundscape_4",

    '../mediaVideos/river.MP4',
    
    '../mediaAudio/river.WAV'

)

const soundscapeData = [Pelham, Fordham, Lincoln, High, River]

export default soundscapeData;