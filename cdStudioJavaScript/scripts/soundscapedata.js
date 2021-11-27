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

const Lincoln = new Soundscape (

    "Lincoln Center",

    "soundscape_1",

    '../mediaVideos/lincoln.MP4',
    
    '../mediaAudio/lincoln.WAV'

)

const High = new Soundscape (

    "The High Line",

    "soundscape_2",

    '../mediaVideos/high.MP4',
    
    '../mediaAudio/high.WAV'

)

const River = new Soundscape (

    "East River Park",

    "soundscape_3",

    '../mediaVideos/river.MP4',
    
    '../mediaAudio/river.WAV'

)

const soundscapeData = [Pelham, Lincoln, High, River]

export default soundscapeData;